import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderNL16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2110)"/>
<defs>
<pattern id="pattern0_2072_2110" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2110" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2110" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZpBTsJAFIbfKwTBhWFjlLCZeAI9ALF4EuLOFd5AvAEeQIknEfUAeANmVUzcEGOMBTrjDDqFxuBOF++9L2nz3t8m7Ze+JrMYhG8GdVWHCnQtQuzaGOjxBAb6py/6NgToT4N9payFO1cqoI9OEdpnz1ov5W/21Bh4iAc0pnBUvt5VHVgTryFCFaOvkSCCdUfqRvvdmhApU4HzyLl2Q7LtmhoxcY/3qS7dVmauPPamhyGoOHHKVIt+caGjrQ4/Jpq676+IPFdEnisizxXW8pgkiQ1No9EA6kwmk7yWseeKyHNF5Lki8lwRea6IPFdYy5eBKNZuylcXsNm6yLvS1g5QJ0tf81r+ea6IPFdEnisiz5Wi/KZlERmKfl5+GBpjZkAZm81XNcIoshbv82CRuhtmhfUvBbyPzVIwi488Q4iuUMW9+iyzI2S0D8992nHyeHkQ6WFvakrYdoEGBnhxM8cTXxc2KDVbvY6bke769rT/e6c/f8IQAR/eytCfug/uo0/MJ3DsofGhDAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
