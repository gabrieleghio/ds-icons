import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayoutFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M29.07 2H2.67C2.29997 2 2 2.29997 2 2.67V13.8C2 14.17 2.29997 14.47 2.67 14.47H29.07C29.44 14.47 29.74 14.17 29.74 13.8V2.67C29.74 2.29997 29.44 2 29.07 2Z"/>
<path d="M29.07 17.27H2.67C2.29997 17.27 2 17.57 2 17.94V29.07C2 29.44 2.29997 29.74 2.67 29.74H29.07C29.44 29.74 29.74 29.44 29.74 29.07V17.94C29.74 17.57 29.44 17.27 29.07 17.27Z"/>`)}
  </svg>`;
