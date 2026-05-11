import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderDE16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1600)"/>
<defs>
<pattern id="pattern0_2072_1600" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1600" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1600" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB7Zo7bsJAFEXvOChp3SRKohSQFWQLpEmdFYQdZAnZQrKC7IMGkpLGSxg6JGgQGPMpPLwRH2OERAVCc9+RrvXeyMUca8bSSAMUxJIvSUviAkwi+cABqhJ7YZM9Vezad4u98Amf4gPEV/JorMOE3+JzL/8ruQchBqtlQEkEYlSeFZVnReVZUXlWKp2d5g7h09+pddmzovKsqDwrKs+KyrOi8qxwn+oQKub4K5WnZtE83CJ4rgdFrXueFZVnReVZUXlWSvIuR9Dke3dQvHx706RTBM10VmqTyDn8bbo0AyZZeCvA+4wnwCgtxozDj7EtxDcLJHIQqIIFB/v4hueoVsfQ5KjLQBcMiLj4vvqydPDrNdGQf8KnlC84L+e4DteWLf6/yPBde8fQDywB2WvpGM+v5PUAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
