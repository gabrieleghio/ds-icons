# @gabrieleghio/icons-react

React component library for DS Icons. Provides declarative, customizable SVG icon components for React 18+.

## Installation

```bash
npm install @gabrieleghio/icons-react
# or
pnpm add @gabrieleghio/icons-react
```

### Requirements

- React 18.0+

## Quick Start

```tsx
import { Home32, Backpack24, ApplePay16 } from '@gabrieleghio/icons-react';

export function App() {
  return (
    <div>
      <Home32 />
      <Backpack24 color="blue" />
      <ApplePay16 className="w-4 h-4" />
    </div>
  );
}
```

## Components

All icon components follow the naming convention: `{IconName}{Size}`

### Available Categories

| Category | Icons | Example |
|----------|-------|---------|
| **generic** | Common icons | Home32, Settings24, Search16 |
| **brands** | Brand logos | OakleyCart32 |
| **social** | Social media | Instagram32 |
| **payment-flags** | Payment methods & flags | ApplePay16, ApplePay24, ApplePay48 |
| **faces** | Avatar/face icons | FaceNoGenderHeart32 |
| **glasses** | Eyewear icons | SunLight32 |

### Available Sizes

Components are available in these sizes:
- **16px**: `Icon16`
- **20px**: `Icon20`
- **24px**: `Icon24`
- **32px**: `Icon32`
- **40px**: `Icon40`
- **48px**: `Icon48`

**Note:** Not all icons are available in all sizes. Check your icon's availability.

## Props

All icon components accept the `IconProps` interface:

```typescript
interface IconProps {
  color?: string;        // SVG fill color (default: 'currentColor')
  className?: string;    // CSS class name for styling
  style?: CSSProperties; // Inline styles
}
```

### Examples

```tsx
// Default (uses text color)
<Home32 />

// Custom color
<Home32 color="blue" />
<Home32 color="#FF5733" />

// Tailwind CSS
<Home32 className="text-blue-500 hover:text-blue-600" />

// Inline styles
<Home32 style={{ color: 'red', opacity: 0.8 }} />

// Combined
<Home32 
  color="currentColor"
  className="w-8 h-8 text-slate-600"
  style={{ transition: 'color 200ms' }}
/>
```

## Styling

### With CSS

```css
.my-icon {
  color: blue;
  width: 32px;
  height: 32px;
}
```

```tsx
<Home32 className="my-icon" />
```

### With Tailwind CSS

```tsx
<Home32 className="text-blue-500 w-8 h-8" />
<Backpack24 className="text-slate-400 hover:text-slate-600" />
```

### With styled-components

```tsx
import styled from 'styled-components';
import { Home32 } from '@gabrieleghio/icons-react';

const StyledIcon = styled(Home32)`
  color: blue;
  transition: color 200ms;
  
  &:hover {
    color: darkblue;
  }
`;

export function MyComponent() {
  return <StyledIcon />;
}
```

## TypeScript

Full TypeScript support with generated type definitions.

```typescript
import type { IconProps } from '@gabrieleghio/icons-react/types';
import { Home32 } from '@gabrieleghio/icons-react';

function MyIcon(props: IconProps) {
  return <Home32 {...props} />;
}
```

## Accessibility

All icons are marked as decorative with:
- `aria-hidden="true"` - Hidden from screen readers
- `focusable="false"` - Not keyboard focusable

If using icons for meaningful content, wrap with appropriate labels:

```tsx
// ❌ Not accessible
<button>
  <Home32 />
</button>

// ✅ Accessible
<button title="Go home">
  <Home32 aria-label="home" />
</button>

// ✅ Or with text
<button>
  <Home32 style={{ marginRight: '8px' }} />
  Home
</button>
```

## Tree Shaking

This package is fully tree-shakeable. Only imported icons are included in your bundle.

```tsx
// Only Home32 and Backpack24 are bundled
import { Home32, Backpack24 } from '@gabrieleghio/icons-react';
```

## Bundle Size

Individual icons are small:
- Typical icon: ~0.5-1KB (minified)
- All 11 icons: ~8KB (minified)

## Examples

### Icon Gallery

```tsx
const icons = [
  { name: 'Home32', Component: Home32 },
  { name: 'Backpack24', Component: Backpack24 },
  { name: 'Settings32', Component: Settings32 },
];

export function IconGallery() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {icons.map(({ name, Component }) => (
        <div key={name} className="flex flex-col items-center">
          <Component className="text-gray-600" />
          <span className="text-sm text-gray-500 mt-2">{name}</span>
        </div>
      ))}
    </div>
  );
}
```

### Interactive Button

```tsx
import { useState } from 'react';
import { Home32, Settings32 } from '@gabrieleghio/icons-react';

export function NavButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="p-2 hover:bg-gray-100 rounded"
    >
      {isActive ? (
        <Settings32 color="blue" />
      ) : (
        <Home32 color="gray" />
      )}
    </button>
  );
}
```

### Dynamic Icons

```tsx
import * as Icons from '@gabrieleghio/icons-react';

interface DynamicIconProps {
  name: string;
  size: number;
}

export function DynamicIcon({ name, size }: DynamicIconProps) {
  const IconComponent = Icons[name as keyof typeof Icons];
  
  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent className={`w-${size} h-${size}`} />;
}
```

## Performance

- **Zero runtime overhead**: Icons are static SVG components
- **No external dependencies**: Only requires React
- **Small bundle size**: ~0.5-1KB per icon
- **Fast rendering**: Pure functional components, no state

## Browser Support

Works in all modern browsers that support React 18+:
- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+

## License

MIT © gabrieleghio

## Related Packages

- [`@gabrieleghio/icons-lit`](../lit) - Web Components version
- [`@gabrieleghio/icons-core`](../core) - Static SVG assets
