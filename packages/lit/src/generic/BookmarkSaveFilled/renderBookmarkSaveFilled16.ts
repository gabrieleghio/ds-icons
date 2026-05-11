import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M11.9948 1.49463H4.21477C4.03477 1.49463 3.88477 1.64463 3.88477 1.82463V15.0646C3.88477 15.1946 3.96477 15.3246 4.09477 15.3746C4.13477 15.3946 4.17477 15.4046 4.22477 15.4046C4.31477 15.4046 4.39477 15.3746 4.46477 15.3046L8.14477 11.6246L11.7748 15.3046C11.8748 15.4046 12.0148 15.4346 12.1348 15.3746C12.2548 15.3146 12.3448 15.2046 12.3448 15.0646V1.82463C12.3448 1.64463 12.1948 1.49463 12.0148 1.49463H11.9948Z" fill="black"/>`)}
  </svg>`;
