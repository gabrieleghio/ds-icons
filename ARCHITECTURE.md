# ds-icons Architecture

Scalable icon system architecture: **Multiple framework support (React/Lit), per-size tree shaking, dynamic color, universal distribution (React/Lit/static SVG/CMS/email).**

**Current state:** Scalable icon library across 6 categories. Standard icons have 6 sizes (16, 20, 24, 32, 40, 48); payment providers have 3 sizes (16, 24, 48); country flags have 4 sizes (16, 24, 48, 64). Brand icons are grouped by brand subfolder.

---

## Requirements

### Pixel perfect

- **11 icons** currently (scalable to 600+)
- **6 sizes per icon** for generic/glasses/faces/social (16, 20, 24, 32, 40, 48) — all pixel-perfect
- **3 sizes** for payment providers (16, 24, 48)
- **4 sizes** for country flags (16, 24, 48, 64)
- Only predefined sizes (no generic scaling)
- Organized in 6 categories: generic, brands, social, payment-flags, faces, glasses

### Performance

- **Two-level tree shaking:**
  - Per icon: `import { Home32 }` does not include `Close32`, `Settings32`, etc.
  - Per size: `import { Home32 }` does not include `Home16`, `Home24`, etc.
- **Estimated savings:** ~30KB gzipped per bundle of 30 icons

### Color and styling

- **Dynamic color** via CSS variables, state (hover/disabled/active), and React/Lit props
- **Dark mode support** — colors change with theme
- **Consumer customization** — props to override color, className, style

### Distribution

- **React package:** `@myorg/icons-react` — React components
- **Lit package:** `@myorg/icons-lit` — Lit render functions
- **Static SVGs:** published via npm and CDN from Figma, consumable for CMS/email without JS

### Developer experience

- **Consistent API** across React and Lit
- **TypeScript strict** — no arbitrary sizes, type validation
- **Accessibility guaranteed** — aria-hidden, focusable by default
- **Simple workflow** — export SVG, then `pnpm generate`

---

## Architecture

### 1. Single source of truth: `.svg` files

The `raw/` directory contains SVG files, organized by category and icon name. Some categories use an additional grouping level:

```
raw/
├── generic/
│   └── Backpack/
│       ├── Backpack_16.svg
│       ├── Backpack_20.svg
│       ├── Backpack_24.svg
│       ├── Backpack_32.svg
│       ├── Backpack_40.svg
│       └── Backpack_48.svg
├── brands/                        ← grouped by brand
│   ├── Oakley/
│   │   ├── OakleyCart/
│   │   │   ├── OakleyCart_16.svg
│   │   │   └── OakleyCart_32.svg
│   │   └── OakleyOOBag/
│   ├── Nuance/
│   ├── TargetOptical/
│   ├── RayBan/
│   └── Costa/
├── payment-flags/                 ← split into two subgroups
│   ├── payment/                   ← payment providers (16, 24, 48)
│   │   ├── Affirm/
│   │   │   ├── Affirm_16.svg
│   │   │   ├── Affirm_24.svg
│   │   │   └── Affirm_48.svg
│   │   └── Visa/
│   └── flags/                     ← country flags (16, 24, 48, 64)
│       ├── IT/
│       │   ├── IT_16.svg
│       │   ├── IT_24.svg
│       │   ├── IT_48.svg
│       │   └── IT_64.svg
│       └── US/
└── social/
    └── Instagram/
        ├── Instagram_16.svg
        └── ...
```

The generation scripts use a **recursive scanner** that handles any nesting depth, so adding a new grouping level requires no script changes.

**Why here?**

- Automation: SVGs are transformed into React/Lit components at build time

---

### 2. Architectural decision: React/Lit wrappers vs `<img>` tag

#### The problem with `<img>`

An `<img src="...">` loads the SVG as an isolated document (sandboxed). Page CSS **cannot reach** the SVG:

```tsx
// ❌ This does NOT work with <img>
<style>
  :root { --color-primary: #1a73e8; }
  .icon { color: var(--color-primary); }
</style>

<img src="home.svg" class="icon" />
// Image doesn't turn blue — CSS variables don't reach the sandboxed document
```

**Limitations of `<img>` tag:**

