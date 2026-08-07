import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderBackpack16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path fill="#000" d="M4.54 12.63c0 .58.47 1.06 1.06 1.06h3.98c.58 0 1.06-.47 1.06-1.06v-2.48H4.55v2.48h-.01Zm1.17-1.32h3.75l-.03 1.21-3.72-.04v-1.17Z"/>
  <path fill="#000" d="M12.83 3.61a.591.591 0 0 0-.58-.51H10.1v-.04l-.02-.13A2.576 2.576 0 0 0 7.59 1C6.42 1 5.4 1.8 5.1 2.95c0 0-.02.11-.02.12v.04H2.93c-.29 0-.54.22-.58.51L2 6.45c0 .53.3.99.77 1.22v7.29c.01.33.28.6.61.6h8.3a.6.6 0 0 0 .6-.59l.13-7.3c.48-.23.77-.71.77-1.29l-.35-2.76v-.01ZM7.59 2.16c.6 0 1.16.41 1.34.94H6.27c.2-.56.73-.94 1.32-.94Zm-1.34 2.1h2.68v2.36H6.25V4.26Zm-2.9 2.36c-.11 0-.18-.08-.19-.14l.28-2.23h1.64v2.36H3.35v.01Zm7.89 3.09v4.48c0 .1-.08.19-.19.19H4.12a.19.19 0 0 1-.19-.19v-6.4h1.14v1.43a.58.58 0 0 0 1.16 0V7.79h2.68v1.43a.58.58 0 0 0 1.16 0V7.79h1.14v1.92h.03Zm.59-3.09H10.1V4.26h1.64l.28 2.19c0 .1-.09.18-.19.18v-.01Z"/>`)}
  </svg>`;
