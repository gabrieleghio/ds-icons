import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRound20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M9.98047 1.67529C14.6179 1.67548 18.3896 5.44795 18.3896 10.0854C18.3895 14.7228 14.6178 18.4944 9.98047 18.4946C5.34297 18.4946 1.5705 14.7229 1.57031 10.0854C1.57031 5.44783 5.34285 1.67529 9.98047 1.67529ZM9.98047 2.65479C5.88804 2.65479 2.5498 5.98311 2.5498 10.0854C2.54999 14.1876 5.87811 17.5054 9.98047 17.5054C14.0825 17.5052 17.4002 14.1776 17.4004 10.0854C17.4004 5.99309 14.0726 2.65498 9.98047 2.65479Z" fill="black"/>`)}
  </svg>`;
