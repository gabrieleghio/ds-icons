import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCW24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1578)"/>
<defs>
<pattern id="pattern0_2072_1578" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1578" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1578" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgB7ZoxTsMwFIZ/W6VlQUIsiC1ioQNDOQGBkzCztOoFKAcAhYWdk1C4QEFiAJZmQ2xILG0pftiJbJLCkChS1dj+JLv2c1Tpl//nRNZj0AS9TTR5F4xCgIWwDWIPso/wenGjQyzp270AxG/lKID9xGDiCM9RnIrf64/hhnBNjKk4aKDdPwFlhPOW9MOabAzWQCS7OfA90ZEATdbjEKxrHuLrsjXtEq5QetSGKm0mxg+5POA6JsAbsJqseFDI86uW7fgf8vo4HMZp8YWSnJ4GZsz2B7AFb3tXKSReWV23LGenYZIS6reOMPlpS2bW2EAZankWzD/N0Nu+DNrq2V1X6FidUqC07RdF//unq5wCVWx/fj2stL5K+APPVSqJ1xavk9WzVLJ9LfG2T/HiXcVfZriAuZDOXOOx+HHLnPY72/Yb4e1dmLHPeVfx4l3FmtOeqPxz/tveVbx4V/HiXWVBfMH3RW3J65Pi2dDMxAxWI74yEzbiIHH3uzhLG1nmAKVHTNNmYuKKJZWXLT6CW3V4Y7xc7nLE0UdSkagK89xgLPUeq0G+PEkVJArqymuPDpbLEvKMhlLXPSYiSjZc8gOXTo+g+BwOwAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
