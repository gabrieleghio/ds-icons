import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRectangle40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M29.1553 3.40552C29.6429 3.40552 30.0352 3.79779 30.0352 4.2854V36.5549C30.0352 37.0259 29.6694 37.4073 29.2051 37.4329V37.4456H9.97559C9.48809 37.4456 9.09589 37.0531 9.0957 36.5657V4.2854C9.0957 3.79779 9.48797 3.40552 9.97559 3.40552H29.1553ZM10.8555 35.675H28.2754V5.17505H10.8555V35.675Z"/>`)}
  </svg>`;
