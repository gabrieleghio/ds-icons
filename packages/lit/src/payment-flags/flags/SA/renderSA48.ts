import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSA48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>`)}
  </svg>`;
