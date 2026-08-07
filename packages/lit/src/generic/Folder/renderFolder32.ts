import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFolder32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M3.1657 25.76C2.7157 25.76 2.3457 25.39 2.3457 24.94V6.60003C2.3457 6.15003 2.7157 5.78003 3.1657 5.78003H10.7157C10.9957 5.78003 11.2657 5.93003 11.4057 6.17003L13.3257 9.28003L29.2157 9.21003C29.6657 9.21003 30.0357 9.58003 30.0357 10.03V24.95C30.0357 25.4 29.6657 25.77 29.2157 25.77H3.1657V25.76ZM3.9357 7.42003L3.9857 24.18L28.4657 24.13L28.4157 10.79L12.8457 10.84C12.5557 10.84 12.3057 10.7 12.1557 10.45L10.2457 7.37003L3.9457 7.42003H3.9357Z"/>`)}
  </svg>`;
