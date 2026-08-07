import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeOval24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M11.5703 1.62524C16.0376 1.62543 19.6504 6.15878 19.6504 11.7053C19.6503 17.2517 16.0375 21.7852 11.5703 21.7854C7.10296 21.7854 3.49035 17.2519 3.49023 11.7053C3.49023 6.15867 7.10288 1.62524 11.5703 1.62524ZM11.5703 2.7854C7.76891 2.7854 4.65039 6.7705 4.65039 11.7053C4.65051 16.64 7.76898 20.6252 11.5703 20.6252C15.3715 20.6251 18.4901 16.6399 18.4902 11.7053C18.4902 6.77062 15.3716 2.78559 11.5703 2.7854Z"/>`)}
  </svg>`;
