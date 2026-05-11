import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderColor24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M12.04 22.32C7.61 22.32 4 18.71 4 14.28C4 11.57 6.89 6.38 9.31 2.51C9.9 1.56 10.92 1 12.04 1C13.16 1 14.18 1.57 14.77 2.51C17.19 6.38 20.08 11.56 20.09 14.28C20.09 18.72 16.48 22.33 12.05 22.33L12.04 22.32ZM12.34 20.7C15.74 20.54 18.46 17.72 18.46 14.28C18.46 12.46 16.66 8.59 13.39 3.37C13.15 2.99 12.77 2.73 12.34 2.65V20.7Z" fill="black"/>`)}
  </svg>`;
