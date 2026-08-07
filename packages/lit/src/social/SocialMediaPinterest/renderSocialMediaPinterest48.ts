import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaPinterest48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M24.7 0C11.6 0 5 9.39 5 17.22C5 21.96 6.8 26.18 10.65 27.75C11.28 28.01 11.85 27.76 12.03 27.06C12.16 26.58 12.46 25.36 12.59 24.85C12.77 24.16 12.7 23.92 12.19 23.31C11.08 22 10.37 20.3 10.37 17.9C10.37 10.93 15.58 4.69 23.94 4.69C31.34 4.69 35.41 9.21 35.41 15.26C35.41 23.21 31.89 29.92 26.67 29.92C23.79 29.92 21.63 27.53 22.32 24.61C23.15 21.12 24.75 17.35 24.75 14.83C24.75 12.57 23.54 10.69 21.03 10.69C18.08 10.69 15.71 13.74 15.71 17.83C15.71 20.43 16.59 22.19 16.59 22.19C16.59 22.19 13.57 34.97 13.04 37.21C11.99 41.67 12.88 47.14 12.96 47.69C13 48.02 13.42 48.09 13.62 47.85C13.89 47.5 17.4 43.16 18.6 38.83C18.94 37.6 20.54 31.25 20.54 31.25C21.5 33.08 24.3 34.69 27.27 34.69C36.13 34.69 42.15 26.61 42.15 15.79C42.16 7.62 35.23 0 24.7 0Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
