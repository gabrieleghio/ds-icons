import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayoutFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M18.23 1H1.73C1.32683 1 1 1.32683 1 1.73V8.69C1 9.09317 1.32683 9.42 1.73 9.42H18.23C18.6332 9.42 18.96 9.09317 18.96 8.69V1.73C18.96 1.32683 18.6332 1 18.23 1Z" fill="black"/>
<path d="M18.23 10.54H1.73C1.32683 10.54 1 10.8668 1 11.27V18.23C1 18.6332 1.32683 18.96 1.73 18.96H18.23C18.6332 18.96 18.96 18.6332 18.96 18.23V11.27C18.96 10.8668 18.6332 10.54 18.23 10.54Z" fill="black"/>`)}
  </svg>`;
