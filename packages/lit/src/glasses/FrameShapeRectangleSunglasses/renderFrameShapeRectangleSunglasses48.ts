import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFrameShapeRectangleSunglasses48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M45.9225 18H28.5232C27.9365 18 27.4564 18.47 27.4564 19.0444V20.3916C26.2616 19.9426 24.9281 19.8381 24.352 19.8277C23.0826 19.7859 21.6744 19.953 20.5223 20.4021V19.0444C20.5223 18.47 20.0422 18 19.4555 18H2.06679C1.48006 18 1 18.47 1 19.0444V28.9556C1 29.53 1.48006 30 2.06679 30H19.4661C20.0529 30 20.5329 29.53 20.5329 28.9556V22.8146C20.9703 22.3238 22.4638 21.8747 24.2987 21.906C26.0696 21.9582 27.1577 22.4178 27.4671 22.7833V28.9556C27.4671 29.53 27.9471 30 28.5339 30H45.9332C46.5199 30 47 29.53 47 28.9556V19.0444C47 18.47 46.5199 18 45.9332 18H45.9225Z"/>`)}
  </svg>`;
