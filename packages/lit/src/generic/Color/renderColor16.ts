import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderColor16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M8.3 15.06C5.38 15.06 3 12.68 3 9.76C3 7.97 4.91 4.55 6.5 2C6.89 1.38 7.56 1 8.3 1C9.04 1 9.71 1.37 10.1 2C11.7 4.55 13.6 7.97 13.6 9.76C13.6 12.68 11.22 15.06 8.3 15.06ZM8.5 13.99C10.74 13.89 12.54 12.03 12.54 9.76C12.54 8.56 11.35 6.01 9.2 2.57C9.04 2.32 8.79 2.15 8.51 2.09V13.99H8.5Z" fill="black"/>`)}
  </svg>`;
