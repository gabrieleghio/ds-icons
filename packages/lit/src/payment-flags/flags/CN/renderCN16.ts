import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCN16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1552)"/>
<defs>
<pattern id="pattern0_2072_1552" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1552" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1552" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZrPThNBHMe/M62N0qImJhBPrtW7kBgT4kHx4Fl9AMMb4AGfQg/4CMa7D4AHgQtJLwXu0OVGSUgg/A20O/x+TBd2CV1221B2ZveTbLMznTT5zO+3M79uRqBD3cHjlsS0EngPRZd9LEuB2ddr+O13CP5YcuAUBP5Ty4H9uG0PkxMu3HP52nM0MiLu497zMF6sOZgKipclMERTIgSsQSngiK5976LLOZH4VhT8nHd6KiwuYR0cSA4oex50JkAovJPUMeYPemCheJBQYGlhD+lalOnXctXP8lhHk2n5IgbIs7nL+42PuHP6jnzpBYylL/niKDD6g36kDCPpK+0rlLqyAgx/AXb/3Dw+DakepOfIc9TLHZmHn82Mfs/yHHWegPMfoeg/+grjELUq/OoWI10egvuvqPqb0LKll1q2W6RP1oDWJl1NKiX/6fZ13NXKv9W6vI8V+eMVLTz0Vk9AVIrz6s/jeHw38bQQO+23f9K/orl4Y3kcj087iVZ7X6gSkaZxxY0scvb+Rn8fZ8tLC4nlC0+jv+cF0RQSFzmlarjNi1qwxC2MIBZpqPN7lucdgFP8eFXvAE9m9JZoUq2fWL61BTRntPRFH+3pze9afvgTjCFWkWMTiYscW8nf5AwK697kmEye9oPCmjc5NpDLZ5VcPqvk8lkll/dRsJurfpJ65v3GoQerOQr71aUSWPBbfFiHJ0BZlgLsw26B01iQAr8En7w8Fahn7Bxe4806qnLcxU5bYZLS30U2aLQ9fOCb0AGlJQdTBYFp6h3DYLn9B43WNnrEF0seZjng3HUGk0uZlHFQDJcAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
