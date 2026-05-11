import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderOakleyOOPrescription24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M14.2165 20.0666H6.93345V18.6832H14.2165V20.0666Z" fill="black"/>
<path d="M17.1669 16.1331H6.93345V14.7497H17.1669V16.1331Z" fill="black"/>
<path d="M10.2831 8.85002H12.2503V10.2334H10.2831V12.1997H8.89969V10.2334H6.93345V8.85002H8.89969V6.88378H10.2831V8.85002Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3213 0C13.6367 9.25729e-05 13.9347 0.123441 14.158 0.346581L20.7528 6.94236C20.9757 7.16551 21.0992 7.46282 21.0993 7.77806V22.8167C21.0989 23.469 20.5684 23.9998 19.9161 24H4.18326C3.53089 23.9999 3.00044 23.469 3 22.8167V1.18326C3.0001 0.530688 3.53069 0.000104156 4.18326 0H13.3213ZM4.38339 22.6166H19.7169V8.2662H13.5253C13.3417 8.2662 13.1656 8.19265 13.0362 8.06411C12.9059 7.93439 12.8332 7.75778 12.8331 7.57499V1.3834H4.38339V22.6166ZM14.2165 6.88378H18.7387L14.2165 2.36163V6.88378Z" fill="black"/>`)}
  </svg>`;
