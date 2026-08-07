import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderJM24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1842)"/>
<defs>
<pattern id="pattern0_2072_1842" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1842" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1842" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>`)}
  </svg>`;
