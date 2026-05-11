import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeDiamond16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M8.29016 0.75C8.50717 0.75 8.70244 0.858392 8.82141 1.03125L8.82239 1.03223L13.0822 7.57227L13.0831 7.57324C13.2135 7.77992 13.2123 8.05031 13.0831 8.26562L13.0822 8.26758L8.82239 14.8066C8.70249 14.9919 8.50582 15.0898 8.29016 15.0898H8.24036V15.0762C8.04358 15.0608 7.86861 14.9574 7.75891 14.7979L3.49817 8.25684C3.36771 8.05027 3.36822 7.77979 3.49719 7.56445L3.49817 7.5625L7.75891 1.03223C7.86894 0.857154 8.07499 0.750101 8.29016 0.75ZM4.7804 7.90918L8.29016 13.2881L11.7999 7.90918L8.29016 2.53027L4.7804 7.90918Z" fill="black"/>`)}
  </svg>`;
