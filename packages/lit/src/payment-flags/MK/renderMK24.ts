import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMK24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2010)"/>
<defs>
<pattern id="pattern0_2072_2010" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2010" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2010" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>`)}
  </svg>`;
