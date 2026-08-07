import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderPlaceholder24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 36 24" width="36" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="35.0222" height="24" fill="url(#pattern0_2072_2726)"/>
<defs>
<pattern id="pattern0_2072_2726" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2726" transform="scale(0.00507614 0.00740741)"/>
</pattern>
<image id="image0_2072_2726" width="197" height="135" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACHCAYAAACmqJ2XAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB7dhNThtJAIbhamMwWCyQEGLLrJB33GCkucBIc4CZKEeZG+QC+TlBcoL8nCDZeRlWLLCQ2FhGYNypQrEUfbkB/TySVe6uXtar6uquhPl8/qLruv/6vr+o41GBZ6iu79u6vj/X34fz8/N3v8512z81hrP6wPv6uzg8PCx7e3tlZ2enwHO02WzKarUqy+WyXX6qkbyczWaX7eIpip9BfDo4ODg7Pj4uo9GowBCs1+uyWCzKw8PD9xrGXy2Mp9W/DeLk5EQQDMp4PC6np6dld3f3j9rB63ava2eIOvGmTbQHYIjajnF1ddW33WLUDtX7+/uCYNDa+p9MJl2N4u9R+8pUX50KDN10Om3Hhz/bTnHkHAFle54+UgMEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAEAUEUUAQBQRRQBAFBFFAGPV9f/v4+Fhg6DabTRtuR13Xfbu/vy8wdHd3d2341naKd8vlclsJDNJ6vS6r1apvPYxms9nbGsTXm5ubAkPUNoTr6+u+/n1be/jydNCudfxTK/m+WCyeioGhaOu9BtHGy9rB/+1et52cz+dn9XzxcTwen00mk246nZZ6XeA5ah+X2lm6Hh36ulN8rkG8rLvEZZv7bdXXOF7UGP6tD13U8ajAM9S+utb13WJ41V6Zfp37ATM4wD/AG311AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
