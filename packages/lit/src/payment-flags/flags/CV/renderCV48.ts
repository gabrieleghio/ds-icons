import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCV48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB7Zo7TsNAEIb/WedVAQ2FJSQiGiqEOQEJHbcINUWoU6UJtKGgRpyCBonHBRLoqBKapKABGvKQs6ydeGNLRMQIImd3P8nxzHplaXZ+T/wYQoBTXcMoUwbxAkAFKAdvglMdT5WrYIT8X+csD85vhZWH+rRBgyKa1fY4+N3TFvQIPMBbgL0UdmolhAO3skIP3kZQBs7FNgDcXjCSxyh9kgKjspxk5QCWhXJ4ifQSCrEIbn8yhn0mdo6cxDJQmkhiqcCiRxWS+rdE42PQGBO8rpjgdcUErysmeF0xwetKCv9A7/JY2rmjCyQVI3tdIfEKi0svvYo4xJV3Ii6H4bs0jex1hTqdjpS9bdtQnW63K23zP68FnEf3ArqxN6S3blk/nmP7+kXaz4eb+C1/dZ64vLqutI3slWTWF6fQuKn2uqKM7ENFfO555t5eV8wjrfRiyn4WiX6TY2Q/xsheeukVqN2gIEIdfkhPZJ7fSS/oV1GV0TDsNZhYjPvpwf54Aea9Y1gW+KQRyf2cjhHOye+85JkG9OrDa+GxssXQrL6JJ50ivMY8PWiBBgeeEa1uTq0E7vflOVgsC7jORG0jPIiKV/cTLvgCwDCNaH75sqoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