| Requirement                             | `<img>`      | Wrapper       | Note                                                    |
| --------------------------------------- | ------------ | ------------- | ------------------------------------------------------- |
| Inherit color via CSS variables         | ❌ No        | ✅ Yes        | CSS doesn't reach sandboxed SVG                         |
| Change color on state (hover, disabled) | ❌ No        | ✅ Yes        | CSS doesn't reach sandboxed SVG                         |
| Dark mode (theme color)                 | ❌ No        | ✅ Yes        | CSS variables change, SVG doesn't                       |
| React prop (dynamic color)              | ⚠️ Limited   | ✅ Yes        | Only `src`, not content                                 |
| Aria attributes (accessibility)         | ⚠️ Manual    | ✅ Guaranteed | Wrapper enforces `aria-hidden`                          |
| Per-size tree shaking                   | ❌ No        | ✅ Yes        | `<img>` is dynamic URL, bundler doesn't know which size |
| TypeScript strict                       | ❌ No        | ✅ Yes        | No URL validation                                       |
| Testing/mocking                         | ❌ Difficult | ✅ Easy       | Can mock the component                                  |

#### Solution: Inline SVG in DOM via wrapper

To meet requirements, SVG must be **inline in the DOM**, where CSS and React props can reach it:

```tsx
// ✅ With wrapper: SVG inline
<svg fill="currentColor" className="icon">
  <path d="..." />
</svg>

// Page CSS reaches the SVG
// .icon { color: var(--color-primary); }  ← works!
// .icon:hover { color: var(--color-primary-dark); }  ← works!
```

React/Lit wrappers are the mechanism to bring SVG inline into the bundle:

```tsx
// React wrapper generated by SVGR
export const Home32 = ({ color = "currentColor", className, style }) => (
  <svg
    viewBox="0 0 32 32"
    width={32}
    height={32}
    fill={color}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="..." />
  </svg>
);
```

```typescript
// Lit wrapper generated by custom script
export const renderHome32 = (color = "currentColor", className?: string) =>
  html`<svg
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="${color}"
    class="${className ?? ""}"
    aria-hidden="true"
    focusable="false"
  >
    ${unsafeHTML('<path d="..." />')}
  </svg>`;
```

#### Comparison: wrapper vs `<img>` for dynamic color

**With wrapper:**

```tsx
// Button with icon that changes color on hover
<button className={styles.button}>
  <Home32 className={styles.icon} /> {/* fill="currentColor" */}
  Close
</button>
```

```css
.button {
  color: var(--color-primary);
}
.button:hover {
  color: var(--color-primary-dark);
}
.icon {
  /* inherits color from button */
}
```

✅ **Result:** icon is blue, on hover becomes dark blue (consistent with button)

**With `<img>`:**

```tsx
<button className={styles.button}>
  <img src="https://cdn/home.svg" className={styles.icon} />
  Close
</button>
```

```css
.button {
  color: var(--color-primary);
}
.button:hover {
  color: var(--color-primary-dark);
}
.icon {
  /* has no effect on SVG content */
}
```

❌ **Result:** button text is blue and on hover becomes dark blue, but icon remains black (hardcoded in SVG file)

#### When `<img>` makes sense

If the requirement is **static, hardcoded color** (e.g., Apple logo that must always be red), then `<img>` is perfect:

```tsx
// Brand logo — intentionally invariant color
<img src="https://cdn/ApplePay_32.svg" alt="Apple Pay" />
// ✅ Simple, no wrapper needed, no JS
```

But that's **not an icon system** — it's a logo. An icon system has dynamic color.

---

### 3. Integrating icons in DS components

#### Architectural decision

DS components **do not manage internally** the mapping `component size → icon size`.

**Why:**

- Any internal mapping would couple the component to `@myorg/icons-react` (direct dependency)
- Rollup cannot tree-shake icons selected dynamically at runtime
- The mapping `sm → 16px, lg → 32px` is a **design convention**, not a technical rule
- Choosing the correct icon size is the consumer's responsibility in collaboration with the designer
- Different components have different semantics (Button size ≠ Badge size ≠ SearchInput size)

**Solution: `icon?: React.ReactNode`**

The consumer passes the JSX node of the icon **already rendered**.
The component simply renders it in the correct slot, with no mapping logic.

#### Generic components in DS

