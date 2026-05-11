import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBN16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1450)"/>
<defs>
<pattern id="pattern0_2072_1450" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1450" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1450" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>`)}
  </svg>`;
