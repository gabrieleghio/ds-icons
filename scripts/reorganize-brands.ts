/**
 * reorganize-brands.ts  (one-time migration)
 *
 * Groups existing raw/brands/* icon folders into brand subfolders:
 *   raw/brands/Oakley/OakleyCart/
 *   raw/brands/Nuance/NuanceAnswerCall/
 *   raw/brands/TargetOptical/TargetOpticalStore/
 *   raw/brands/RayBan/LogoRayBan/
 *   raw/brands/Costa/CostaRecycled/
 */

import * as fs from "fs";
import * as path from "path";

const BRANDS_DIR = path.join(__dirname, "../raw/brands");

// Maps prefix/exact name → brand subfolder name
const BRAND_RULES: Array<{ match: (name: string) => boolean; brand: string }> =
  [
    { match: (n) => n.startsWith("TargetOptical"), brand: "TargetOptical" },
    {
      match: (n) =>
        n.startsWith("Oakley") ||
        n.includes("OakleyOO") ||
        n === "ExclusiveExperiencesOakleyOO",
      brand: "Oakley",
    },
    {
      match: (n) => n.startsWith("Nuance") || n === "LogoNuanceAudio",
      brand: "Nuance",
    },
    {
      match: (n) => n.startsWith("RayBan") || n === "LogoRayBan",
      brand: "RayBan",
    },
    { match: (n) => n.startsWith("Costa"), brand: "Costa" },
  ];

function getBrand(name: string): string | null {
  for (const rule of BRAND_RULES) {
    if (rule.match(name)) return rule.brand;
  }
  return null;
}

const entries = fs.readdirSync(BRANDS_DIR);
let moved = 0;
const unmapped: string[] = [];

for (const entry of entries) {
  const entryPath = path.join(BRANDS_DIR, entry);
  if (!fs.statSync(entryPath).isDirectory()) continue;

  const brand = getBrand(entry);
  if (!brand) {
    unmapped.push(entry);
    continue;
  }

  const brandDir = path.join(BRANDS_DIR, brand);
  if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });

  const dest = path.join(brandDir, entry);
  fs.renameSync(entryPath, dest);
  console.log(`  ✓ ${entry}  →  ${brand}/${entry}`);
  moved++;
}

if (unmapped.length) {
  console.warn(`\n⚠ Could not map to a brand (left in place):`);
  unmapped.forEach((u) => console.warn(`  - ${u}`));
}

console.log(`\n✓ Done. Moved ${moved} folders.`);
