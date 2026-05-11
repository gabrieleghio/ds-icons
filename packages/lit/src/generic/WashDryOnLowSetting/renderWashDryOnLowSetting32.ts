import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderWashDryOnLowSetting32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M16.18 27.33C10.03 27.33 5.03 22.33 5.03 16.18C5.03 10.03 10.03 5.03 16.18 5.03C22.33 5.03 27.33 10.03 27.33 16.18C27.33 22.33 22.33 27.33 16.18 27.33ZM16.18 6.67C10.93 6.67 6.67 10.94 6.67 16.18C6.67 21.42 10.94 25.69 16.18 25.69C21.42 25.69 25.69 21.42 25.69 16.18C25.69 10.94 21.42 6.67 16.18 6.67Z" fill="black"/>
<path d="M2.82 30.36C2.37 30.36 2 29.99 2 29.54V2.82C2 2.37 2.37 2 2.82 2H29.54C29.99 2 30.36 2.37 30.36 2.82V29.54C30.36 29.99 29.99 30.36 29.54 30.36H2.82ZM3.64 28.77L28.78 28.72L28.73 3.58L3.64 3.63V28.77Z" fill="black"/>
<path d="M16.18 17.3C16.7986 17.3 17.3 16.7986 17.3 16.18C17.3 15.5614 16.7986 15.06 16.18 15.06C15.5614 15.06 15.06 15.5614 15.06 16.18C15.06 16.7986 15.5614 17.3 16.18 17.3Z" fill="black"/>`)}
  </svg>`;
