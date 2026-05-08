# @gabrieleghio/icons-core

Static SVG assets for DS Icons. Provides optimized SVG files for use in any project or framework.

## Installation

```bash
npm install @gabrieleghio/icons-core
# or
pnpm add @gabrieleghio/icons-core
```

## Quick Start

### Direct SVG Imports

```javascript
// ES6
import HomeSvg from '@gabrieleghio/icons-core/Home_32.svg';

// Use in HTML
const img = new Image();
img.src = HomeSvg;
document.body.appendChild(img);
```

### In HTML

```html
<img src="node_modules/@gabrieleghio/icons-core/dist/svg/Home_32.svg" alt="home" />
```

### In CSS

```css
.home-icon {
  background-image: url('~@gabrieleghio/icons-core/Home_32.svg');
  width: 32px;
  height: 32px;
}
```

## Available Icons

The core package provides optimized SVG assets in multiple sizes.

### Categories

| Category | Icons | Examples |
|----------|-------|----------|
| **generic** | Common icons | Home, Backpack, ImagePlaceholder |
| **brands** | Brand logos | OakleyCart |
| **social** | Social media | Instagram |
| **payment-flags** | Payment methods & flags | ApplePay |
| **faces** | Avatar/face icons | FaceNoGenderHeart |
| **glasses** | Eyewear icons | SunLight |

### Size Options

Each icon is available in optimized versions:
- **16px**: `Icon_16.svg`
- **20px**: `Icon_20.svg`
- **24px**: `Icon_24.svg`
- **32px**: `Icon_32.svg`
- **40px**: `Icon_40.svg`
- **48px**: `Icon_48.svg`

**Note:** Not all icons are available in all sizes.

## Framework Integration

### React

```tsx
import HomeSvg from '@gabrieleghio/icons-core/Home_32.svg';

export function App() {
  return <img src={HomeSvg} alt="Home" />;
}
```

For React components, use [`@gabrieleghio/icons-react`](../react) instead.

### Vue

```vue
<template>
  <img :src="require('@gabrieleghio/icons-core/Home_32.svg')" alt="home" />
</template>

<script>
import HomeSvg from '@gabrieleghio/icons-core/Home_32.svg';

export default {
  data() {
    return { HomeSvg };
  }
};
</script>
```

### Angular

```typescript
import { Component } from '@angular/core';
import HomeSvg from '@gabrieleghio/icons-core/Home_32.svg';

@Component({
  selector: 'app-icon',
  template: `<img [src]="homeSvg" alt="home" />`,
})
export class IconComponent {
  homeSvg = HomeSvg;
}
```

### Svelte

```svelte
<script>
  import HomeSvg from '@gabrieleghio/icons-core/Home_32.svg';
</script>

<img src={HomeSvg} alt="Home" />
```

### Vanilla JavaScript

```javascript
const iconUrl = new URL(
  '@gabrieleghio/icons-core/Home_32.svg',
  import.meta.url
).href;

const img = document.createElement('img');
img.src = iconUrl;
img.alt = 'Home';
document.body.appendChild(img);
```

## File Structure

Icons are organized by category:

```
dist/svg/
├── Home_32.svg
├── Home_24.svg
├── Backpack_32.svg
├── Backpack_24.svg
├── Instagram_32.svg
├── OakleyCart_32.svg
├── ApplePay_16.svg
├── ApplePay_24.svg
├── ApplePay_48.svg
├── FaceNoGenderHeart_32.svg
└── SunLight_32.svg
```

## Usage Examples

### As Image Tag

```html
<img 
  src="node_modules/@gabrieleghio/icons-core/Home_32.svg" 
  alt="Home Icon"
  class="icon"
/>
```

### As Background Image

```css
.icon-home {
  background-image: url('~@gabrieleghio/icons-core/Home_32.svg');
  background-size: 32px 32px;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
}
```

### Dynamic Icon Loading

```javascript
async function loadIcon(name, size) {
  const response = await fetch(
    `/node_modules/@gabrieleghio/icons-core/${name}_${size}.svg`
  );
  return await response.text();
}

const iconSvg = await loadIcon('Home', 32);
document.querySelector('.icon-container').innerHTML = iconSvg;
```

### Icon Sprite

Create a sprite sheet from SVG assets:

```javascript
import Home32 from '@gabrieleghio/icons-core/Home_32.svg';
import Backpack32 from '@gabrieleghio/icons-core/Backpack_32.svg';
import Instagram32 from '@gabrieleghio/icons-core/Instagram_32.svg';

const icons = {
  home: Home32,
  backpack: Backpack32,
  instagram: Instagram32,
};

export function getIconUrl(name) {
  return icons[name] || null;
}
```

## Customization

### Inline SVG with Custom Styling

```html
<svg viewBox="0 0 32 32" width="32" height="32" class="custom-icon">
  <use href="path/to/Home_32.svg#icon" />
</svg>
```

### Filter Effects

```html
<defs>
  <filter id="colorize">
    <feColorMatrix type="saturate" values="0.5" />
  </filter>
</defs>

<img 
  src="node_modules/@gabrieleghio/icons-core/Home_32.svg"
  alt="home"
  style="filter: url(#colorize);"
/>
```

## Bundle Size

- **Single icon**: ~0.3-0.8KB (optimized)
- **All 11 icons (all sizes)**: ~35KB total

SVGs are already optimized with SVGO.

## Performance

- **Optimized**: All SVGs are processed with SVGO for minimal size
- **Responsive**: Scale to any size without quality loss
- **Cached**: Can be cached by browsers indefinitely
- **No runtime**: Pure static assets, no JavaScript needed

## SVG Specifications

All SVGs conform to these specifications:

- **Viewbox**: Properly defined for each size
- **Namespace**: Includes `xmlns="http://www.w3.org/2000/svg"`
- **Dimensions**: Width and height attributes set
- **Fill**: Default to `currentColor` for color inheritance

## Accessibility

When using SVG icons:

```html
<!-- Decorative icon -->
<button>
  <img 
    src="icon.svg" 
    alt="" 
    aria-hidden="true"
  />
  Click me
</button>

<!-- Meaningful icon -->
<button title="Go home" aria-label="home">
  <img src="icon.svg" alt="home" />
</button>
```

## Vendor Prefixes

SVGs are not prefixed and work in all modern browsers without prefixes.

## License

MIT © gabrieleghio

## Related Packages

- [`@gabrieleghio/icons-react`](../react) - React components
- [`@gabrieleghio/icons-lit`](../lit) - Web Components
