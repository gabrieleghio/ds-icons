import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeSquare16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M14.1943 1.53027C14.4618 1.53027 14.6746 1.7423 14.6748 2.00977V14.6797C14.6748 14.9473 14.462 15.1602 14.1943 15.1602H1.52441C1.25695 15.16 1.04492 14.9472 1.04492 14.6797V2.00977C1.04509 1.7424 1.25705 1.53044 1.52441 1.53027H14.1943ZM2.00488 14.1904H13.7051V2.49023H2.00488V14.1904Z" fill="black"/>`)}
  </svg>`;
