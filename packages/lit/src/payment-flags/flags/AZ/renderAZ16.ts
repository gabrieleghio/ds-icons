import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderAZ16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1390)"/>
<defs>
<pattern id="pattern0_2072_1390" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1390" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1390" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7Zq/ixNBFMe/s9m7xBxCTvQUG6MIYhfB3sROEE+764z6B8RKsRDOSjtjpc3ppRObmGB/0VYhKRWExMZfCHecJG6SS8Y3ibvsLjHk4Gb3mNkPbHZmWAifzJt5b8Iy2KyWU0iYBYBnx5dicDRgoIi7yyV7iI0+H5bTYMYGtdJQnxb4MId711pj+UeVJvQQt2nBGp4zadbzcIvHk3QlKCYMKAMfAr0uYLXtkTTiuG0CRsF5KLFA4gegHGIihRfnQLfzbyx2waBVn3Eemo9DaTwTy7Pe2FYp1CfBmKeruO10InldieR1JZLXFa3l2Qec5XbnKOYgm2T+ChauL2MucwZG6iCGW7/Rb3xCe72CTqkK2fxA32kHJm+mj+NQuYh5kv4fO62v+JW7NbrLwi0fSNgL8cMba1PF3c+JexCYCIBJQt3ae2w/eIYehTyn0A8D6fJijfvF27S2N/P3ETbSw15sbm4GtJ63V59iPyB95v3r3KJwH0zZ0I59fuO0v5++DJlIn3lG6czN4Iu8nXy3SJf3b2bmiWB28lmQnueP0E4fz553+qKo+XbyUmg7fKB5vl2qePqiqlt8fAf7AenynfXqqHx1I9LfUv2VJyLCIJDyNkZ5fonCPzZD5SYywU8qcQeSStzAy9tZhUSEyBT3E9qpTuR/kQbFxtdrfKRTXXVPT3WcTR73nOrwfMWRx2ISyrPZcZrRPzm6EsnrSiSvK5G8rnjlOYfS+PyEfM3pWTtQmt7A1WF1Axxvnb7VH/8AqkWA8PlDbp2ee/QJw4urKfBEHXq9h9fEzZenDNx4vUXHmxzEi3l60EQXF0XDe/BbW8mD8QINZxAsQayzGn3LOxhWcTThxF8NJtzx/5ZnZQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
