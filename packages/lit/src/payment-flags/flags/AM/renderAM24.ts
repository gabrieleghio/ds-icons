import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderAM24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1344)"/>
<defs>
<pattern id="pattern0_2072_1344" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1344" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1344" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFtSURBVHgB7Zq9TsMwFIWPowAtMASJgTEgFjY6MkF4krKxFZ6EIgZYeRIKQl3LjJDSEYmBCoUSqGi4TkndZOjY4d77STe2z/b5R4pkG/xzBwQ1oDUGjgwV+PFEXu0D4LYIjP2QeLiSNwjBn/43EEXU5vJdIIYM8QI7AQ3/EWhiRnyNqk7lgQ90lJFSJS4Kl4Ezn5a+VSTrVKvgh11I65VRfbr40HQnWc4meK14FSv6NjMuuXIWt5jKmLvvXFReKiovFZWXimh5g72r6R8elgKwZzSYdnXbS0XlpaLyUlF5qai8VFReKqLlfTDFuOuICi43LzdutLUB9ry+u76eeamovFRUXioqL5WS/DgDa6p+Vr5TDIYpWJP+uH6WoefR574IknQyAdx2gPVJvoCPocuMh0sTXyD4raMHWe/w4t1T7Hjb5xiMMkQU9CGDmHyPbaf0QOn5Gk3Pvssz2MdiWcRB69ARf0hqaDdOkN9W/gEyjFTVf/GVjgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
