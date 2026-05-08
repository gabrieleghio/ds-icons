# @gabrieleghio/icons-lit

Lit Web Components library for DS Icons. Provides declarative, customizable SVG icon components using Lit 3+.

## Installation

```bash
npm install @gabrieleghio/icons-lit lit
# or
pnpm add @gabrieleghio/icons-lit lit
```

### Requirements

- Lit 3.0+

## Quick Start

```typescript
import { LitElement, html } from 'lit';
import { renderHome32, renderBackpack24, renderApplePay16 } from '@gabrieleghio/icons-lit';

class MyComponent extends LitElement {
  render() {
    return html`
      <div>
        ${renderHome32()}
        ${renderBackpack24({ color: 'blue' })}
        ${renderApplePay16({ className: 'w-4 h-4' })}
      </div>
    `;
  }
}
```

## Render Functions

Icons are exported as render functions following the pattern: `render{IconName}{Size}`

Each function returns a `TemplateResult` that can be used directly in Lit templates.

### Available Categories

| Category | Icons | Example |
|----------|-------|---------|
| **generic** | Common icons | renderHome32, renderSettings24, renderSearch16 |
| **brands** | Brand logos | renderOakleyCart32 |
| **social** | Social media | renderInstagram32 |
| **payment-flags** | Payment methods & flags | renderApplePay16, renderApplePay24, renderApplePay48 |
| **faces** | Avatar/face icons | renderFaceNoGenderHeart32 |
| **glasses** | Eyewear icons | renderSunLight32 |

### Available Sizes

Render functions are available in these sizes:
- **16px**: `renderIcon16`
- **20px**: `renderIcon20`
- **24px**: `renderIcon24`
- **32px**: `renderIcon32`
- **40px**: `renderIcon40`
- **48px**: `renderIcon48`

**Note:** Not all icons are available in all sizes. Check your icon's availability.

## Props

All render functions accept the `IconProps` interface:

```typescript
interface IconProps {
  color?: string;        // SVG fill color (default: 'currentColor')
  className?: string;    // CSS class name for styling
  style?: string;        // Inline style string
}
```

### Examples

```typescript
// Default (uses text color)
${renderHome32()}

// Custom color
${renderHome32({ color: 'blue' })}
${renderHome32({ color: '#FF5733' })}

// With CSS class
${renderHome32({ className: 'text-blue-500 hover:text-blue-600' })}

// With inline styles
${renderHome32({ style: 'color: red; opacity: 0.8;' })}

// Combined
${renderHome32({
  color: 'currentColor',
  className: 'icon-lg',
  style: 'transition: color 200ms;'
})}
```

## Usage Patterns

### Basic Component

```typescript
import { LitElement, html, css } from 'lit';
import { renderHome32 } from '@gabrieleghio/icons-lit';

export class MyIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  render() {
    return renderHome32();
  }
}

customElements.define('my-icon', MyIcon);
```

### With Properties

```typescript
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { renderHome32, renderSettings32 } from '@gabrieleghio/icons-lit';
import type { IconProps } from '@gabrieleghio/icons-lit/types';

export class IconButton extends LitElement {
  @property({ type: String })
  icon: 'home' | 'settings' = 'home';

  @property()
  color: string = 'currentColor';

  private iconProps: IconProps = {};

  willUpdate() {
    this.iconProps = { color: this.color };
  }

  render() {
    const renderFn = this.icon === 'home' ? renderHome32 : renderSettings32;
    return html`<button>${renderFn(this.iconProps)}</button>`;
  }
}

customElements.define('icon-button', IconButton);
```

### Icon Gallery

