import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMG48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgB7ZrBSsNAEEBnNqEtDS29JqfELyjexVbwJn6DfkH9Be8i9RP8kuoHSPMDktx6FU0FKck623ar9eIl0ZCZBxtmdhfC2x1yCIOwJUmSQafTmWitR5SOoCzOj6AOaNCx0jj1n57v7Ryax2KxCEl6RmEIZVMT+R0aUszzsR+nqVrnVYnXEYRQO84sGYYDl279guRDu9br9cDzPEBEKIWWC/8N+cF7oeE1LzYTdAAtV125tDCxm/r9/lq8aZiL9BwEo55tDwABj03ZD+2mbrcLTcZz1Pd0tJeVVuo1Rf2Ss0LkuSLyXBF5rog8V0SeKyLPFZHnishzpfK/i3g6gFrxttqFUvZcEXmuiDxXRJ4rIs8VkeeKyHNlT970rjSaH3pG/sEmWZZBo1kVXzHquaLbfrS5kV8ul82rAOPzkW+GpdB3aDov2+32HCrqwwtuzqB+6ARu5wcqiqIXRBzTTAosIPFCn5ho/cHzfT8NgiCiQ7ikNIa/R1c+Nl2m1yR+CNM4NS/9BEoykIHRZm1uAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
