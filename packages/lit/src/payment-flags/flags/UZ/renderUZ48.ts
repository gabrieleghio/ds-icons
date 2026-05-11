import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderUZ48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgB7ZrLaxNRFMa/e2do0howKoKziI4RRFz46FIXpkX/AEEEN23dC1EXbkWXbvrwD5CsCtm4V2ij4Eow6kJF0IwWEkHEgKZ5NDPXe0fmdhKDnS76yL3zgyTfnJwJfHPOfWQYgoDZR2lqpvIMyBGwHBSD+3pNCZ1zb1wpBDHiv88u2tQ0lrmyoT6O13UncOua45unD4sV6GE8gF+AxlnTWCjOsLDx5CiQ4C9CerLTIybyJzKYOmb5+vbLjyh8/jbwl++cPCz1g3dfN4xvOYw77LSBZiOI2JSO3TQZQV4mjY79Nd6HMLt0cRyn96dQX+ti8skrvPn5G0ODKGQiyS+CB7SafohReoHyzzMyaSQx8FxRcWFcMP9+ZbiMhwkVVkzqZs+XhA48ZyprSV34VBuYs9lW35Eh0DeUaZRz7FRS6i+NFlQhknknZPjIniRUwYySJFr97qmjvp7ms/39t5V/cnZtq/+HSJVf+CAmuV++9ie/fSmoQCTz9Q5f3p6WcY9XXCx1S5fGMZ09hGGHLO89zoKDgzTSKBhqvntdqSNVXlW0Nk+q1apse8uyoDq12vomLW57XYnN60psXldi87oSm9eV2LyuaG1e3bsXjG0Yj+/k6IoypWZk83kkUzwv2944kIDquD/aUsdLna7E5nUlNi/xGJSmzx4FQSk48NoeVIa13XUNlCnz2DMZWO2CtVz1OoD7YU0XXiO0tWWYJ/bjXNpd65T5fseGPlRWrr7IUudyqW643gSvuwM9qBiuOylEz444s3huhhkkT8KPp20PWz7O+D/ZErf73Fw155zrpbqI/QEtnNBsTJ2HEAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
