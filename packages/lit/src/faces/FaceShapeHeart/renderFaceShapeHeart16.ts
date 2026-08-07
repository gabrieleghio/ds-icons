import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFaceShapeHeart16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M8.12718 14.9099L7.95718 14.8399C7.95718 14.8399 7.85718 14.7699 7.81718 14.7299L7.74718 14.6299L1.13718 1.84991C1.01718 1.61991 1.06718 1.34991 1.25718 1.16991C1.29718 1.03991 1.50718 0.909912 1.72718 0.909912H14.9272C15.2472 0.909912 15.5072 1.16991 15.5072 1.48991C15.5072 1.63991 15.4472 1.77991 15.3472 1.88991L8.77718 14.6199C8.77718 14.6199 8.71718 14.7099 8.70718 14.7199C8.65718 14.7799 8.60718 14.8199 8.53718 14.8599L8.42718 14.9099C8.35718 14.9299 8.30718 14.9299 8.26718 14.9299L8.13718 14.9099H8.12718ZM8.25718 13.0799L13.9472 2.07991H2.56718L8.25718 13.0799Z"/>`)}
  </svg>`;
