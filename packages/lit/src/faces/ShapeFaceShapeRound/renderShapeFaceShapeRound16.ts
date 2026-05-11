import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeRound16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M8.46777 1.53027C12.2252 1.53027 15.2878 4.59221 15.2881 8.34961C15.2881 12.1072 12.2254 15.1699 8.46777 15.1699C4.71037 15.1697 1.64844 12.1071 1.64844 8.34961C1.64869 4.59237 4.71053 1.53053 8.46777 1.53027ZM8.46777 2.5C5.24576 2.50025 2.61842 5.12759 2.61816 8.34961C2.61816 11.5718 5.2456 14.1999 8.46777 14.2002C11.6902 14.2002 14.3184 11.572 14.3184 8.34961C14.3181 5.12744 11.69 2.5 8.46777 2.5Z" fill="black"/>`)}
  </svg>`;
