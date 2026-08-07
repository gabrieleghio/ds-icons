import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRectangle24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M5.84055 22.525C5.55055 22.525 5.31055 22.285 5.31055 21.995V2.63498C5.31055 2.34498 5.55055 2.10498 5.84055 2.10498H17.3505C17.6405 2.10498 17.8805 2.34498 17.8805 2.63498V21.995C17.8805 22.285 17.6405 22.525 17.3505 22.525H5.84055ZM6.50055 3.16498C6.43055 3.16498 6.38055 3.21498 6.38055 3.28498V21.345C6.38055 21.415 6.43055 21.465 6.50055 21.465H16.7105C16.7805 21.465 16.8305 21.415 16.8305 21.345V3.28498C16.8305 3.21498 16.7805 3.16498 16.7105 3.16498H6.50055Z"/>`)}
  </svg>`;
