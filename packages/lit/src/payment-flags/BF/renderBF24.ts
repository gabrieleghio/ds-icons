import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderBF24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1416)"/>
<defs>
<pattern id="pattern0_2072_1416" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1416" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1416" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB7ZrbThNBGMf/My0UVog1pheSGDZgNMoFNXrhhYeCb2Ci8U7irSYVX0B9AUETH4BH8AkEXgAuNCQkhJULLjQGAqUHoDN+X2FrDx4adGbMbn/Jdvebnd32N9/M7myzAscs+X56QKq8FiJHYQ5RQ2NZCj17YW1jLiwS/LHi+35C6g8U+Yg+QbUqJi4HQVCTXx0ZXo+JeEiwVxVXk6uj56co8MPSASngCQkpEBmUBspaY0epsMj3pHqWhJB5Gg81Bsn4lJSIGpxITwgo6t4FdSQrhLgjSTwbVuqPoHgjXrNfrimKtnq7X9R9f0tXPq505eOKU/me+1twiTN5eaWE3gdbSIyV4Apn8izOuMy+E3nOemKsXNvmtavsO5EPsx7iKvvW5RuzHuIq+0kYRHj0CJk5QMLfp2dlRetKm3hI6slXVD/1QX3pgQp6aZ2E/pyCSYzIs3Tfq01Ilu70mMwhkrlCWzk3RPnFEHTx33dSI92ef2jlXQZ67+9Oz8fXzlM0MzqNjXkVpFB+ee7EDcDH8fF8HlMYveCdtAFsiDPGr/ZhA/AFrBM01bMhziQvPh3+EaXNfeFrnUAeG3+s91YP4fnDSzDGdqW+ae0+n/V2O6rnp+zd763Jj3coP+4VYAsr8unEYW1pZbk42Fbm95ao7gFsYEV+vH+nKZ7fPYPJ1eu4tnID99ayCCr9zfUtZd+O/LEMS7L0XVoWqAGY99sZjH68icfBWL0RWhvLFEbn9o2w3Ny3oV/u5328PDq7idM/GSImEJi5retR2vy91TkubnX/I135uNKVjytd+bjSLK81Ik2LHsnr+XpUUYg0+9XGaElCiYV6WKZpZaUavR7APmXyKjVMmyXe0PQ2l6Y/m5aAWL2Ht47pxRGJ6fltaoYJKggQD9ap/0/yRvOrhjO3pqgoT1tZ2MXCOONrm1ikRM8eJRz4DmQb6L78d8dOAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