```tsx
// packages/components/src/Button.tsx
interface ButtonProps {
  icon?: React.ReactNode; // consumer renders the correct icon
  children: React.ReactNode;
}

export const Button = ({ icon, children }: ButtonProps) => (
  <button className="button">
    {icon && <span className="button__icon">{icon}</span>}
    <span>{children}</span>
  </button>
);

// packages/components/src/Badge.tsx
interface BadgeProps {
  icon?: React.ReactNode; // consumer renders the correct icon
  children: React.ReactNode;
}

export const Badge = ({ icon, children }: BadgeProps) => (
  <span className="badge">
    {icon && <span className="badge__icon">{icon}</span>}
    <span>{children}</span>
  </span>
);

// packages/components/src/SearchInput.tsx
interface SearchInputProps {
  icon?: React.ReactNode; // consumer renders the correct icon
  placeholder?: string;
}

export const SearchInput = ({ icon, placeholder }: SearchInputProps) => (
  <div className="search-input">
    {icon && <span className="search-input__icon">{icon}</span>}
    <input placeholder={placeholder} />
  </div>
);
```

**Recurring pattern:** no imports from `@myorg/icons-react`, zero coupling.

#### Consumer

```tsx
// App.tsx — consumer chooses size based on context
import { Home32, Home16, Search24, Check16 } from '@myorg/icons-react';

// Button lg uses 32px
<Button icon={<Home32 />}>Home</Button>

// Badge uses 16px (smaller)
<Badge icon={<Check16 />}>Done</Badge>

// SearchInput uses 24px
<SearchInput icon={<Search24 />} placeholder="Search..." />
```

#### Storybook as documentation

Stories explicitly show which size to use for each component/variant:

```tsx
// Button.stories.tsx
import { Home32, Home16, Home24, Home48 } from "@myorg/icons-react";

export const Small: Story = {
  args: {
    icon: <Home16 />, // ← documents: button sm uses 16px icons
    children: "Home",
  },
};

export const Large: Story = {
  args: {
    icon: <Home32 />, // ← documents: button lg uses 32px icons
    children: "Home",
  },
};

// Badge.stories.tsx
import { Check16 } from "@myorg/icons-react";

export const Success: Story = {
  args: {
    icon: <Check16 />, // ← documents: badge uses 16px icons
    children: "Success",
  },
};

// SearchInput.stories.tsx
import { Search24 } from "@myorg/icons-react";

export const Default: Story = {
  args: {
    icon: <Search24 />, // ← documents: search input uses 24px icons
    placeholder: "Search...",
  },
};
```

#### Tree shaking

- ✅ Consumer imports only the sizes they use → bundle includes only those
- ✅ No DS component imports from `@myorg/icons-react`
- ✅ Every static import in the consumer is tree-shakeable by Rollup
- ✅ Rollup sees exactly which sizes are imported

**Bundle example:**

```tsx
// App.tsx — uses multiple components with different sizes
import { Home32, Check16, Search24 } from '@myorg/icons-react';

<Button icon={<Home32 />}>Home</Button>
<Badge icon={<Check16 />}>Done</Badge>
<SearchInput icon={<Search24 />} />

// Bundle includes only Home32, Check16, Search24
// Does not include Home16, Home24, Home48, Check24, Search16, etc.
```

#### Trade-offs

| Aspect           | Pro                                                | Con                                     |
| ---------------- | -------------------------------------------------- | --------------------------------------- |
| **Simple API**   | ✅ Zero component/icon coupling, no imports in DS  | ⚠️ Consumer responsible for size choice |
| **Tree shaking** | ✅ Perfect: only sizes and icons actually imported | —                                       |
| **Mapping**      | ✅ Clear responsibility: consumer + Storybook      | ⚠️ Consumer might choose wrong size     |
| **Flexibility**  | ✅ Each component has independent semantics        | ⚠️ Documentation is critical            |

**Risk mitigation:**

- Storybook stories document which size to use for each component/variant
- Design system docs/tokens declare recommended mapping for each component
- TypeScript `Readonly<typeof ICON_SIZES>` can enforce size choices at application level

---

### 4. Icon name sanitization

#### Why sanitization is needed

Figma component set names (and therefore `raw/` folder names) can contain characters that are invalid in TypeScript/JavaScript identifiers and React component names:

- **Commas** — e.g. `CardPrice,CreditCard,Payment`
- **Plus signs** — e.g. `UPF30+`, `CompletePairFrame+Lenses`
- **Ampersands** — e.g. `Click&CollectInStorePickUpBag`, `SportFishing&Watersports`
- **Apostrophes** — e.g. `FireWhat'sHot`, `GreenWorldOcean'sDayWater`
- **Leading digits** — e.g. `12MP`, `3DRealTimeRender`

