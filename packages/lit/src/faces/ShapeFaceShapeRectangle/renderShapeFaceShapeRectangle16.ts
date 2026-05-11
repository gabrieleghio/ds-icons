import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRectangle16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M4.6468 14.5C4.4068 14.5 4.2168 14.31 4.2168 14.07V1.15998C4.2168 0.91998 4.4068 0.72998 4.6468 0.72998H12.3168C12.5568 0.72998 12.7468 0.91998 12.7468 1.15998V14.07C12.7468 14.31 12.5568 14.5 12.3168 14.5H4.6468ZM11.8868 13.63V1.58998H5.0768V13.63H11.8868Z" fill="black"/>`)}
  </svg>`;
