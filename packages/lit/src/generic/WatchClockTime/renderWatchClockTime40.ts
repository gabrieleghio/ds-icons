import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWatchClockTime40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_905)">
<path d="M19.58 0C8.78 0 0 8.78 0 19.58C0 30.38 8.78 39.16 19.58 39.16C30.38 39.16 39.16 30.38 39.16 19.58C39.16 8.78 30.38 0 19.58 0ZM19.58 37.49C9.7 37.49 1.66 29.45 1.66 19.58C1.66 9.71 9.7 1.67 19.58 1.67C29.46 1.67 37.5 9.71 37.5 19.58C37.5 29.45 29.46 37.49 19.58 37.49Z" fill="black"/>
<path d="M20.42 19.23V11.25C20.42 10.79 20.05 10.42 19.59 10.42C19.13 10.42 18.76 10.79 18.76 11.25V19.57C18.76 19.57 18.78 19.65 18.78 19.69C18.78 19.76 18.79 19.83 18.82 19.89C18.86 19.99 18.92 20.09 19 20.17L27.17 28.34C27.33 28.5 27.55 28.58 27.76 28.58C27.97 28.58 28.19 28.5 28.35 28.34C28.68 28.01 28.68 27.49 28.35 27.16L20.42 19.23Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_905">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