Any of these would produce invalid JSX (`export const UPF30+` is a syntax error).

#### The `sanitizeName` function

All scripts share a single utility at `scripts/utils/sanitize-name.ts`:

```ts
export function sanitizeName(raw: string): string {
  // 1. Split on any run of non-alphanumeric characters (, + & ' space - _ / etc.)
  // 2. PascalCase each segment
  // 3. Prepend "Icon" if the result starts with a digit
  const name = raw
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return /^\d/.test(name) ? `Icon${name}` : name;
}
```

**Examples:**

| Raw folder name                 | Sanitized component name       |
| ------------------------------- | ------------------------------ |
| `CardPrice,CreditCard,Payment`  | `CardPriceCreditCardPayment`   |
| `UPF30+`                        | `UPF30`                        |
| `Click&CollectInStorePickUpBag` | `ClickCollectInStorePickUpBag` |
| `CompletePairFrame+Lenses`      | `CompletePairFrameLenses`      |
| `FireWhat'sHot`                 | `FireWhatsHot`                 |
| `12MP`                          | `Icon12MP`                     |
| `3DRealTimeRender`              | `Icon3DRealTimeRender`         |
| `AI,ArtificialIntelligence`     | `AIArtificialIntelligence`     |

#### Where sanitization is applied

- **`generate-react.ts`** — derives component name from folder name via `sanitizeName`
- **`generate-lit.ts`** — same, for Lit render functions
- **`generate-index.ts`** — same, for barrel export names and import paths
- **`generate-static-svg.ts`** — derives output filename stem from SVG filename stem via `sanitizeName`
- **`import-figma-icons.ts`** — `toIconName()` now calls `sanitizeName` after stripping the "Icon " Figma prefix

#### Raw folder naming convention

`raw/` folder names should be **PascalCase alphanumeric only** (no commas, special chars, or leading digits). The `rename-special-chars.ts` one-time migration script enforces this for existing icons, and the generate scripts apply `sanitizeName` as a safety net for any future icons imported before cleanup.

---

### 5. Generation and output

#### Build pipeline

```
raw/{category}/{[subcategory/]}{IconName}/{IconName}_{size}.svg
    ↓ (custom script for React)
packages/react/src/{category}/{[subcategory/]}{IconName}/{IconName}{size}.tsx
    ↓ (Rollup + preserveModules)
dist/{category}/{[subcategory/]}{IconName}{size}.js
    ↓ (barrel index)
dist/index.js  ← @myorg/icons-react

raw/{category}/{[subcategory/]}{IconName}/{IconName}_{size}.svg
    ↓ (custom script for Lit)
packages/lit/src/{category}/{[subcategory/]}render{IconName}{size}.ts
    ↓ (Rollup + preserveModules)
dist/{category}/{[subcategory/]}render{IconName}{size}.js
    ↓ (barrel index)
dist/index.js  ← @myorg/icons-lit

raw/{category}/{[subcategory/]}{IconName}/{IconName}_{size}.svg
    ↓ (copy + SVGO)
packages/core/dist/svg/{IconName}_{size}.svg
    ↓ (npm publish)
npm @myorg/icons-core → static SVGs for CMS/email
```

#### Generation scripts

**`generate-react.ts`** — Custom script to parse SVG and generate React components:

```bash
raw/[category]/[...subcategory/][IconName]/[IconName]_[size].svg
  → packages/react/src/[category]/[...subcategory/][IconName]/[IconName][size].tsx
```

Parses SVG structure and generates native JSX (not `dangerouslySetInnerHTML`):

```tsx
export const Home32 = ({
  color = "currentColor",
  className,
  style,
}: IconProps) => (
  <svg
    viewBox="0 0 32 32"
    width={32}
    height={32}
    fill={color}
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="..." /> {/* native JSX, selectable via CSS */}
  </svg>
);
```

**`generate-lit.ts`** — Custom script to parse SVG and generate Lit render functions:

```bash
raw/[category]/[...subcategory/][IconName]/[IconName]_[size].svg
  → packages/lit/src/[category]/[...subcategory/][IconName]/render[IconName][size].ts
```

Generates `unsafeHTML` (Lit has no JSX):

```typescript
export const renderHome32 = ({
  color = "currentColor",
  className,
}: IconProps) =>
  html`<svg
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="${color}"
    class="${className ?? ""}"
    aria-hidden="true"
    focusable="false"
  >
    ${unsafeHTML('<path d="..." />')}
  </svg>`;
```

