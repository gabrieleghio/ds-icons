import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueGridFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M1.73 1H8.68C9.08 1 9.41 1.33 9.41 1.73V8.68C9.41 9.08 9.08 9.41 8.68 9.41H1.73C1.33 9.41 1 9.08 1 8.68V1.73C1 1.33 1.33 1 1.73 1Z"/>
<path d="M11.26 1H18.21C18.61 1 18.94 1.33 18.94 1.73V8.68C18.94 9.08 18.61 9.41 18.21 9.41H11.26C10.86 9.41 10.53 9.08 10.53 8.68V1.73C10.53 1.33 10.86 1 11.26 1Z"/>
<path d="M1.73 10.53H8.68C9.08 10.53 9.41 10.86 9.41 11.26V18.21C9.41 18.61 9.08 18.94 8.68 18.94H1.73C1.33 18.94 1 18.61 1 18.21V11.26C1 10.86 1.33 10.53 1.73 10.53Z"/>
<path d="M11.26 10.53H18.21C18.61 10.53 18.94 10.86 18.94 11.26V18.21C18.94 18.61 18.61 18.94 18.21 18.94H11.26C10.86 18.94 10.53 18.61 10.53 18.21V11.26C10.53 10.86 10.86 10.53 11.26 10.53Z"/>`)}
  </svg>`;
