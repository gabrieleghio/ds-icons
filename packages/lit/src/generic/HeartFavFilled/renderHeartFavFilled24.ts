import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderHeartFavFilled24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1177)">
<path d="M22.501 6.13285C22.196 5.40285 21.761 4.74285 21.201 4.18285C20.641 3.62285 19.986 3.18285 19.251 2.88285C17.786 2.27785 16.121 2.27785 14.656 2.88285C13.926 3.18785 13.271 3.62285 12.706 4.18285L12.001 4.88785L11.291 4.18285C10.156 3.04785 8.65102 2.42285 7.04602 2.42285C5.44102 2.42285 3.93602 3.04785 2.80102 4.18285C1.66602 5.31785 1.04102 6.82285 1.04102 8.42785C1.04102 10.0329 1.66602 11.5379 2.80102 12.6729L11.646 21.5179C11.746 21.6179 11.871 21.6629 12.001 21.6629C12.131 21.6629 12.256 21.6129 12.356 21.5179L21.201 12.6729C21.761 12.1129 22.201 11.4579 22.501 10.7229C22.806 9.99285 22.961 9.21785 22.961 8.42285C22.961 7.62785 22.806 6.85785 22.501 6.12285V6.13285Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1177">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
