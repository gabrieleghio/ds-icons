import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderWashDryNormal48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M24.04 39.5301C15.5 39.5301 8.55 32.5801 8.55 24.0401C8.55 15.5001 15.5 8.55006 24.04 8.55006C32.58 8.55006 39.53 15.5001 39.53 24.0401C39.53 32.5801 32.58 39.5301 24.04 39.5301ZM24.04 10.5501C16.6 10.5501 10.55 16.6001 10.55 24.0401C10.55 31.4801 16.6 37.5301 24.04 37.5301C31.48 37.5301 37.53 31.4801 37.53 24.0401C37.53 16.6001 31.48 10.5501 24.04 10.5501Z"/>
<path d="M44.08 45.0801H4C3.45 45.0801 3 44.6301 3 44.0801V4.00006C3 3.45006 3.45 3.00006 4 3.00006H44.08C44.63 3.00006 45.08 3.45006 45.08 4.00006V44.0801C45.08 44.6301 44.63 45.0801 44.08 45.0801ZM5 43.0801H43.08V5.00006H5V43.0801Z"/>`)}
  </svg>`;
