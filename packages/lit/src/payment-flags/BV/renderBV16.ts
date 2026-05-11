import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderBV16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1480)"/>
<defs>
<pattern id="pattern0_2072_1480" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1480" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1480" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7Zo7SwNBEIBnNodgHmAbQbwQ8dGJnYgY/SNqbaGtnVa2WtjrL4kiYhk7JRBzWiSt5EWQZMfdJLfZKIjxkdPb/eBys3MH4ctultu5ReiRc92JOOO7hJgRzQwMSfzqRsWTK/sqLl0fqbi2ugyBQXDLkI5nCk/nforJjzvXdWOMckL8AL4g/i9AWOSAZ/n0dFH6ylRHPsIoKy66YAZuJEJZOdKdfHpqSyb8K3GGEEUG4jQUiWSy33BiKkxq+aoTgSDgBNAkggrnfsqNMr7nALJd8X/okBDGMcYgbMiOjCKCGPZQ411ZRFxjQnzRv2k8hOI60UG/zEAr3Orv/cLu+yFW3lSsvKlYeVOx8qZi5U3F0SswA8vSXyBxX4CgqZXLKrbD3lQQUpukWloFJrS06iq0w95UsFQqqWGf/KHZHmd3VEz5U/hLlO1s38UBUyAaPAsc/RXSd+rqn3mAqc6nIWhqrbaK7WxvKlbeVKy8qVh5U7HypmLlfTiEm7d+Uv7CbzR4uPWbvL+iE4u7HCPCSz8hN+vUxcG1ZV8YkD7SraJ3LuKJM8bh+IXBJvb24VXFDVUYHr0erhcJ9cqJvpwMEtG1xbmCd85SnvfMOa6LH8cDA5DivI0bMu5MeAue5809PKbagNtyjyqMHhrBkSXEw0Ybl6Sv/NJXb/e9YmbU530AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
