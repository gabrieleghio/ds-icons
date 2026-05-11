# DS Icons

A comprehensive design system for SVG icons with support for **React**, **Lit Web Components**, and static SVG assets.

## 📦 Packages

This monorepo contains three main icon packages:

| Package                                         | Description                       | Framework         |
| ----------------------------------------------- | --------------------------------- | ----------------- |
| [`@gabrieleghio/icons-react`](./packages/react) | React component library for icons | React 18+         |
| [`@gabrieleghio/icons-lit`](./packages/lit)     | Web Components library for icons  | Lit 3+            |
| [`@gabrieleghio/icons-core`](./packages/core)   | Optimized SVG assets              | None (static SVG) |

Plus a static SVG package for CMS and email use-cases.

## ✨ Features

- ✅ **Framework agnostic** - React, Lit, or raw SVG
- ✅ **Declarative components** - Easy to use and customize
- ✅ **Optimized SVGs** - SVGO compression for minimal payload
- ✅ **Customizable** - Color, className, style props
- ✅ **Tree-shakeable** - Only import what you use
- ✅ **TypeScript-first** - Full type safety
- ✅ **Accessible** - ARIA attributes and semantic HTML
- ✅ **Multi-category** - Generic, brands, social, payment-flags, faces, glasses
- ✅ **Multiple sizes** - 16px, 20px, 24px, 32px, 40px, 48px
- ✅ **Fully tested** - 68 tests with 95.85% coverage

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.0.0
- **pnpm** ≥ 8.0.0 (install with `npm install -g pnpm`)

### Installation

```bash
pnpm install
```

## 🛠️ Development

### Start Dev Environment

```bash
# Run dev servers for all packages
pnpm dev
```

## 📋 Available Scripts

### Generation & Building

| Script                | Description                                     |
| --------------------- | ----------------------------------------------- |
| `pnpm generate`       | Regenerate all components from source SVGs      |
| `pnpm generate:react` | Generate only React components                  |
| `pnpm generate:lit`   | Generate only Lit components                    |
| `pnpm generate:svg`   | Optimize SVGs only                              |
| `pnpm generate:index` | Generate index files only                       |
| `pnpm import:figma`   | Import SVGs from Figma (requires `FIGMA_TOKEN`) |
| `pnpm build`          | Full build: generate + build all packages       |
| `pnpm build:react`    | Build only React package                        |
| `pnpm build:lit`      | Build only Lit package                          |

### Testing & Development

| Script               | Description                        |
| -------------------- | ---------------------------------- |
| `pnpm test`          | Run unit and integration tests     |
| `pnpm test:watch`    | Run tests in watch mode            |
| `pnpm test:coverage` | Run tests with coverage report     |
| `pnpm dev`           | Start dev servers for all packages |

## 📂 Project Structure

```
ds-icons/
├── raw/                          # Source SVGs from Figma
│   ├── generic/                  # Generic icons
│   │   └── Backpack/             # Icon variants grouped by name
│   │       ├── Backpack_16.svg
│   │       └── Backpack_32.svg
│   ├── brands/                   # Brand logos (grouped by brand)
│   │   ├── Oakley/
│   │   ├── Nuance/
│   │   ├── TargetOptical/
│   │   ├── RayBan/
│   │   └── Costa/
│   ├── social/                   # Social media icons
│   ├── payment-flags/            # Payments and country flags
│   │   ├── payment/              # Payment providers (sizes 16, 24, 48)
│   │   └── flags/                # Country flags (sizes 16, 24, 48, 64)
│   ├── faces/                    # Faces & avatars
│   └── glasses/                  # Glasses & eyewear
├── scripts/                      # Generation pipeline
│   ├── import-figma-icons.ts     # Import SVGs from Figma API
│   ├── generate-react.ts         # React component generation
│   ├── generate-lit.ts           # Lit component generation
│   ├── generate-static-svg.ts    # SVG optimization
│   ├── generate-index.ts         # Index file generation
│   ├── generate-core-exports.ts  # Core package.json exports
│   └── __tests__/                # Generation logic tests
├── packages/
│   ├── react/                    # @gabrieleghio/icons-react
│   ├── lit/                      # @gabrieleghio/icons-lit
│   └── core/                     # @gabrieleghio/icons-core
└── pnpm-workspace.yaml           # Monorepo configuration
```

