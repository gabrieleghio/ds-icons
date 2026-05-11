/**
 * import-figma-icons.ts
 *
 * Fetches all icon SVGs from the Figma file and saves them to:
 *   raw/{category}/{IconName}/{IconName}_{size}.svg
 *
 * Exceptions (fixed subfolders regardless of spatial category):
 *   raw/payment-flags/payment/{Name}/{Name}_{size}.svg   – sizes 16, 24, 48
 *   raw/payment-flags/flags/{CountryCode}/{CountryCode}_{size}.svg – sizes 16, 24, 48, 64
 *
 * Category mapping is derived from the spatial position of each COMPONENT_SET
 * relative to the known category frames on the "✅ New Icons" page.
 *
 * Usage:
 *   FIGMA_TOKEN=<your_personal_access_token> pnpm exec tsx scripts/import-figma-icons.ts
 *
 * Options (env vars):
 *   FIGMA_TOKEN   – required. Personal access token from Figma > Settings > Personal access tokens
 *   DRY_RUN=1     – print what would be saved without writing any files
 *   CATEGORY=generic  – only process icons in this spatial category (generic|glasses|faces|social|payment-flags|brands)
 */

import * as fs from "fs";
import * as path from "path";
import { sanitizeName } from "./utils/sanitize-name";

// ─── Configuration ────────────────────────────────────────────────────────────

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = "vznoPas39vylM4zzOV0HpU";
const PAGE_ID = "2055:4"; // ✅ New Icons
const RAW_DIR = path.join(__dirname, "../raw");
const DRY_RUN = process.env.DRY_RUN === "1";
const ONLY_CAT = process.env.CATEGORY ?? null;

/**
 * Bounding boxes of the category frames on the canvas.
 * Refresh by running: pnpm exec tsx scripts/inspect-figma-layout.ts
 */
const CATEGORY_FRAMES = [
  { category: "generic", x: -32656, y: -6065, w: 5166, h: 12486 },
  { category: "glasses", x: -26844, y: -6065, w: 4948, h: 12486 },
  { category: "faces", x: -21254, y: -6065, w: 4948, h: 12486 },
  { category: "social", x: -15762, y: -6065, w: 1920, h: 12486 },
  { category: "payment-flags", x: -13214, y: -6065, w: 2411, h: 50979 },
  { category: "brands", x: -10175, y: -6065, w: 2411, h: 12486 },
] as const;

// Sizes for standard icons (must match variant names in Figma: "Size=16" etc.)
const SIZES = [16, 20, 24, 32, 40, 48] as const;

// Special component set IDs with non-standard variant naming
const PAYMENTS_NODE_ID = "2072:2629"; // variants: "Payments Logos=Affirm, Size=48"  — sizes 16/24/48
const FLAGS_NODE_ID = "2072:1313"; // variants: "Country=AD, Size=24"             — sizes 16/24/48/64

// ─── Types ────────────────────────────────────────────────────────────────────

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  x?: number;
  y?: number;
  absoluteBoundingBox?: { x: number; y: number; width: number; height: number };
  children?: FigmaNode[];
}

interface FigmaFileNodes {
  nodes: Record<string, { document: FigmaNode }>;
}

