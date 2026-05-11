import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderLK24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1938)"/>
<defs>
<pattern id="pattern0_2072_1938" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1938" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1938" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARESURBVHgB7ZrNbxtFGMaf3aZO/BVIbETjFmQXGoRoQlErFXHB7gWpEoeqcEACARKCY7hw4MS/0BwRSKiAOKBWPVQqN2I4FCoFlaanJlKdfjmqWvcjseOum3j7PuPM1nbaWJt+eGrnJ212ZnZl6Xnn/ZjZjIUVcsfwfF8VY66LtHTT6DBE1/+2hUNDH+CwHrP4Z+4Ykm4VE3CRRKdjYdaykRk6IHf280eR6wrhGjGAM4+3euZ+x2dunfBoEAjLZVnoGEQfFh1gvqQHkAxE8LXt2hjTL/WHgEios4QT6gn3ibZgw9i7ttx36YFQLzqacLChm+6p71l2Xfvn/WiFu/lEy3fw0f3m91+Moh189eOUuttNHm2ji+lq8T1oE/s+vei1/zz8Mh4Hfn9zw+27lba5fbNbRgcrCISWUbgcxHrxGz5tE9/MOwfzyP760qpxGqVS3gRHLjKSuY7k6G01NnnixUcyljHik2/Ow/lhE4b33sT0qQEl+uC3M6gs1kQv3AhgobAZ0dhdTP87gOG3b+L9sfM4OxHHf2KE9WCE+PjWsppJkpJZHc1cQ2zbHdXvDS7X7iok+nDySFz1A1O1EKGR6A2OGIlG84MRCY+x7qzM8Nls3BPe8M6KEdKfXK69N/GCmnGGCj0isaMIvxgx84Fg1WvnZyI4Pr4dO2U2U6Pz3jjdns8i4vbvfXkB5xgasUrtoeza/jmagF8MEb/stXfvv6pcmbPaIL5A8WHMTvWrUIiI8KKMMRFy1pkDGP9+MKbOc2YJkxljOf3xJe9ZLR+4Xl6gYL6jKwCNV1n0L8WYbK+hERj3THBxiX2d4dmmV2i0y9NL+Oynb96AX4wQTzeODjpKCMXvEZHM4Lkz/UhJCcxPh5Ux9tSJb2ZIXH9OcoIfjBA/IqWNSS+2raxcWc8whZPEcKnlb9A75mbgCyPE//bd62r2dfJ6WhiT8HTyigzeXfWMmb4VzA1+MUJ84tWiWtYSljLi1GVvndw4xlqff0Bs+413YoTbs4RFYyWvzXo9vPeG95yip08NqtqvPYTJT+eG/DqEEzMWOaHlhv5JWa0x63OnR46Pv4LClcbd2+TKZmb3GhWgFUa4fWzrnVWJjrPPWGcYNAvX0AB8Ly5VgmXSL0aI5zo9+8vqvTyXszTM0BoVgMbhCo8G8IsxMa+XroRlj6GQ2FFScb5WMovIjDPmc1PPwS/GLW/JSPqa2qgEVO1/uHO+JklxZ6Ygxlry1gl+MFL85B9b1NWKc1IBeK2Xje/23crGd/t28Lhc/VF+c2PmnwmewGkRK3+E3z5rbBloPKDQaVRF6dX7+yXl9lndKTroaMr1+lyctl0Xf+l+cREoyf8L3Co6CupZKNedxoI6kDRu8eRl7xJOS0wl0S24yCU+xHY7dQC3rCVkZGAW3YAIF7372GzIoepAYu1c3i48XVw8ebIS4n9XijiU+hy3OHAPOpmpXtcfWKAAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
