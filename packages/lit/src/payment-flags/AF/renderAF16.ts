import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderAF16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1330)"/>
<defs>
<pattern id="pattern0_2072_1330" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1330" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1330" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgB7ZqxTttAGMf/QZGoVCSMGKjE0KBuHarA0KFLkj4B6guQPEFSqR06QfZKIXMX8gKFN0i6dOjQmG5McaV2YEAEqVFpG8m9/8XnHBZIFHynlPNP+jjf2Zb4+b67fA7kMMUTURdRjuLGvEf6vHiL2+KL2MUrdNRALmoLIrpRe2tmVH5CiAB5VPASwVw0lJr4zJMTnmPh24KXF90qUhZfhgEWcXNCEb9FnEf9yQNocObruOtwcc9HMR0rUb4IV5i/0CvPwSVyF7tuySfI5F0lk3eVTN5VnJbPwzIr1SrGwyFGvo/zIMC9QgGLpZI8d9zpwCbWZp6SG/2+bE8ODqQ4YUvphfV1PB0M5HlbsOALkTIfEn0KPel25fGntbUr7+PDyXsevlQq8cNRlN4hHc6mh1ZmnuJ8AF93duKx5c1NPDs9la2CGcDrHu/vwwbG5bnGVSqPDg/j8Yfb23KWV+vTN2ouB7JQLGJlawumMS+vSfzw/fiYgsQrl+MxPdX50ExjXF5J2rrvXzAuz9RW6Dv5sNeT7UjLhvuasH6fKYzL8zNdoW9u39tteS5oNuMxfbb1+0xhXF5f5/r65+b2cWkp3uQIN8HL7jOFcXm9auPMPmq1Lr2O4vqyON7bg2msFDksXvSUptg3kfZc71znD0RGrDYa8Xnu+sliyESRY7XCu07pSvE7VeFdJZSE6/w616WFtRcblcpHtZr8mFO7OVv2j0RR81m83NgSJ1bSPg3+27SfVTJ5V8nkXSWTd5VM3hkS5Rzle3CFP9pxiD7lTVSjswVn/JeIn9pYDm3+uWpXBL9iKSAlTmCAM6RHiAFeo8OZ5+tVRUQAF6D4GM95qDa8QAS/Oqlh8j+q9n8l89EVP5sYYQNvJhP9F+Lc+uvcr0pfAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
