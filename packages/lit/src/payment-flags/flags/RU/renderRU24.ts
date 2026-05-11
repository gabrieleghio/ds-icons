import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderRU24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2214)"/>
<defs>
<pattern id="pattern0_2072_2214" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2214" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2214" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgB7ZpBTsJAFIbfG5EQoA1uTNg16l49AeBJuAEeBXduPQnoBfACpl21iRtJIzVV6PjGOKVt4lIW8963gHn/kNBvXtu0TRF+CcNw0Ol0ZlrrMZVjcAzyelZKzYfD4YPN0HwkSRLQ5IKGAbhPhIgTWoToRz6O4xB4iFuiPM+vW9T1KXU9sKnnedDr9YBWB1yB/CDLMkjT1EZBu92+VTQxs4nv+9Dv950SNxgf01DjVslGir6vbNDtdsFlzAJUGKtq5VrHm9DZvl4DY0SeKyLPFZHnCmt5hMt7XVbHJ+A8X2/lUHZ7rog8V0SeKyLPFZHnishzhbV8CxwFQf8xs8/x8cIvq9OW28/tDa/bvbwc81wRea6IPFdEnis1+QLcpnnNR/J6aYuPQoPLNPxWqqArXFttqPUZ/cC1PcD4bMjrvSqm9R0ugsFAHRUruhMIgAsawtFLeqYm0Xpd7NSEggg4QOLF7vPGDGu3cYtzb4qIM6y8nnawTfr3P9BLDfgEWzU3DTfZNwRcdkpCkVBwAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
