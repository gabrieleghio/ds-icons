import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderGoOLastArrow40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M8.4275 3.26C8.0975 2.93 7.5775 2.93 7.2475 3.26C6.9175 3.59 6.9175 4.11 7.2475 4.44L23.1875 20.38L7.2475 36.32C6.9175 36.65 6.9175 37.17 7.2475 37.5C7.4075 37.66 7.6275 37.74 7.8375 37.74C8.0475 37.74 8.2675 37.66 8.4275 37.5L24.9575 20.97C25.2875 20.64 25.2875 20.12 24.9575 19.79L8.4275 3.26Z" fill="black"/>
<path d="M31.4375 3C30.9775 3 30.6075 3.37 30.6075 3.83V36.6C30.6075 37.06 30.9775 37.43 31.4375 37.43C31.8975 37.43 32.2675 37.06 32.2675 36.6V3.84C32.2675 3.38 31.8975 3.01 31.4375 3.01V3Z" fill="black"/>`)}
  </svg>`;
