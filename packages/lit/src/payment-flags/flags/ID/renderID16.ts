import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderID16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1798)"/>
<defs>
<pattern id="pattern0_2072_1798" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1798" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1798" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgB7ZpPTsJAFMa/V0xaq4suBTbgCfAEgvEg3ACPgkfwGsYE9AJ4g7IRXBpoQ22k45tqsd24ZDHv/ZpJ5nvp5jd/NpNH+GUWRdFXFk4AGnIcwjUIr2Qwvc3eHv5KzCy46O3RmhmgB8dh4WUL+9Eoe1+W8k9BN5YgXlEuQJBenTwG3XFd/IwIATz+3KHg8QmDxBRltr55Ft55fA8m1U/nLB46Jm6xPqewblSr0TUPDKqC75x2k5AafsNGclsdtX3/wXXff1F5qai8VFReKiovFZWXispLReWlovJSodVqZarQbrfhOuv1+jDXYy8VlZeKyktF5aWi8lJReamovFQa8sYYuExRFI1s5edVSJIELrPb7epx4fFuP1fJyqdp6twJsD7b7RabzeZQI6J7iuM48n1/AUF9eEzc6XQuvX6//8GrMOLCEjKI2ffGThoNSvy+NeYjYvvyBjgux7hnc3Z7yfN8ajfcFr4BFuNo5K5mz0cAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
