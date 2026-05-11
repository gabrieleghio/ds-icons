import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderAD48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALFSURBVHgB7ZrBbhJBHMa/3WWB4kG0IBBNRE2aaGKtHtqDSS0efAAvXky0F42n+gBeTHyAeurRGO8+QC9oEw9wkdRDj3CothS0aCosXdhxBmTZNmxbFmbasvtLBv67OxP4Zr79z85mJJi8C8PfWAAhc/RgDgPw48szDJu1u7cxCBKQk0AWU3ruveUcYykJVU7TwySGwEkUb6Eg6ySVQq4gtw6HKPwUkDRUKZ3GVNgHdenpHuHSGP0IwDSFAxIxDJ2ypMIpBgjqtOyQZudUsuHHSx+gLJi1pBDawkcLmQ7kGC0Gjatod4BCpHvM9lPdan6MMiFJNmNCk7q897Jzq58G9quT4WI88W7FE+9WfBBAoxlEsTyN0vYk6nrYtl7AX0E0vIpYJAOfUgdvuItnwtfyj1GtxQ+tW98NY31rFr/+TOD61Q/cO4C77TfpiB9FuJWqFqdOmQFvuI98uTJpxqGHy2Zc/fjAjGduvjHjzLdXre9S5RYuxlbAE+4jz6zsrN1Z8Mab6tyKkKmug/7oWs/z68VZHAcnQvz3LReI75XVGXazAG+8hOdWvGwvCrusbpcIecNdfECtmCs5u6zeSzxrxxvuto+cW4UTouedtesH7uITkSxCwWJfbULBTcTGM+ANd9srioYbdG2+8XO69UKDre9t/4ysIRbNIj4u5mWGkGzPOuDShRU6mtkD68WpcFZPhHCG0KnuoFtAlNWtCJ3qOrcAe1W1/XuiNQuwrB6hyU2U1a0IFc9gHXA5sdwqx433eOtWPPFuxRPfhWCU2a+Oif/UvaphlNGIYca0I77KIOSz5fL/DhgtB7DdWH9JEzswd2NBAXnrQ8O/CHX3SXc7Wo1qr2EQNvpbxB2JEtExRPJsJya1/XwFipGiigtwB3lZIfdZ0E542osC9OdXgOY8dUgO4iG8CyVtEPJaPkPupLRcgf3oP7gf+HNNnV34AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
