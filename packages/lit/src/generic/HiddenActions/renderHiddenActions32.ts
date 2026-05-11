import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderHiddenActions32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M15.8799 26.6951C16.8699 26.6951 17.6699 27.4951 17.6699 28.4851C17.6697 29.4749 16.8697 30.2751 15.8799 30.2751C14.89 30.2751 14.0901 29.4749 14.0898 28.4851C14.0898 27.4951 14.8899 26.6951 15.8799 26.6951Z" fill="black"/>
<path d="M15.8799 13.7546C16.8699 13.7547 17.6699 14.5547 17.6699 15.5447C17.6699 16.5347 16.8699 17.3347 15.8799 17.3347C14.8899 17.3347 14.0898 16.5347 14.0898 15.5447C14.0898 14.5547 14.8899 13.7546 15.8799 13.7546Z" fill="black"/>
<path d="M15.8799 0.804443C16.8698 0.804464 17.6698 1.60459 17.6699 2.59448C17.6699 3.58447 16.8699 4.3845 15.8799 4.38452C14.8899 4.38452 14.0898 3.58448 14.0898 2.59448C14.09 1.60458 14.89 0.804443 15.8799 0.804443Z" fill="black"/>`)}
  </svg>`;
