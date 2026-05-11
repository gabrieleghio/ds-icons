import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderLogoNuanceAudio32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M14.2877 11.0431C20.94 10.192 21.2872 22.23 14.2673 21.5219C9.05857 20.9976 8.83388 11.7376 14.2877 11.0431Z" fill="black"/>
<path d="M24.1061 12.3913C26.5981 11.8738 27.2858 15.5574 26.993 17.3345C26.7479 18.812 25.4883 21.0317 23.7112 20.024C22.2473 19.1933 21.8932 16.64 22.1792 15.1352C22.3494 14.2228 23.0984 12.6023 24.1129 12.3913H24.1061Z" fill="black"/>
<path d="M3.30512 14.6382C4.33325 14.5497 6.3759 15.0195 6.301 16.3608C6.19206 18.2605 1.91612 18.5192 1.11948 16.7693C0.527115 15.462 2.27698 14.7267 3.30512 14.6382Z" fill="black"/>
<path d="M30.5881 17.6341C30.2953 17.92 29.9412 17.9541 29.594 17.743C28.702 17.1915 28.8518 14.8833 29.8731 14.7199C31.1124 14.5292 31.2962 16.9532 30.5881 17.6341Z" fill="black"/>`)}
  </svg>`;