interface FigmaImagesResponse {
  err: string | null;
  images: Record<string, string | null>;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getCategory(nodeX: number): string {
  for (const frame of CATEGORY_FRAMES) {
    if (nodeX >= frame.x && nodeX < frame.x + frame.w) {
      return frame.category;
    }
  }
  return "generic"; // fallback for anything outside known frames
}

/**
 * Converts a Figma component set name to a safe PascalCase identifier.
 * "Icon Sun Light"              → "SunLight"
 * "Icon Arrow,Direction Right"  → "ArrowDirectionRight"
 * "UPF30+"                      → "UPF30"
 * "12MP"                        → "Icon12MP"
 */
function toIconName(componentSetName: string): string {
  // Strip leading "Icon " prefix that Figma adds to icon component sets
  const stripped = componentSetName.replace(/^Icon\s+/i, "");
  return sanitizeName(stripped);
}
/**
 * Parse a single variant node into { nodeId, filePath } based on the parent
 * component set type. Returns null if the variant should be skipped.
 */
function parseVariantEntry(
  cs: FigmaNode,
  child: FigmaNode,
  category: string,
): { nodeId: string; filePath: string } | null {
  // ── Payments: "Payments Logos=Affirm, Size=48" ─────────────────────────
  if (cs.id === PAYMENTS_NODE_ID) {
    const m = child.name.match(/Logos=([^,]+),\s*Size=(\d+)/);
    if (!m) return null;
    const name = m[1].trim().replace(/\s+/g, "");
    const size = parseInt(m[2], 10);
    if (![16, 24, 48].includes(size)) return null;
    return {
      nodeId: child.id,
      filePath: path.join(
        RAW_DIR,
        "payment-flags",
        "payment",
        name,
        `${name}_${size}.svg`,
      ),
    };
  }

  // ── Flags: "Country=AD, Size=24" ──────────────────────────────────────
  if (cs.id === FLAGS_NODE_ID) {
    const m = child.name.match(/Country=([^,]+),\s*Size=(\d+)/);
    if (!m) return null;
    const code = m[1].trim();
    const size = parseInt(m[2], 10);
    if (![16, 24, 48, 64].includes(size)) return null;
    return {
      nodeId: child.id,
      filePath: path.join(
        RAW_DIR,
        "payment-flags",
        "flags",
        code,
        `${code}_${size}.svg`,
      ),
    };
  }

  // ── Standard icons: "Size=N" ───────────────────────────────────────────
  const m = child.name.match(/Size=(\d+)/);
  if (!m) return null;
  const iconName = toIconName(cs.name);
  const size = parseInt(m[1], 10);
  if (!(SIZES as readonly number[]).includes(size)) return null;
  return {
    nodeId: child.id,
    filePath: path.join(RAW_DIR, category, iconName, `${iconName}_${size}.svg`),
  };
}
async function figmaGet<T>(endpoint: string): Promise<T> {
  if (!FIGMA_TOKEN) {
    throw new Error("FIGMA_TOKEN environment variable is not set.");
  }
  const url = `https://api.figma.com/v1${endpoint}`;
  const res = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API error ${res.status}: ${body}`);
  }
  return res.json() as Promise<T>;
}

async function downloadText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  return res.text();
}

// ─── Export logic ─────────────────────────────────────────────────────────────

/** Fetch SVG export URLs for a batch of node IDs (max ~800 per call). */
async function fetchExportUrls(
  nodeIds: string[],
): Promise<Record<string, string | null>> {
  const ids = nodeIds.join(",");
  const data = await figmaGet<FigmaImagesResponse>(
    `/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false&svg_simplify_stroke=true`,
  );
  if (data.err) throw new Error(`Figma images API error: ${data.err}`);
  return data.images;
}

/** Save SVGs in batches to avoid hitting the API per-request node limit. */
async function exportBatch(
  entries: Array<{ nodeId: string; filePath: string }>,
): Promise<void> {
  const BATCH_SIZE = 200;
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const nodeIds = batch.map((e) => e.nodeId);
    console.log(
      `  Exporting batch ${Math.floor(i / BATCH_SIZE) + 1} / ${Math.ceil(entries.length / BATCH_SIZE)} (${batch.length} nodes)…`,
    );

    const urls = await fetchExportUrls(nodeIds);

    for (const entry of batch) {
      const url = urls[entry.nodeId];
      if (!url) {
        console.warn(`  ⚠ No export URL for node ${entry.nodeId}`);
        continue;
      }
      if (DRY_RUN) {
        console.log(`  [dry-run] would write → ${entry.filePath}`);
        continue;
      }
      const svgContent = await downloadText(url);
      fs.mkdirSync(path.dirname(entry.filePath), { recursive: true });
      fs.writeFileSync(entry.filePath, svgContent, "utf-8");
      console.log(`  ✓ ${path.relative(RAW_DIR, entry.filePath)}`);
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!FIGMA_TOKEN) {
    console.error(
      "Error: FIGMA_TOKEN is not set. Export a personal access token from Figma > Settings > Personal access tokens.",
    );
    process.exit(1);
  }

  console.log("Fetching Figma page structure…");
  const data = await figmaGet<FigmaFileNodes>(
    `/files/${FILE_KEY}/nodes?ids=${PAGE_ID}`,
  );
  const page = data.nodes[PAGE_ID]?.document;
  if (!page) throw new Error(`Page ${PAGE_ID} not found in response`);

  // Collect all COMPONENT_SETs from the page
  const componentSets = (page.children ?? []).filter(
    (n) => n.type === "COMPONENT_SET",
  );
  console.log(`Found ${componentSets.length} component sets on the page.`);

  // Build the export queue
  const entries: Array<{ nodeId: string; filePath: string }> = [];
  const skipped: string[] = [];

  for (const cs of componentSets) {
    const csX = cs.absoluteBoundingBox?.x ?? cs.x ?? 0;
    const category = getCategory(csX);

    if (ONLY_CAT && category !== ONLY_CAT) continue;

    // Map each variant child to its target file path
    for (const child of cs.children ?? []) {
      const entry = parseVariantEntry(cs, child, category);
      if (!entry) {
        skipped.push(`${cs.name} / ${child.name}`);
        continue;
      }
      entries.push(entry);
    }
  }

  if (skipped.length) {
    console.warn(
      `⚠ Skipped ${skipped.length} variants with unrecognised names.`,
    );
  }

  console.log(
    `Exporting ${entries.length} SVG files${DRY_RUN ? " (DRY RUN)" : ""}…\n`,
  );
  await exportBatch(entries);

  const written = DRY_RUN ? 0 : entries.length;
  console.log(`\n✓ Done. ${written} SVGs saved to ${RAW_DIR}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
