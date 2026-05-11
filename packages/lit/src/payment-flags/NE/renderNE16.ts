import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderNE16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2092)"/>
<defs>
<pattern id="pattern0_2072_2092" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2092" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2092" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAISSURBVHgB7ZoxThtBFIb/N2wiZIfEihQrTrXJCYyUPt5URKJPGXMCOEEiJReAE0DukILOSZpIoTA38Fa2RIEskA1Gxo/3wF5ssKDADGhmvsI7742bb+fNzK52CEPqFRT6OayCUZGwAvfYJcb6+238HCVIf/4tIY4INWnGcJ80YiSL20jP5Xc+oQE/xEek0REWo/9LqGJMPB8BuTnAEJxhwMDxKXDYz1LxyTzWIiKZ50MWVDyCc+hAqtdA2p1+lvtg5Foe/Wl+Dk6Tn/SrmPHIpVKfBl3xM/CYIO8rQd5XgryveC1PzWaTR0GpVILrtFqtrB3K3lesv8Nxp42DXxvo1rbQ30sRFWPkkiqeL6+C8gXYxOqcV/G9rwlOGrvX+p6+LaP4vXbvN+DB5vyhjPg0cUXzWhE2sSrfkVK/ie4t/bPGqrzO8bv0zxqr8rq43aV/1liVz8uqfhO55AtsYlX+mWxnT+Ly1D5d7ReW12ATq/JGtrHijxpefP6WlbheNX4l25xxeZ9/DIRn+yEOfqK4gMG35glbby6jl45/tVD2T7NmeKX1lSDvK0HeV4K8r0zKD+A2Vx76RJ5/Z1HPcfvehH3dgOlPFh7psSW+OL7kEuqjbt2xwaXBBmEzLoB6dYlieAM3UG29M1hJ22BOJJHCC0Sc+aO2Js8nbb6ugoyeyyvDLhbmmaxtTH+l9tex0m5r5gw9t5/wEvqhCgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
