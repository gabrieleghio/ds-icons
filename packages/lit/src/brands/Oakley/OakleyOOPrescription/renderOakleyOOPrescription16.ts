import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderOakleyOOPrescription16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M9.47769 13.3777H4.6223V12.4554H9.47769V13.3777Z" fill="black"/>
<path d="M11.4446 10.7554H4.6223V9.83314H11.4446V10.7554Z" fill="black"/>
<path d="M6.85539 5.90001H8.16686V6.82228H6.85539V8.1331H5.93312V6.82228H4.6223V5.90001H5.93312V4.58919H6.85539V5.90001Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.88085 0C9.09114 6.17152e-05 9.28983 0.0822938 9.43864 0.231054L13.8352 4.62824C13.9838 4.77701 14.0661 4.97521 14.0662 5.18537V15.2112C14.0659 15.646 13.7122 15.9999 13.2774 16H2.78884C2.35393 15.9999 2.00029 15.646 2 15.2112V0.788838C2.00007 0.353792 2.35379 6.94373e-05 2.78884 0H8.88085ZM2.92226 15.0777H13.1446V5.5108H9.01688C8.89449 5.5108 8.77708 5.46177 8.6908 5.37607C8.60392 5.28959 8.55549 5.17185 8.55542 5.04999V0.922263H2.92226V15.0777ZM9.47769 4.58919H12.4925L9.47769 1.57442V4.58919Z" fill="black"/>`)}
  </svg>`;
