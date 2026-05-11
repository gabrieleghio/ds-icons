import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderBO24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1452)"/>
<defs>
<pattern id="pattern0_2072_1452" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1452" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1452" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgB7Zq7TsMwFIb/Y4IE5dYJxBbBwmUpMwMtAztvwAgDF4kXKUysPAE7S1tWhnYCFtRMIJCQiihSSamN3TZOWgFbM9j+pES/j7J8zrEVJSH0KfnZrOfxYw6RBygP86hBiOLW48dlVCB1kuI+G+MlOfJhOgIB74SFQtAKuvKV5dm6FeIR3QlgG15peWYvKT7FCJNyShjBGLgAWvJoqqBQvh4/8RjRcXTRtDTOMBiHupEZUjcc+OT9GsSWUs1FF00YKJ4kM9DOlB/QNdwdwyvZdN9/cfK24uRtxcnbitXy9HQLEQ0WF2A8zy9xdm1vKx5S5GFnTud9yup8IRo6r1y/Iy1c29vKyNs+2eqrp1c6b5YP4no+rt/v7Oo86iXg2t5WUt3tXye3dZ73c7/W3zCHtHBtbyvu2d5WUt3w0kSIP+qJTDhaj8fT4zCeZltHt9vbipO3FSdvK07eVgblBcxmyI/JQlmP2h0YzTePM6HKQFTRhZD3JsC0DlA+ofT66iRrZ4STXBY8rMqp8GENoo7zuyWGYq0BxguyEMAKpHjIu+/NBn9QOlzbQ++/vBzSZfQLTe1tRDdgzSKKQfcT0Q/ZjHvlM8WYAQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
