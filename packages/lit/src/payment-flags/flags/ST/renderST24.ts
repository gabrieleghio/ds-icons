import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderST24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2310)"/>
<defs>
<pattern id="pattern0_2072_2310" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2310" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2310" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO1SURBVHgB5ZpJTBNRGMf/byxYUbRRRCsRKxG3eMADiV4UOMIBT5ysAb0YPUDigRg0HggHDioQNV4UEQLRi3rxZlhuGhMwKoGQSMFAwxKs7F2Y5/taymYpncWlj1/SzLyl37z/97753pvJMCxiq3fY1MSkUs5ZDgNyIBsMXZyjZuri14blKpDw4w7VsqVVlByQHQ6XL7CQO1/S4wqKb9+Z3V/j9DnenQ1gUyAcoAQSTltak7OLRdFR1piImSSO92dEOFiFTxiDNIh4517xm10IlUWEqxZfmaIwlIb7VDQl4eiIRS7hhNDDrArYti1LVZyx84o4ZoUrUmYVPKq0ItOlQEbIAUvnIqmvUil8gx2zDNX3rLCPSeiANQEdUaF9jOFhpaQOWMG66jaDA6IqIwdU392K5BnJEuAiG05r5oASjAAZHRBTTJMDbj1OhGxYYu147qMF3Y0TsFf0IZ5xb1s+15TNfr5NxUjtYciC5lT+4+UBjD85CBnQtY6NP02XwgG6F3FywMQLO4zQ1QNT0GvH0A5mtC4jmAf04BoCSioAzyQMYcSO4e2buyoT0x17oJWGN2LGeoHaJhjCiB1T9q7DVUcw37c95v40W89eh85rGvXPvlE7TLzF4eFCKtO/kVF2BJD+4AusmTMR22lm2j6E7k/PVOi3kqxj4o1KmnjOzAZKnetfx6gd99iKMcMk1GkLhm6egN+9NWJ7YW5owK7h3wdMUOhSe2EeomKWHcLURzYSTjkgEjQbrfXieCDyf6k+2J6GqJhlhzBVfMJ+b9TtLw3ozrXIbffLYxuwmXZMEx+65z8jwe6N2m9gOHL9p15owgw7pogPJ7uNhBOdixsSSkiv6pbD1zUMTZhhJ+anumjsK+1fN8uvxZYcuidp0MSFvNByReu1FsywY3ipSxXCdxdpnLZ/iGlLXcrl73ElfC26xZPwlCuDiGd0iZdBOKFZ/O4itxTCCU3Zflf+qEhw3/A/wnX0i1l83yEVl5ziyW0wC/GMOuFfOo8p7En49dvzkI0Nxbv3cpTf8GJqe6yBFT9EFU/Cacbde1XIyLriZRdORBRPIS67cGJVtlfFQjAjErq0wtekLQWct4ULc1xF1VVfMLvLCPeu0tWpqAzt4VKVcw5tp7zgkmknPXxuYflrLASDoJa12rJsiprQ2VLgdzQX+LEp4Lx/0tmdoeR6ujwt+f7c5nyfC5sBIdwXUIPvdld9bpH8/GQxUxh9l/e397B/fAclLtDGOOtQAtM1nhKXh+p+AaVad9McYIC2AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
