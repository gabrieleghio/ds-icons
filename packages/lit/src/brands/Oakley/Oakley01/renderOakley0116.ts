import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderOakley0116 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M8.04098 14.63C5.26098 14.63 3.00098 12.37 3.00098 9.59C3.00098 6.81 7.12098 1.76 7.59098 1.2C7.70098 1.07 7.86098 1 8.04098 1C8.22098 1 8.38098 1.07 8.49098 1.2C8.68098 1.42 13.081 6.74 13.081 9.6C13.081 12.46 10.821 14.64 8.04098 14.64V14.63ZM8.04098 2.5C6.99098 3.84 4.17098 7.63 4.17098 9.59C4.17098 11.73 5.91098 13.47 8.04098 13.47C10.171 13.47 11.911 11.73 11.911 9.59C11.911 7.63 9.09098 3.84 8.04098 2.5Z"/>`)}
  </svg>`;
