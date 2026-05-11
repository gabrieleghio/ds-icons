import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderTargetOpticalInsurance16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_6628_808)">
<path d="M2 3.05933V5.59917C2 9.40892 4.34763 12.951 8.2226 15V1L7.24099 1.54915C5.83721 2.3317 4.28929 2.82251 2.68988 2.98725L2.00343 3.05933H2Z" fill="#CC0000"/>
<path d="M8.2226 1V15C12.0976 12.9544 14.4452 9.40892 14.4452 5.59917V3.05933L13.7759 2.99068C12.1662 2.82594 10.608 2.33513 9.19392 1.54229L8.2226 1Z" fill="#A60D0D"/>
<path d="M7.28904 10.2635C7.18951 10.2635 7.08654 10.2258 7.01103 10.1468L5.14391 8.27973C4.98946 8.12528 4.98946 7.87472 5.14391 7.72027C5.29836 7.56583 5.54891 7.56583 5.70336 7.72027L7.29247 9.30939L10.7487 5.85315C10.9032 5.6987 11.1537 5.6987 11.3082 5.85315C11.4626 6.0076 11.4626 6.25815 11.3082 6.4126L7.57048 10.1503C7.49497 10.2258 7.39201 10.267 7.29247 10.267L7.28904 10.2635Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6628_808">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
