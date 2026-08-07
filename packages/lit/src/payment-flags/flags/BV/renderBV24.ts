import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderBV24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1476)"/>
<defs>
<pattern id="pattern0_2072_1476" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1476" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1476" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7Zo7SwNBEIBnNodgHmAbQbwQ8dGJnYgY/SNqbaGtnVa2WtjrL4kiYhk7JRBzWiSt5EWQZMfdJLfZKIjxkdPb/eBys3MH4ctultu5ReiRc92JOOO7hJgRzQwMSfzqRsWTK/sqLl0fqbi2ugyBQXDLkI5nCk/nforJjzvXdWOMckL8AL4g/i9AWOSAZ/n0dFH6ylRHPsIoKy66YAZuJEJZOdKdfHpqSyb8K3GGEEUG4jQUiWSy33BiKkxq+aoTgSDgBNAkggrnfsqNMr7nALJd8X/okBDGMcYgbMiOjCKCGPZQ411ZRFxjQnzRv2k8hOI60UG/zEAr3Orv/cLu+yFW3lSsvKlYeVOx8qZi5U3F0SswA8vSXyBxX4CgqZXLKrbD3lQQUpukWloFJrS06iq0w95UsFQqqWGf/KHZHmd3VEz5U/hLlO1s38UBUyAaPAsc/RXSd+rqn3mAqc6nIWhqrbaK7WxvKlbeVKy8qVh5U7HypmLlfTiEm7d+Uv7CbzR4uPWbvL+iE4u7HCPCSz8hN+vUxcG1ZV8YkD7SraJ3LuKJM8bh+IXBJvb24VXFDVUYHr0erhcJ9cqJvpwMEtG1xbmCd85SnvfMOa6LH8cDA5DivI0bMu5MeAue5809PKbagNtyjyqMHhrBkSXEw0Ybl6Sv/NJXb/e9YmbU530AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
