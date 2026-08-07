import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeOval48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M23.6094 43.8901C14.7894 43.8901 7.60938 34.9201 7.60938 23.8901C7.60938 12.8601 14.7894 3.89014 23.6094 3.89014C32.4294 3.89014 39.6094 12.8601 39.6094 23.8901C39.6094 34.9201 32.4294 43.8901 23.6094 43.8901ZM23.6094 5.89014C15.8894 5.89014 9.60938 13.9701 9.60938 23.8901C9.60938 33.8101 15.8894 41.8901 23.6094 41.8901C31.3294 41.8901 37.6094 33.8101 37.6094 23.8901C37.6094 13.9701 31.3294 5.89014 23.6094 5.89014Z"/>`)}
  </svg>`;