```typescript
import { LitElement, html, css } from 'lit';
import { renderHome32, renderBackpack24, renderSettings32 } from '@gabrieleghio/icons-lit';

const icons = [
  { name: 'Home', render: renderHome32 },
  { name: 'Backpack', render: renderBackpack24 },
  { name: 'Settings', render: renderSettings32 },
];

export class IconGallery extends LitElement {
  static styles = css`
    .gallery {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
    
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    
    .icon-name {
      font-size: 0.875rem;
      color: #666;
      margin-top: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="gallery">
        ${icons.map(({ name, render }) => html`
          <div class="icon-item">
            ${render({ className: 'text-gray-600' })}
            <span class="icon-name">${name}</span>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('icon-gallery', IconGallery);
```

## Styling

### CSS Classes

```typescript
import { LitElement, html, css } from 'lit';
import { renderHome32 } from '@gabrieleghio/icons-lit';

export class StyledIcon extends LitElement {
  static styles = css`
    .icon {
      color: blue;
      transition: color 200ms;
    }
    
    .icon:hover {
      color: darkblue;
    }
  `;

  render() {
    return renderHome32({ className: 'icon' });
  }
}
```

### Inline Styles

```typescript
${renderHome32({ 
  style: 'color: blue; transition: color 200ms;' 
})}
```

### CSS Variables

```css
:root {
  --icon-color: currentColor;
  --icon-size: 32px;
}

.my-icon {
  color: var(--icon-color);
  width: var(--icon-size);
  height: var(--icon-size);
}
```

```typescript
${renderHome32({ className: 'my-icon' })}
```

## TypeScript

Full TypeScript support with generated type definitions.

```typescript
import type { IconProps } from '@gabrieleghio/icons-lit/types';
import { renderHome32 } from '@gabrieleghio/icons-lit';

function renderIcon(props: IconProps) {
  return renderHome32(props);
}
```

## Accessibility

All icons are marked as decorative with:
- `aria-hidden="true"` - Hidden from screen readers
- `focusable="false"` - Not keyboard focusable

For meaningful icon content, provide context:

```typescript
// ✅ With label
html`<button>${renderHome32()} Home</button>`

// ✅ With aria-label
html`<button aria-label="home">${renderHome32()}</button>`

// ❌ Icon alone without context
html`<button>${renderHome32()}</button>`
```

## Performance

- **Zero runtime overhead**: Icons are rendered as static SVG templates
- **No external dependencies**: Only requires Lit
- **Small bundle size**: ~0.5-1KB per icon
- **Efficient rendering**: Uses Lit's template caching

## Browser Support

Works in all modern browsers that support Lit 3+ and Web Components:
- Chrome 77+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Reactive Icons

```typescript
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { renderHome32, renderSettings32 } from '@gabrieleghio/icons-lit';

export class ReactiveIcon extends LitElement {
  @property({ type: Boolean })
  isActive = false;

  @property()
  size = 32;

  render() {
    const renderFn = this.isActive ? renderSettings32 : renderHome32;
    const color = this.isActive ? 'blue' : 'gray';
    
    return html`
      <button @click=${() => (this.isActive = !this.isActive)}>
        ${renderFn({ color })}
      </button>
    `;
  }
}

customElements.define('reactive-icon', ReactiveIcon);
```

## Composition

```typescript
import { LitElement, html } from 'lit';
import { renderHome32, renderSettings32 } from '@gabrieleghio/icons-lit';

export class IconStack extends LitElement {
  render() {
    return html`
      <div style="position: relative; width: 32px; height: 32px;">
        <div style="position: absolute; top: 0; left: 0;">
          ${renderHome32({ color: '#999' })}
        </div>
        <div style="position: absolute; bottom: 0; right: 0;">
          ${renderSettings32({ color: '#f00' })}
        </div>
      </div>
    `;
  }
}

customElements.define('icon-stack', IconStack);
```

## Integration with UI Libraries

Works seamlessly with Lit-based UI frameworks:

```typescript
// With Shoelace (Web Components)
html`<sl-button>${renderHome32()} Home</sl-button>`

// With custom Lit components
html`<my-card>${renderBackpack24()}</my-card>`
```

## License

MIT © gabrieleghio

## Related Packages

- [`@gabrieleghio/icons-react`](../react) - React version
- [`@gabrieleghio/icons-core`](../core) - Static SVG assets