**`generate-static-svg.ts`** — Copy and optimize SVG for npm distribution:

```bash
raw/[category]/[IconName]/[IconName]_[size].svg → packages/core/dist/svg/[IconName]_[size].svg
```

Optimizes with SVGO (minification) and copies files for npm package publishing:

```typescript
// Reads raw/{IconName}/{IconName}_{size}.svg
// Applies SVGO for minification (removeViewBox: false to preserve viewBox)
// Writes to packages/core/dist/svg/{IconName}_{size}.svg
```

**`generate-index.ts`** — Generate barrel exports for index files:

```bash
Scans raw/ → generates packages/react/src/index.ts and packages/lit/src/index.ts
```

Creates re-exports for all generated icons:

```typescript
// packages/react/src/index.ts
export { Home32 } from "./generic/Home/Home32";
export { Backpack24 } from "./generic/Backpack/Backpack24";
export { OakleyCart32 } from "./brands/Oakley/OakleyCart/OakleyCart32";
export { Affirm16 } from "./payment-flags/payment/Affirm/Affirm16";
export { IT16 } from "./payment-flags/flags/IT/IT16";
// ... more exports
```

---

### 5. Package structure

#### `@gabrieleghio/icons-react`

```
packages/react/
├── src/
│   ├── [category]/
│   │   ├── [subcategory]/        {optional, e.g. brands/Oakley/, payment-flags/payment/}
│   │   │   └── [IconName]/       {generated}
│   │   │       ├── IconName16.tsx
│   │   │       └── IconName32.tsx
│   │   └── [IconName]/           {generated, flat categories}
│   │       ├── Home32.tsx
│   │       └── Home24.tsx
│   ├── index.ts                 {generated}
│   └── types.ts                 {IconProps interface}
├── dist/
│   ├── index.js
│   └── ...
└── package.json
```

**Build configuration:**

- Rollup with `preserveModules: true` → one `.js` file per icon×size
- `sideEffects: false` → bundler can tree-shake unused icons
- External: `react`, `react/jsx-runtime`

**Public API:**

```tsx
import { Home32, Backpack24, ApplePay16 } from "@gabrieleghio/icons-react";

<Home32 color="currentColor" className="button__icon" />;
```

#### `@gabrieleghio/icons-lit`

```
packages/lit/
├── src/
│   ├── [category]/
│   │   ├── [subcategory]/        {optional}
│   │   │   └── [IconName]/
│   │   │       ├── renderIconName16.ts
│   │   │       └── renderIconName32.ts
│   │   └── [IconName]/
│   │       ├── renderHome32.ts      {generated}
│   │       └── renderHome24.ts      {generated}
│   ├── index.ts                 {generated}
│   └── types.ts                 {IconProps interface}
├── dist/
│   ├── index.js
│   └── ...
└── package.json
```

**Public API:**

```typescript
import { renderHome32, renderBackpack24 } from "@gabrieleghio/icons-lit";

renderHome32({ color: "currentColor", className: "button__icon" });
```

#### `@gabrieleghio/icons-core` — Static SVGs

```
packages/core/
├── dist/
│   └── svg/
│       ├── Home_16.svg         {generated}
│       ├── Home_20.svg         {generated}
│       ├── Home_24.svg         {generated}
│       ├── Home_32.svg         {generated}
│       ├── Home_40.svg         {generated}
│       ├── Home_48.svg         {generated}
│       ├── Backpack_24.svg     {generated}
│       ├── Backpack_32.svg     {generated}
│       ├── ApplePay_16.svg     {generated}
│       ├── ApplePay_24.svg     {generated}
│       ├── ApplePay_48.svg     {generated}
│       └── ...
├── package.json
└── README.md
```

**Use cases:**

- Headless CMS that don't support React/Lit components
- HTML email templates (SVG inline or reference)
- Static documents that need SVGs without JS
- Custom CDN (copy files from npm to private CDN)

---

### 6. Consumer flow

#### React DS component

```tsx
// Button DS — zero dependencies on @myorg/icons-react
import styles from "./Button.module.css";

interface ButtonProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ icon, disabled, children }: ButtonProps) => (
  <button
    className={`${styles.button} ${disabled ? styles.disabled : ""}`}
    disabled={disabled}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    <span>{children}</span>
  </button>
);
```

