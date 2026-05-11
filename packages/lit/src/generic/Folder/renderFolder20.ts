import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderFolder20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M1.46984 16.345C1.11984 16.345 0.839844 16.065 0.839844 15.715V4.255C0.839844 3.905 1.11984 3.625 1.46984 3.625H6.18984C6.40984 3.625 6.60984 3.745 6.72984 3.925L7.86984 5.775H17.7598C18.1098 5.765 18.3898 6.045 18.3898 6.395V15.715C18.3898 16.065 18.1098 16.345 17.7598 16.345H1.46984ZM2.18984 4.875C2.13984 4.875 2.08984 4.915 2.08984 4.975V14.985C2.08984 15.045 2.12984 15.085 2.18984 15.085H17.0198C17.0798 15.085 17.1198 15.045 17.1198 14.985V7.125C17.1198 7.065 17.0798 7.025 17.0198 7.025H7.50984C7.28984 7.025 7.08984 6.905 6.96984 6.725L5.82984 4.875C5.82984 4.875 5.77984 4.825 5.74984 4.825L2.19984 4.875H2.18984Z" fill="black"/>`)}
  </svg>`;
