import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderBG16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1426)"/>
<defs>
<pattern id="pattern0_2072_1426" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1426" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1426" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgB7ZpBTsJQEIbnPQkhFJCVCbvGE+gJoJ6EeIF6DJd4BE8CcgG8QbtqE1faSEkXUv8xvtqycqOLN/Ml0Dd/F/DNPEja1NA3SZJMB4NBXNf1AuWCPANez9ba1Ww2e3SZ4bc8z0OcXGMZkv+kxpgITUi/5LMsS0iGuCOtquq6h6kvMfXQpePxmIIgIHSHfAF+VJYlFUXhorDf799ZnIhdMplMaDQaeSXOsA8PlN1a2dzieOWC4XBIPsMNaLGw7cq3iZ+Cf/tuTYJReamovFRUXiqi5Q3d39ZNdR6Q97ztm6Vue6movFRUXioqLxWVl4rKS0W0fI885Tc34c02pOaS9uKMvOfl42etv3mpqLxUVF4qKi+VjvyR/KY+qS2CjSsOntsfWvZY7njyTy7YIynxOtbkFezDbu/d4T6YdUhTdGBnBD2Hhz4k85QubZTSKxoSIUhJACwO3xted678sAuW2AWxaT2e9n/f6c8/YIPDFuIrHjhnn9g0ZoAVtW8tAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