```css
/* Button.module.css */
.button {
  color: var(--color-primary);
  transition: color 200ms;
}

.button:hover {
  color: var(--color-primary-dark);
}

.button:disabled {
  color: var(--color-disabled);
}

.icon {
  display: inline-flex;
  /* Inline icon inherits color via currentColor */
}
```

**End consumer:**

```tsx
// App uses Button DS with icons from @myorg/icons-react
import { Home32 } from "@myorg/icons-react";
import { Button } from "@myds/components";

<Button icon={<Home32 />}>Go Home</Button>;

// Consumer chooses icon size based on context
```

#### Lit DS component

```typescript
// Button Lit that uses icons
import { renderHome32, renderClose24 } from "@myorg/icons-lit";
import { LitElement, html, css } from "lit";

export class DsButton extends LitElement {
  @property() icon?: string = "home32";
  @property() size?: "sm" | "md" | "lg" = "md";
  @property() disabled = false;

  static styles = css`
    :host {
      --color-primary: var(--ds-color-primary, #1a73e8);
      --color-primary-dark: var(--ds-color-primary-dark, #0d47a1);
      --color-disabled: var(--ds-color-disabled, #ccc);
    }

    button {
      color: var(--color-primary);
      transition: color 200ms;
    }

    button:hover {
      color: var(--color-primary-dark);
    }

    button:disabled {
      color: var(--color-disabled);
    }

    .icon {
      display: inline-flex;
      align-items: center;
    }
  `;

  private renderIcon() {
    switch (this.icon) {
      case "home32":
        return renderHome32("currentColor", "icon");
      case "close24":
        return renderClose24("currentColor", "icon");
      default:
        return html``;
    }
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} class="${this.size}">
        <span class="icon">${this.renderIcon()}</span>
        <slot></slot>
      </button>
    `;
  }
}
```

---

## Tree shaking

### Example: app with 30 icons used out of 600 available

**Without per-size tree shaking:**

```tsx
import { Home } from "@myorg/icons-react"; // Home contains all 6 sizes

// Bundle includes:
// - Home (16, 20, 24, 32, 40, 48)
// - Close (16, 20, 24, 32, 40, 48)
// - ... (30 icons × 6 sizes)
// = 30 icons × 1.2KB per icon = 36KB gzipped
```

**With per-size tree shaking:**

```tsx
import { Home32, Close24, Settings16 } from "@myorg/icons-react";

// Bundle includes:
// - Home32 (~200B)
// - Close24 (~200B)
// - Settings16 (~200B)
// - ... (30 specific sizes)
// = 30 × 200B = 6KB gzipped

// Home16, Home20, Home24, Close16, Close20, Close32, etc. are NOT included
```

**Savings: ~30KB gzipped per representative bundle**

---

## Testing Infrastructure

The generation scripts are tested comprehensively to ensure bulletproof icon output:

### Test Coverage

- **68 total tests** (all passing)
- **95.85% statement coverage**
- **100% function coverage**

### Test Categories

**Unit Tests (46 tests):** Pure function testing

- `generate-react.test.ts` (13 tests) — `parseSVG`, `generateReactComponent`
- `generate-lit.test.ts` (20 tests) — `extractSVGContent`, `escapeLitTemplate`, `generateLitRenderFunction`
- `generate-static-svg.test.ts` (9 tests) — `optimizeSVG`
- `generate-index.test.ts` (13 tests) — `generateReactIndex`, `generateLitIndex`

**Integration Tests (22 tests):** Full pipeline with temporary directories

- `generate-react.integration.test.ts` (3 tests) — Complete React generation pipeline
- `generate-lit.integration.test.ts` (3 tests) — Complete Lit generation pipeline
- `generate-static-svg.integration.test.ts` (3 tests) — SVG optimization pipeline
- `generate-index.integration.test.ts` (4 tests) — Index file generation

### Running Tests

```bash
pnpm test                  # Run all tests
pnpm test:watch            # Watch mode
pnpm test:coverage         # Coverage report
```

### Test Framework

- **Vitest 1.6.1** — TypeScript-native testing
- **@vitest/coverage-v8** — Code coverage reporting
- **Dynamic imports** — Tests run generation scripts as modules
- **Temporary directories** — Integration tests use isolated temp directories

---

## Key architectural decisions

### 1. One component per icon×size (not per icon)

**Why?**

- Granular per-size tree shaking
- Only the used size in the bundle
- Explicit API: `Home32` clearly communicates which size

**Trade-off:**

- Less ergonomic naming (`Home32` vs `Home`)
- Icon size choice responsibility falls on the developer

### 2. Inline SVG (wrapper) not `<img>`

**Why?**

- Dynamic color via CSS variables, state, theme
- Aria attributes guaranteed
- Tree shaking (bundler knows which size is imported)
- Easy testing (mock the component)

**Trade-off:**

- Added complexity (SVGR, generation)
- SVG is not isolated from CSS (desirable for dynamic color requirements)

### 3. JSX in React, `unsafeHTML` in Lit

**React (native JSX):**

- ✅ Paths selectable via CSS (`.icon:hover path { fill: red }`)
- ✅ No ESLint warning on `dangerouslySetInnerHTML`

**Lit (`unsafeHTML`):**

- ⚠️ Paths not selectable via CSS (intrinsic Lit limitation)
- ⚠️ But supports dynamic color via `fill="${color}"`

**Acceptable trade-off:** Lit has limitations by nature (no JSX), but provides dynamic functionality.

### 4. Single source of truth: `.svg` files in `raw/`

The **source of truth for SVGs** is the `raw/` directory in the repo.

**Flow:**

- Figma → manually export SVG → `raw/{IconName}/{IconName}_{size}.svg`
- `raw/` → `generate-react.ts` → React components (`@myorg/icons-react`)
- `raw/` → `generate-lit.ts` → Lit render functions (`@myorg/icons-lit`)
- `raw/` → `generate-static-svg.ts` → static SVGs (`@myorg/icons-core`)
- npm publish → SVGs available for CMS, email, custom CDNs

**Why here?**

- No duplication between TypeScript definitions and SVG
- Single version: one SVG = one implementation
- Deterministic generation: same SVGs → same React/Lit/static output

**Trade-off:**

- `raw/` directory is part of the repo (~3MB for 600 icons)
- Build script dependency on SVGR and custom scripts

---

## Implementation

### Directory structure

```
ds-icons/
├── raw/                              ← source of truth
│   ├── generic/
│   │   ├── Home/
│   │   │   ├── Home_16.svg
│   │   │   ├── Home_24.svg
│   │   │   ├── Home_32.svg
│   │   │   └── ...
│   │   └── ...
│   ├── brands/
│   ├── social/
│   ├── payment-flags/
│   ├── faces/
│   └── glasses/
├── packages/
│   ├── core/
│   │   ├── dist/svg/                ← static SVGs (generated)
│   │   └── package.json
│   ├── react/
│   │   ├── src/
│   │   │   ├── [category]/          ← components (generated)
│   │   │   ├── index.ts             ← barrel exports (generated)
│   │   │   └── types.ts
│   │   ├── dist/                    ← bundle (generated)
│   │   └── package.json
│   ├── lit/
│   │   ├── src/
│   │   │   ├── [category]/          ← render functions (generated)
│   │   │   ├── index.ts             ← barrel exports (generated)
│   │   │   └── types.ts
│   │   ├── dist/                    ← bundle (generated)
│   │   └── package.json
│   └── showcase/                    ← demo application (Vite)
├── scripts/
│   ├── generate-react.ts            ← custom SVG parser
│   ├── generate-lit.ts              ← custom SVG parser
│   ├── generate-static-svg.ts       ← copy + SVGO
│   ├── generate-index.ts            ← barrel exports
│   ├── generate-core-exports.ts     ← core package exports
│   └── __tests__/                   ← 68 tests (95.85% coverage)
├── ARCHITECTURE_EN.md               ← this file
├── README.md
└── package.json (pnpm workspace)
```

### Build commands

```json
{
  "scripts": {
    "generate": "tsx scripts/generate-react.ts && tsx scripts/generate-lit.ts && tsx scripts/generate-static-svg.ts && tsx scripts/generate-index.ts && tsx scripts/generate-core-exports.ts",
    "generate:react": "tsx scripts/generate-react.ts",
    "generate:lit": "tsx scripts/generate-lit.ts",
    "generate:svg": "tsx scripts/generate-static-svg.ts",
    "generate:index": "tsx scripts/generate-index.ts",
    "generate:core-exports": "tsx scripts/generate-core-exports.ts",
    "build": "pnpm generate && pnpm -r --filter=!showcase run build",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "dev": "pnpm -r run dev",
    "showcase": "pnpm --filter @gabrieleghio/icons-showcase run dev"
  }
}
```
