import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRound24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M11.5781 1.8147C17.1356 1.81485 21.6582 6.33725 21.6582 11.8948C21.6581 17.4522 17.1355 21.9747 11.5781 21.9749C6.0206 21.9749 1.4982 17.4523 1.49805 11.8948C1.49805 6.33716 6.02051 1.8147 11.5781 1.8147ZM11.5781 2.97485C6.65574 2.97485 2.6582 6.97239 2.6582 11.8948C2.65835 16.817 6.65583 20.8147 11.5781 20.8147C16.5003 20.8145 20.4979 16.8169 20.498 11.8948C20.498 6.97248 16.5004 2.975 11.5781 2.97485Z"/>`)}
  </svg>`;
