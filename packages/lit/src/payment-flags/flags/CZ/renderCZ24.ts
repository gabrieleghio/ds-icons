import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderCZ24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1590)"/>
<defs>
<pattern id="pattern0_2072_1590" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1590" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1590" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgB5Zq/axNhHIc/7zVJj7aRjI2KPRxENxfFpiKJk4ODRaeC2EGMg9BSB3Gz/0EdFOtiBc0kjg4iJNaCYsXYRUQoiYIaq0MSkpg7kry+79mE+ILk58V73z5Dm/dNMjzvPd8MyRFsk0qlArquz1FKw2wZhmIwr3eapi0Fg8H79T3C/+jHrhnx2xfiE+MBA+qTJoRE2CGkNb4i3kp8+voDY+XJW+wADFZBnJdORkMLs1Qj9+rPXDwTwuKlUwj4R6AKTBalUgn5fL55b3HIOzHFxcf5BvHoSG7+xKPEe5yeOojAmA4VYJnD5/PZjy3LauwNefdN3mm8iMmzXeSKZTx8ugHd58HRQ3uhCl6vF8Visb40mHzoRn1FPMONF5pWBc/WN5ErmPYB8IOQHX61C4VCY621esOtx68wGV3Gp0wWqtFSnvP5exahy8v2QajEP7MXUWUMOspeRKUx6Fieo8oYtJ29iKxj0FP2IjKPQc/yHFnHoOvsRWQZg75mLyLTGPRdniPLGPQtexG3joGj2Yu4eQwcl+e4dQzIyPGrtLEY9sNpZjLriH5Zg79q4n+wRRu6g7nyzcTGj2DhwFm4gYF/Cs1k3iD69QXcwMDk/RWTSa/Z2buFgcjvNnO4+yFm/3cTjsvXM+dX3m04Ju/GzEUckXdr5iJ9l3dz5iJ9k5chc5G+yMuSuUjP8jJlLtK1vIyZi3QlL2vmIh3Ly5y5SNvyKmQu0pa8KpmLtJRXKXORv+X5txzEvkFLycypsPZQkASBfe8daM0CGRpWNvNftFmfJj1M/DnqNx1WLJzbSuLKt5fYpVDmNfwRLzbtEardJIHwfMCsasmximWcz7zG9I8NqA47h9SJorl/+w7MeWPlYyy+x8oZUBwuXq2Sk5FyOU2an1gd1WcJqc2xKA5jsFA4T4J5rVY8+lIkm7V/QfkNOeR8FrU+aEQAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
