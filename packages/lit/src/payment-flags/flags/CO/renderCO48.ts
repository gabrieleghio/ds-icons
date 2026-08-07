import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCO48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgB7ZpPTsJAFId/b6hawD9sXBg2jRcQT6B14d4bcAM8hWs8gtfQkKIXwBvQRKMLN9VUQIGOM9aWQlywImHefEmTeS9v872+aZt0CH/0A9Q2gZaUOIW+TIPwWCK0D3zczFKK1wDeJEGgAg+GI4HQEfBVE8Jf+acO+hzEM3QDJgLHznMHTRTEd6pAxQWEgDEkCTD8Aj7iNNY32png0lFtaKXDD+xuA9UyjEPfSO2lmxAP0hyVcCKUeCMrKm/BaKqVQqAe6nPDbdKo/4eghRiMsfJcsfJcsfJcsfJcsfJcsfJcYS1POLqSebSxB+MZv+dLO/ZcsfJcsfJcsfJcsfJccWAIBLlk5ayO7tx6Hu2rv3em8yan+druea5Yea5Y+YwEZrP4MtTy3SwYSrP1R7KgL2VPycv7LB6o3gxUQbL0B8N6oH0+lVdcmG0iuqYAXm3sfvcI5IEJErJ/Pno5FD7CaIrEV4kQDNDiyvdMr+fOJ9269Sal5/IaWC2r2GddpfsQu3H7IooinfgBdedtmdYvfVoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
