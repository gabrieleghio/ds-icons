import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderPT24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2178)"/>
<defs>
<pattern id="pattern0_2072_2178" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2178" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2178" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZrBbtNAEIZ/u4ED4RCJUxBICweOJHDjhMMT9AVQW/EARbwBB+7lBhKoqfoAwBMkPXFsuPYSHxCcEBVIIAStmfHa7jqK2qy9aqa2P2mc3Ul7+Hcm6xl7PaSso4NjbCJCQLMAJfiyC3FEwMQHtrrATurz4us6FI4wopGCAySKNwhJ9IAWIfTjqUPhFwBFWTCaAp0WHlPcTeGXyFpIc6IQXciCxOIX2Y8Tl7oMPPXpm83MRZ5YfAnhEmE5bbKred9Dn679zLOCStPOTwM/N61YxGfxz5jXikZ8XWnE15UWHBDcAdYe6E91jRyvyCaJfSB7D5F4VOFF2ewKrGCh22ta9KmEZIPkc8l8NcaFI9+/QQXyMyqQF1kwRbYPvQATiKGQeI54LLxt+Y/fye5BRAYwhTa8hSM+S4dsG2KwFr/aSza1ogQo+ajEHdZpv9qf7/fuvsnG0acnxhdzGgbaJDHG0rGOfO8myhNABNbieZcvjYIInBQ5jJnqXu/tiR9ysY58+A3lEXKvtxa/d4DyCBFvnfbDj7qOj+H79mEyNnb1uamujLGQWt868uMDbTGLPvDmRXqXjEPoZkcAhSq8DXrnccjPgvmezwvAVVsALTJFJb4tsmnyt5wlA4ihcFdn1dgwqfAl/97Nrq7ww4zJZ+pRXiy4+4+hGxpBHR1Tqp9P4Xqfy16u/rIiKIQWvQMRpWyKGXkn4meJXkMsTtK+CjTi60ojvq404utKIz5D8mMXBxzPzFn8OJv9Q6X5nZ/u84GkvWz6F3oBKpYBLOcncqex+ATOSy8+eXkUv0lTcITwQ4jM9Dpw28eQOu0VKe9Qz4UpRf0RD/SGNyThu7hFow3KkWV03dE52Iguz/8A97tJoP8DcYGf4KppHNYAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
