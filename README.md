# @gabrieleghio/icons

A comprehensive design system icons library with support for multiple frameworks (React, Lit) and core SVG assets.

## Project Structure

This is a monorepo using [pnpm workspaces](https://pnpm.io/workspaces). It contains the following packages:

```
packages/
├── core/       # Core icon assets and utilities
├── react/      # React component wrapper for icons
├── lit/        # Lit component wrapper for icons
└── showcase/   # Showcase application for browsing icons
```

## Prerequisites

- **Node.js** ≥ 18.0.0
- **pnpm** ≥ 8.0.0 (install with `npm install -g pnpm`)

## Getting Started

### Installation

```bash
# Install dependencies across all packages
pnpm install
```

### Development

Start the development environment:

```bash
# Run dev servers in all packages
pnpm dev

# Or run the showcase app specifically
pnpm showcase
```

The showcase will typically run on `http://localhost:5173` (or the next available port).

## Available Scripts

### Root Level

| Script | Description |
|--------|-------------|
| `pnpm install` | Install dependencies across all packages |
| `pnpm dev` | Start development servers for all packages |
| `pnpm build` | Generate metadata and build all packages |
| `pnpm generate` | Generate icon component wrappers |
| `pnpm generate:metadata` | Generate icon metadata file |
| `pnpm showcase` | Run the showcase application |
| `pnpm build:react` | Build only the React package |
| `pnpm build:lit` | Build only the Lit package |

### Package-Specific Scripts

To run a script in a specific package:

```bash
pnpm --filter @gabrieleghio/icons-react run build
pnpm --filter @gabrieleghio/icons-lit run build
pnpm --filter @gabrieleghio/icons-showcase run dev
```

## Build Process

The build process involves:

1. **Metadata Generation** - Scans icon files and generates metadata
2. **Component Generation** - Creates framework-specific component wrappers
3. **Package Build** - Builds each package with Rollup and TypeScript

```bash
pnpm build
```

## Git & Version Control

### .gitignore Configuration

The repository includes a comprehensive `.gitignore` that tracks:

- **Dependencies**: `node_modules/`, pnpm debug logs
- **Build outputs**: `dist/`, `build/`, TypeScript build info
- **IDE files**: VSCode, JetBrains, Sublime settings
- **OS files**: `.DS_Store`, `Thumbs.db`
- **Environment variables**: `.env` files
- **Logs**: `*.log` files

### Important Notes

- **`node_modules/` are completely ignored by git** - Never commit node_modules directories
- **Always run `pnpm install`** after pulling to ensure dependencies are up-to-date
- The `.gitignore` uses UTF-8 encoding - do not edit it with tools that change the encoding

## Project Layout

```
.
├── packages/                    # Monorepo packages
├── scripts/                     # Build and generation scripts
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.base.json          # Base TypeScript configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── pnpm-lock.yaml              # Locked dependency versions
└── .gitignore                  # Git ignore rules
```

## Adding New Icons

Icons are defined in the core package and can be of three types: **standard**, **multisize**, or **raster**. Choose the type based on your icon's needs.

### Icon Types

#### Standard Icons
A single SVG design that scales uniformly across all sizes (16, 20, 24, 32, 40, 48px).

**Use when:**
- The icon design works well at all sizes
- You want minimal file size
- Simple geometric icons

**Example:**
```typescript
export const checkIcon: StandardIconDefinition = {
  type: "standard",
  viewBox: "0 0 24 24",
  path: `<path d="M13.9482 28... /><path>...</path>`
};
```

#### Multisize Icons
Different SVG designs optimized for specific sizes. Each size has its own `viewBox` and `path`.

**Use when:**
- The icon needs different proportions at different sizes
- Small sizes need simpler designs to remain readable
- Pixel-perfect alignment is required at specific sizes

**Example:**
```typescript
export const detailIcon: MultisizeIconDefinition = {
  type: "multisize",
  variants: {
    16: {
      viewBox: "0 0 16 16",
      path: `<path d="M13.9482 28... /><path>...</path>`
    },
    24: {
      viewBox: "0 0 24 24",
      path: `<path d="M13.9482 28... /><path>...</path>`
    }
  }
};
```

#### Raster Icons
Bitmap-based icons (PNG, optimized SVG as base64) for each size. Useful for complex illustrations.

**Use when:**
- Icons contain complex gradients or textures
- Vector rendering doesn't work well
- You have pre-existing raster assets

**Example:**
```typescript
export const illustrationIcon: RasterIconDefinition = {
  type: "raster",
  variants: {
    24: {
      viewBox: "0 0 24 24",
      width: 24,
      height: 24,
      content: `<rect width="23 ... </defs>` // base64 encoded
    },
    32: {
      viewBox: "0 0 32 32",
      width: 32,
      height: 32,
      content: `<rect width="23 ... </defs>`
    }
  }
};
```

### Available Icon Sizes

Icons can be defined for any of these sizes:
- **16px** - Small UI icons (list items, badges)
- **20px** - Default UI icons (buttons, inputs)
- **24px** - Medium icons (headers, cards)
- **32px** - Large icons (hero sections)
- **40px** - Extra large icons
- **48px** - Extra extra large icons

Not all sizes need to be defined for multisize or raster icons—use only what you need.

### Adding an Icon Step-by-Step

1. **Create the icon definition** in `packages/core/src/icons/` (or appropriate subdirectory):

   ```typescript
   // packages/core/src/icons/my-icon.ts
   import { StandardIconDefinition } from "../types";

   export const myIcon: StandardIconDefinition = {
     type: "standard",
     viewBox: "0 0 24 24",
     path: `<path d="M13.9482 28... /><path>...</path>`
   };
   ```

2. **Export from the main index and build the wrappers**:

   ```bash
   pnpm build
   ```

3. **Generate metadata** to create component wrappers:

   ```bash
   pnpm generate:metadata
   pnpm generate
   ```

4. **Test in the showcase**:

   ```bash
   pnpm showcase
   ```

5. **Verify in React/Lit packages**:
   - Import the icon in your component
   - The generated wrapper components will be available automatically

### Icon Design Guidelines

- **SVG Quality**: Use clean, well-optimized SVGs
- **Consistent ViewBox**: Use `0 0 24 24` for standard icons (or appropriate size for multisize)
- **Stroke Width**: Keep consistent (usually 1.5-2)
- **Rounding**: Use appropriate border-radius (typically 1.5-2 for crisp edges)
- **Naming**: Use descriptive, kebab-case names (e.g., `arrow-up`, `check-circle`)
- **Testing**: Always preview at multiple sizes to ensure clarity

### Common Icon Patterns

**Arrow icons**: Consider 8-directional variants (up, down, left, right, up-left, etc.)

**State icons**: Create pairs (e.g., `eye`, `eye-off` or `star`, `star-filled`)

**Action icons**: Use consistent styling with other action icons (delete, edit, share, etc.)

## Development Guidelines

### Before Committing

1. Ensure all packages build successfully:
   ```bash
   pnpm build
   ```

2. Test your changes locally:
   ```bash
   pnpm dev
   ```

3. Never commit:
   - `node_modules/` directories
   - Build artifacts (`dist/`, `build/`)
   - IDE-specific files (use `.gitignore`)
   - Untracked dependencies

### Adding a New Package

1. Create a new directory under `packages/`
2. Add a `package.json` with proper naming convention
3. Update the package exports if needed
4. Run `pnpm install` to register it in the workspace

## Contributing

When contributing to this project:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally
3. Build to ensure no errors: `pnpm build`
4. Commit with clear, descriptive messages
5. Push and create a Pull Request

## Troubleshooting

### Missing Dependencies

If you see errors about missing modules after pulling:

```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Failures

Ensure TypeScript and build tools are properly installed:

```bash
pnpm install
pnpm build
```

### Showcase Not Running

Try clearing cache and reinstalling:

```bash
pnpm clean
pnpm install
pnpm showcase
```

## License

[Add your license information here]

## Contact

[Add contact information here]
