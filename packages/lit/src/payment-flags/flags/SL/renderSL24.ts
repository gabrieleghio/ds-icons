import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderSL24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2274)"/>
<defs>
<pattern id="pattern0_2072_2274" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2274" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2274" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZoxTgJBFIb/91yiEEIoLKQwIZ5AO2Mj2Fib2NhxA/Ak4gmMlYkXMFagiYkd3gBiARYWJIrC4u5zlri7QkOlxbz5ktnM+5vdb+ftZIsh/FC8qBQLeb8uoAoEFViGAE/MaD4fP1zGGUWXjavdcmaFW6Ysw3560yCovpw89mbym9d7XSXiMb23UWbHM+K13+KUXQGbASJYgwhkEiAcBXFSLuT8BhOoHieU88BmWCUeYXxozZstbIww7bPZCLbjgFcZNsNZLy3Mpj5vy5at+CILenYv9RKcvFacvFacvFZUy1O/35e4KJVKsJ3BYJDMXdtrxclrxclrxclrxclrxclrRbW8B0sRWZ4Tn96mZX4d1vP+mkzdN68VJ68VJ68VJ6+VeXkJYTULv30skHZSTcewmq/UT0AdJpG7JPE/zAv4tK8DIp/IbTJKI8g5odEqEvkdAspQgmn+rpwdbjGa1aFIWDVBDwqYiUt4EM3nzyc1bmoErhOlx9P+75n++AYibYLchxg30TwaRtk3YLZ0PxX09/cAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
