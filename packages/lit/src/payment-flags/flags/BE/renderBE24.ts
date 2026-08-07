import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderBE24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1410)"/>
<defs>
<pattern id="pattern0_2072_1410" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1410" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1410" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7Zo9TsNAEIVnNw5C0KRDdIYmpIu4AAmHoIYThCtwAzgCJzHUFLagofOKEyDx4wLwMCM5waJBShYU8uaTnnZnG/uzLVfP0Rc9yUQyajI3Dzd9is3r0Rothisc03k/3F7OTpo1lWTNujDLKT8jML+NB+E++OYgmvg/IHWum+XpsJfIcEyRxbe3EorNS9KleamZqZI81R/To3Sd3k/1Lie04njnaFPCsn9uHoBz7kA/+yGBsOF9exx5AsL/MENh8qiYPComj4rJo2LyqJg8KiaPismjYvKomDwqJo+KyaNi8qiYPComj4rJo1B/m1X+ikCo6rY+5yp/TSuOtrG0iNRqY5Fjf6ElRG1e5hSxjrbkJUSl3CvvdvXNP0rGkkAYlMydQ91Mf3hBsiM5kRT09/Cvhzlj5rOKO/uDUAS96CfVR2y8JFWlggAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
