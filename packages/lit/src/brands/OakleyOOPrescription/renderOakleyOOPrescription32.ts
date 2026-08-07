import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderOakleyOOPrescription32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M18.9554 26.7554H9.2446V24.9109H18.9554V26.7554Z"/>
<path d="M22.8892 21.5108H9.2446V19.6663H22.8892V21.5108Z"/>
<path d="M13.7108 11.8H16.3337V13.6446H13.7108V16.2662H11.8662V13.6446H9.2446V11.8H11.8662V9.17838H13.7108V11.8Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7617 0C18.1823 0.00012343 18.5797 0.164588 18.8773 0.462108L27.6703 9.25648C27.9676 9.55401 28.1323 9.95042 28.1324 10.3707V30.4223C28.1319 31.292 27.4245 31.9997 26.5548 32H5.57768C4.70786 31.9999 4.00059 31.292 4 30.4223V1.57768C4.00014 0.707583 4.70758 0.000138875 5.57768 0H17.7617ZM5.84453 30.1555H26.2892V11.0216H18.0338C17.789 11.0216 17.5542 10.9235 17.3816 10.7521C17.2078 10.5792 17.111 10.3437 17.1108 10.1V1.84453H5.84453V30.1555ZM18.9554 9.17838H24.9849L18.9554 3.14884V9.17838Z"/>`)}
  </svg>`;
