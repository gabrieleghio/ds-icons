import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBJ48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGSSURBVHgB7Zo7TsNAEIb/XZsEEoo0FOmCRIsEiB4HhMQtgBMkHRIVVIguHCG3IJXDCcgN4oKGBkU8lJfxMsbBedQOsTzzWSvtjle2vpndlSxZ4Y+6U0IhV4NRDhQcJMTLSQupQKFjKTTKVTSnoZCrswos41KvgoRJjfwEA3i2RpWS4OnfyJLE0whVu+IHcLsuSjauTy8wK563gZxFsxSSoLyFlRMEQH8IvH9G4zABto+6JslaPGvdjuQTEk8LmtZ3cQPYLExjysKRpgNuL46sWcgyxRl52vyOnrubsYovohf0NBgj8lwRea6IPFdEnisizxWR54rIc0XkuWJjybwd7iBN9Iwf92XZc0XkuSLyXBF5rog8V0SeKyLPlXl5Y5BlFu00RdrxaPSNLNM3wezwmSpvnuLhkD70R37mVoCh64vEPzAn/2AjP2pgmD+HmvyONvCjlhCvJrlnJQWVtrs79poaN+0eAlWliAcedH0Lx2EnOvDuHz3ctbYpCZeUlw7+H7P0ZuDSbr4dF3GwP/C88KU/TaB9xdmsH7wAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
