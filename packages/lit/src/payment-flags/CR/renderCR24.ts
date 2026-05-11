import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderCR24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1560)"/>
<defs>
<pattern id="pattern0_2072_1560" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1560" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1560" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGNSURBVHgB7Zo9TsMwFMf/z+kHGywMkRgqdtRwAlpO0huUuVOXlrUcgXsg8XGBFi7QTs3AAhM0VfJw0sZJECwdKtXPP8nJ87Mz/O1nR04eIScYniBp9EHcAagD6+AZmCZ4G9znHsquwW0LzI/aasF+FqCoi9lwsRHfHs8hQ3hOOgCXNVyMeigL95o6HtJCsAZmXSIg/s49LST1mxoU9U0n7whQTVhHOpHphEIPQrza+nCl9C0wnVQDVlOZWOqoaqtFof4nVX0KghEtnpbLJecV3/dhO2EYGtuFvVSceKnI3u0f/DOz2596HmznPY6N7cJeKk68VJx4qTjxUnHipeLES0W0+Bps5b8/TiW/+4ApFSdeKm63P0SYsRPl5wjtcVGtH8N61p/GdGteKr/E77iQDoaqPi2en0wtz1exlWRdrk2VHoznonG1GQC2LAJ4m4gUfxU+wh1lmZfcmEJWHt4cr4NzhdnwQ590ukgT82QwB0XXqVE99wWjHjjLywuwX/awzvTeRnjRL/pJNuGaH3aOZ01XsGm3AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
