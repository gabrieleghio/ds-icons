import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderMA24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1980)"/>
<defs>
<pattern id="pattern0_2072_1980" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1980" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1980" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgB7ZrLbtNAFIb/cVzq0iCyqERYYbVlTXkARMqSXZBgDS8AvEW3BfZIPADKMksKPEDKoqtSZZBAZNEFUhNIVdfDOb6UOEJJpXbG0ow/aTIZ25L1nbnZ1hHI6IRhA/BeAKJFzRasQ+0qiO1H8uBdfkTwD4mHJP6BmiHsRwKnm20pZSa/2ndEPEdSAO7678O1p9QI86NXPQ+BEPCEgC3ESuGYyiiO80NhDO+l70HQPFfJkWUSX6JiG9yRS1TY8ncWAPK+T6ZqI79o0ULxSaY6tlVo2a2ere4T2O47k0reVSp5V6nkXaWSd5VS5Z/fWUSZlCbfbfroNWro3vBRFqXJv721kNbhAsqiFHnu9UGQvmZwXVbva7/rkS+we91LJH8Gad1rFGPOvd9t1rA+VLg5jqmmMlK4FinoRLv8iO7wev3KWU//Dz43CGoUlLTdHCu8+TImeWhF+7DPRbjWcf1FMDLnzytkUpwxtuCx0Nbe8cxrtvbMiTNGV/uj2pzzvtkvxkbl9+uzb7e/bHbnNbrBDoJUrk5b2OMfEe4dRvi84if7PK/4X+s8NDQv8RMYlhd49u0ET75HSQCY28MTPBxEyRPfvJFx2YhOuHa2wqz4emMxpDldn/HgMu/8ZXAY/RtZRkM9T0y3+DTV+7yrVPKuUsm7SiXvKgX5GHYz/QjF8jt5YxzbrV/0Uz3OyfmYNzlZ5w8Vzl6yCfZht4lsLE5IeiWyzMueY3l4/bY8WPXaUv6i2GzSCJBwgz5w+oD/FL4bdZKERMX5txswi4l5tkNen+hjyXba4cBfL9TPrcmzvDsAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
