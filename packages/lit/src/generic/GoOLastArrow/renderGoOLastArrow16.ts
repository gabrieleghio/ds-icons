import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderGoOLastArrow16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M3.9925 1.18C3.8825 1.07 3.7325 1.01 3.5825 1.01C3.4325 1.01 3.2825 1.07 3.1725 1.18C3.0625 1.29 3.0025 1.44 3.0025 1.59C3.0025 1.74 3.0625 1.89 3.1725 2L9.3725 8.2L3.1725 14.4C2.9425 14.63 2.9425 15 3.1725 15.23C3.2825 15.34 3.4325 15.4 3.5825 15.4C3.7325 15.4 3.8825 15.34 3.9925 15.23L10.6025 8.62C10.7125 8.51 10.7725 8.36 10.7725 8.21C10.7725 8.05 10.7125 7.91 10.6025 7.8L3.9925 1.18Z" fill="black"/>
<path d="M13.0225 1C12.7025 1 12.4425 1.26 12.4425 1.58V14.69C12.4425 15.01 12.7025 15.27 13.0225 15.27C13.3425 15.27 13.6025 15.01 13.6025 14.69V1.59C13.6025 1.27 13.3425 1.01 13.0225 1.01V1Z" fill="black"/>`)}
  </svg>`;
