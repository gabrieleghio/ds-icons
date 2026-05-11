import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderIT24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1836)"/>
<defs>
<pattern id="pattern0_2072_1836" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1836" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1836" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7do9S8NAHMfx312S+jB17RZxcRGKkzhoFEV8FT68gbq7RF9BfQd29i0IqYu4tRQcSzNZ0MXBSps2d176EGwXoYmi+d8HruRCoHzvbjyGCdfJwwxKAHPUzEECz2e3SNvT9iGSYXUmUd5vNiqTN3z4627asIKa+sBFwvC/SxYlkzd3q+stz16zozejeIt7kMwGAZLBDg3L8+xi3sTV1slU+IIxGoxhXoVCAWl7MS3MS0iJnhrvIhzOowUIzMG5Cc5K8VeL5ig8Y7jayCU1hHr+GC8AB9uJjn0x/irHkWXLfKrPma5NcNT/g9m6bG/1N3Q8VTqeKh1PlY6nSsdTpeOp0vFU6XiqdDxVOp4qHU+VjqdKx1Ol46nS8VTp+JiUyLLZuii+Gs96AlnWFV/7ZI2r3b6P572BGmHmToBQe94RYXwbK8IkvzYR5sqwguP4OlpXLUAXibTbbaTtddBHWtTetg6ajQqHW31DX+yqpfBBQBQehsZe9Dy+fvro4+JhBUKeqlkdv0/+/JCeGped0Ng48ut+9KefaWKSszik4WkAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