## 🔄 Generation Pipeline

```
SVG Sources (raw/)
  ↓
import-figma-icons.ts  → Fetch & save SVGs from Figma API
  ↓
generate-react.ts      → React components (packages/react/src/)
generate-lit.ts        → Lit render functions (packages/lit/src/)
generate-static-svg    → Optimized SVGs (packages/core/dist/svg/)
generate-index.ts      → Export index files
generate-core-exports  → packages/core/package.json exports map
  ↓
Built packages ready for publishing
```

## 📥 Adding New Icons

### Step 1: Prepare SVG Files

Export icons from Figma using the import script, or manually organize in `raw/[category]/[IconName]/`:

```
raw/generic/Home/
  ├── Home_16.svg
  ├── Home_20.svg
  ├── Home_24.svg
  ├── Home_32.svg
  ├── Home_40.svg
  └── Home_48.svg

# Payment providers — sizes 16, 24, 48
raw/payment-flags/payment/Affirm/
  ├── Affirm_16.svg
  ├── Affirm_24.svg
  └── Affirm_48.svg

# Country flags — sizes 16, 24, 48, 64
raw/payment-flags/flags/IT/
  ├── IT_16.svg
  ├── IT_24.svg
  ├── IT_48.svg
  └── IT_64.svg

# Brand icons — grouped by brand
raw/brands/Oakley/OakleyCart/
  ├── OakleyCart_16.svg
  └── OakleyCart_32.svg
```

**Naming Convention:**

- **Category folder**: lowercase (generic, brands, social, payment-flags, faces, glasses)
- **Icon folder**: PascalCase (Home, ApplePay, SunLight, etc.)
- **SVG file**: `{IconName}_{size}.svg` (e.g., Home_32.svg)

### Step 2: Generate Components

```bash
pnpm generate
```

This automatically:

- Generates React components in `packages/react/src/[category]/`
- Generates Lit render functions in `packages/lit/src/[category]/`
- Optimizes SVGs to `packages/core/dist/svg/`
- Updates index.ts files with new exports

### Step 3: Verify & Test

```bash
# Test the generation
pnpm test:coverage

# Build all packages
pnpm build
```

### SVG Guidelines

- **Quality**: Clean, well-optimized SVGs
- **ViewBox**: Use `0 0 [size] [size]` (e.g., `0 0 32 32`)
- **Stroke Width**: Consistent (typically 1.5-2)
- **Rounding**: Appropriate border-radius (1.5-2 for crisp edges)
- **Testing**: Preview at multiple sizes for clarity

## 🧪 Testing

The project includes comprehensive test coverage:

- **Unit Tests** (46): Pure function tests for all generation logic
- **Integration Tests** (22): Full pipeline testing with temporary directories
- **Coverage**: 95.85% statements, 100% function coverage

```bash
pnpm test              # Run all tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # Coverage report
```

## 📦 Publishing

Packages are configured for GitHub Packages under `@gabrieleghio`:

```bash
pnpm --filter @gabrieleghio/icons-react publish
pnpm --filter @gabrieleghio/icons-lit publish
pnpm --filter @gabrieleghio/icons-core publish
```

**Current Versions:**

- React: 0.0.5
- Lit: 0.0.5
- Core: 0.0.2

## 🔗 Package Documentation

For detailed information about each package, see:

- [React Package](./packages/react/README.md) - React components
- [Lit Package](./packages/lit/README.md) - Web Components
- [Core Package](./packages/core/README.md) - Static SVG assets

## 🤝 Contributing

When contributing:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `pnpm test` and `pnpm build`
3. Commit with clear messages
4. Push and create a Pull Request

### Before Committing

```bash
pnpm test           # Ensure all tests pass
pnpm build          # Ensure packages build
pnpm showcase       # Test in showcase (optional)
```

Never commit:

- `node_modules/` directories
- Build artifacts (`dist/`, `build/`)
- IDE-specific files
- `.env` files

## 📄 License

MIT © gabrieleghio

## 🔗 Links

- [GitHub Repository](https://github.com/gabrieleghio/ds-icons)
- [NPM Organization](https://www.npmjs.com/org/gabrieleghio)
