import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderApplePay16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 16" width="24" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="24" height="16"/>`)}
  </svg>`;
