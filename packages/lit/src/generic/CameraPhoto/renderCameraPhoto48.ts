import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCameraPhoto48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M23.86 18.31C19.73 18.31 16.38 21.67 16.38 25.79C16.38 29.91 19.74 33.27 23.86 33.27C27.98 33.27 31.34 29.91 31.34 25.79C31.34 21.67 27.98 18.31 23.86 18.31ZM23.86 31.28C20.84 31.28 18.38 28.82 18.38 25.8C18.38 22.78 20.84 20.32 23.86 20.32C26.88 20.32 29.34 22.78 29.34 25.8C29.34 28.82 26.88 31.28 23.86 31.28Z"/>
<path d="M43.71 13.5H37.26L30.73 8.22C30.55 8.08 30.33 8 30.1 8H17.61C17.38 8 17.16 8.08 16.98 8.22L10.45 13.5H4C3.45 13.5 3 13.95 3 14.5V39.4C3 39.95 3.45 40.4 4 40.4H43.7C44.25 40.4 44.7 39.95 44.7 39.4V14.5C44.7 13.95 44.25 13.5 43.7 13.5H43.71ZM42.71 38.41H5.01V15.51H10.81C11.04 15.51 11.26 15.43 11.44 15.29L17.97 10.01H29.75L36.28 15.29C36.46 15.43 36.68 15.51 36.91 15.51H42.71V38.41Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
