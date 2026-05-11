import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderColor20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M9.7 18.77C6 18.77 3 15.76 3 12.07C3 9.81 5.41 5.49 7.43 2.26C7.92 1.47 8.77 1 9.7 1C10.63 1 11.48 1.47 11.97 2.26C13.99 5.49 16.4 9.81 16.4 12.07C16.4 15.77 13.39 18.77 9.7 18.77ZM9.95 17.41C12.79 17.28 15.05 14.93 15.05 12.06C15.05 10.55 13.55 7.32 10.82 2.97C10.62 2.65 10.3 2.44 9.94 2.37V17.41H9.95Z" fill="black"/>`)}
  </svg>`;
