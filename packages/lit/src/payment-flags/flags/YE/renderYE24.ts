import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderYE24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2484)"/>
<defs>
<pattern id="pattern0_2072_2484" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2484" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2484" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB7ZpBToNAFIb/aZs4oguWkm44gp5AmniQ3qAewSPoEbyGMaInqCdouxE8gCZoLOMbEIWFutNk/veRn/BeWPANMwkhY/BBHsfxWxUtAJNJmSE0DO6Nw/lJ9XD51RJye5BuMc4dkCJwRHgzxnY2qx43jfy1na4ZxDuaAbDPR5MrO533xfeMgcVIjnCoJS9weHJ1U3vf1yo6Hck6WHQ37Yt4FJi4x/vswruZXs8cS3DYNXaC0x4SmYFfNqjCVkfvvbeE7vsjKs+KyrOi8qxQy5uiKFxXJEmC0CnL8vNapz0rKs+KyrOi8qyoPCsqzwq1/ASB4pz7te9/ZTuQomueFZVnReVZUXlW6OVvwcnSy9+Bkwt/iiVrtN/4LFn1RyElGoAVvtlwOZcs/+GB6j/IjeQM7UxveAf4guSo7W40wAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
