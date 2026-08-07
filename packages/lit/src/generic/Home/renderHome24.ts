import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderHome24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_528)">
<path d="M1.76 22.34C1.34 22.34 1 22 1 21.58V8.36C1 8.11 1.13 7.87 1.34 7.73L11.25 1.13C11.38 1.05 11.52 1 11.67 1C11.82 1 11.96 1.04 12.09 1.13L22 7.74C22.21 7.88 22.34 8.12 22.34 8.37V21.59C22.34 22.01 22 22.35 21.58 22.35H1.76V22.34ZM11.67 2.69C11.67 2.69 11.62 2.69 11.6 2.71L2.5 8.78V20.71C2.51 20.78 2.57 20.83 2.63 20.83H20.71C20.78 20.83 20.83 20.78 20.83 20.71V8.76L11.74 2.71C11.74 2.71 11.7 2.69 11.67 2.69Z"/>
<path d="M14.21 22.34C13.79 22.34 13.45 22 13.45 21.58V15.84C13.45 15.77 13.4 15.72 13.33 15.72H10C9.93 15.72 9.88 15.77 9.88 15.84V21.58C9.88 22 9.54 22.34 9.12 22.34C8.7 22.34 8.37 22 8.37 21.58V14.97C8.37 14.55 8.71 14.21 9.12 14.21H14.2C14.62 14.21 14.95 14.55 14.95 14.97V21.58C14.95 22 14.61 22.34 14.2 22.34H14.21Z"/>
</g>
<defs>
<clipPath id="clip0_2055_528">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
