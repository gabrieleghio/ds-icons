import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderTD24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2340)"/>
<defs>
<pattern id="pattern0_2072_2340" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2340" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2340" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7ZqxUsIwGMf/CZU7NgYWtzrhyPkCoqs6uLqIT4CPoG+AmyPc6Z0bgw+AvoAweix00oXBBQ+lNH5poQpj6XHY7/vlkiZfcs39krRTFOa4tSLg16lWneXEvN3eIW1ejspYCWN6UGgcT/uteUiHpVtzgUmXaldYUXxjUapCRfMxVx60sevaUCSPSYc6XDBA0VY7OdNpwy06cM9qC+J6i5qOXSkkZbuE1CnBQVIMpTE9R5iG7XABdP6S3qjr8Sidp5x8kk1FUSrALoLGJ4IoptS+PfaVeJTOIcsU5l95RFUvdic/6v+BZTsNxog8V0SeKyLPFZHnishzReS5IvJcEXmuiDxXRJ4rIs8VkeeKyHNF5Lki8lwR+V8MssyynZV/iluBjywznt3HCTHoWvnnOBBMogUw2ToBAZnai0ijv/LK3DiA0wAm5/F1tOAbq/I+ROoMkd6ppL0dnAT9lobX/ACmBxTywAAr7gfq0NajH5734MG736Ftv6BWD+vHrCF3jFLXfvC1d4pXz076AyZGeAhlDiE2AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
