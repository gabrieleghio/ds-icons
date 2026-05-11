import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashNormalAnyBleach24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.83 22.92C1.37 22.92 1 22.55 1 22.09C1 21.88 1.08 21.68 1.22 21.53L11.08 2.43003C11.16 2.28003 11.28 2.16003 11.45 2.08003C11.54 2.04003 11.62 2.01003 11.71 2.00003H11.95L12.16 2.06003C12.37 2.17003 12.5 2.28003 12.58 2.44003L22.48 21.58C22.65 21.9 22.58 22.29 22.31 22.55C22.24 22.74 21.97 22.93 21.64 22.93H1.83V22.92ZM11.82 4.75003C11.82 4.75003 11.73 4.77003 11.71 4.81003L3.3 21.08C3.3 21.08 3.28 21.16 3.3 21.2C3.32 21.24 3.36 21.26 3.4 21.26H20.23C20.23 21.26 20.31 21.24 20.33 21.2C20.35 21.16 20.35 21.12 20.33 21.08L11.93 4.81003C11.93 4.81003 11.87 4.75003 11.82 4.75003Z" fill="black"/>`)}
  </svg>`;
