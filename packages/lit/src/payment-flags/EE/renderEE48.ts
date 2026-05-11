import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderEE48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgB7Zo7bsJAEIb/MZuYPApaqCAnIGUKFJOTcANyg5AbkCPkJBAURenIDewK2ghs8Yq92UUY4QilpNiZr7BmRm4+z6zsXZmwI+gNKplX7mqdBQAFcAwCvsy1P3q6ez2obcXrKfkDE9bhPtFGr9qfvXa0lW89f4TgIZ4TlfTqVrV67x0ciJf8K5TOL0DkwRXMUka6WSJdxnmp/oPzR6WJurSrqPK1Eb+Ea9hGKuulNdJVsqvh3iNQM7/JOyvDZVShsRQUZtulUT8KUSF13PZ/RJ4rIs8VkecKa3n71tdgiow9V0SeKyLPFZHnishzReS5wlpewVHozzH1MdRkMtkn1WoVrjOdTvexrHmuiDxXRJ4rIs+VgrzWbh/hZ1lWyK38ME/iOIbLLBaLw3TsmW6/5ZmVT5LEuQmwPvP5HLPZbF8z3/4vFIZhxff9MXj9hxfWarUbr9FofJun0DaFCDwIje+DDQr7PrPj6ZgR6ZqwidNyinU2NG6j9Xrdtw23hV+NTHFFYB2LqAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
