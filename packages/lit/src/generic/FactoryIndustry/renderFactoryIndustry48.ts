import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFactoryIndustry48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M41.36 10.91C41.1 10.72 40.75 10.68 40.45 10.79L24.89 16.37V11.74C24.89 11.41 24.73 11.11 24.47 10.92C24.2 10.73 23.87 10.69 23.56 10.8L13.45 14.39V4C13.45 3.45 13 3 12.45 3H7C6.45 3 6 3.45 6 4V43.42C6 43.97 6.45 44.42 7 44.42H40.79C41.34 44.42 41.79 43.97 41.79 43.42V11.72C41.79 11.39 41.63 11.09 41.37 10.9L41.36 10.91ZM11.44 5V15.09L7.99 16.31V5H11.44ZM33.34 42.42H24.89V28.37H33.34V42.42ZM22.89 42.42H14.44V28.37H22.89V42.42ZM39.79 42.42H35.34V27.37C35.34 26.82 34.89 26.37 34.34 26.37H13.44C12.89 26.37 12.44 26.82 12.44 27.37V42.42H7.99V18.43L22.89 13.14V17.78C22.89 18.11 23.05 18.41 23.31 18.6C23.57 18.79 23.92 18.83 24.22 18.72L39.78 13.14V42.42H39.79Z"/>`)}
  </svg>`;
