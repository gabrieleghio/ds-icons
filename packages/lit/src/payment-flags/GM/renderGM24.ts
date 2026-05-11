import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderGM24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1722)"/>
<defs>
<pattern id="pattern0_2072_1722" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1722" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1722" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGgSURBVHgB7ZpNSsNQEIBn0qIxFgmuLF0YPEH0ArbiQboWob2CN6gLD+A1RKh6gfYGjQtblyIV0p+8cV40aSJUVwq+eV8IzEyy+d5P8vIIwid93/eXsdcBwCanTTANhCES9E7jp+tViem7e0EClT4BBGA4LBxVIGm14ucolb91GyMJ4hlpA7hvh9Ubt9Euim8jggsOH+ag+JwBwZRUmmvfeex1HZ4HneymGot7holrtM8WaDcs1PCYTwizwqZx2mU8LPk1S5nZ6lDo9w9M9/0WKy8VKy8VKy8V0fI4Ho8pS+r1OpjOZDLJYzvspYLu7kU+7NHZAdMh9ZrHdthLxcpLxcpLRbR8FYSA2QZeYSPPru2lYuywJ6If63h0vp9nG7UKmM58muSxfdVJxcpLxcpLxcpLpSS/ZlFkDl/8HM7vskQtFJhMslzZczRwEPA+vzgnSBa0dl38X9E+qdtMFWp4iWE38HFBA/7eDUAI3BajwdXjgTPsRS+UYIsLEQhAi7PviY5LPyiFZ0EbHepwMYS/5dfnmX628RR/UFXo6Q7XtXcVQYVW20lcDgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
