import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderLU48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7Zq9TgJBFIXPHVajoIYWq9VGLUigsRV8Et4AfBLwEWx9CdHGco0NdGxhIHYkqKsiXGeQXXZjYmy0mDtfMpt7brb55ieZYghLAt8v5tVOk5lrOtZgHXRHjM5BeH+RdMyn5x/6RGtXuvRhPyHztH4U9sOFfH+vPIAM8Zgw4lzV6/nlBlLiWyqHPBEUEWxhzoxIj8l8Frf8DXy0PCJqArzobGvxglKwDbOQBT2M5dNyArT3iTblSvzTpoXiafJZv1om2a3+3c923x9x8lJx8lJx8lIRLU/D4ZDjUCqVYDuj0Sip3baXipOXipOXipOXipOXipOXimh5D5bCv+h7u5cPq1ScwnrGj0npzrxUnLxUnLxUnLxUsvI8h9Vw9t5n5LtJenuB1bxH6RQoPRvXSXx9/poA23aA8TFu0WTVI3VOaAdF0DSArHd4A7SO9xXOqmPwrK4bIWQw0L6npsi+NGzfNkC5pq4q+F8Yf09XH/EbYL2zWHDNJ1RYZ5aP2yhoAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
