import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayoutFilled24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M21.9007 1.2251H2.1007C1.61469 1.2251 1.2207 1.61909 1.2207 2.1051V10.4451C1.2207 10.9311 1.61469 11.3251 2.1007 11.3251H21.9007C22.3867 11.3251 22.7807 10.9311 22.7807 10.4451V2.1051C22.7807 1.61909 22.3867 1.2251 21.9007 1.2251Z" fill="black"/>
<path d="M21.9007 12.6751H2.1007C1.61469 12.6751 1.2207 13.0691 1.2207 13.5551V21.8951C1.2207 22.3811 1.61469 22.7751 2.1007 22.7751H21.9007C22.3867 22.7751 22.7807 22.3811 22.7807 21.8951V13.5551C22.7807 13.0691 22.3867 12.6751 21.9007 12.6751Z" fill="black"/>`)}
  </svg>`;
