import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderShoppingBag48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M40.8257 13.05C40.7757 12.54 40.3457 12.16 39.8357 12.16H32.2257V11.15C32.2257 6.66 28.5657 3 24.0757 3C19.5857 3 15.9257 6.66 15.9257 11.15V12.16H8.31566C7.80566 12.16 7.37566 12.55 7.32566 13.05L4.00566 44C3.97566 44.28 4.06566 44.56 4.25566 44.77C4.44566 44.98 4.71566 45.1 4.99566 45.1H43.1557C43.4357 45.1 43.7057 44.98 43.8957 44.77C44.0857 44.56 44.1757 44.28 44.1457 44L40.8257 13.05ZM17.9257 11.15C17.9257 7.76 20.6857 5 24.0757 5C27.4657 5 30.2257 7.76 30.2257 11.15V12.16H17.9257V11.15ZM6.11566 43.1L9.21566 14.15H15.9257V19.57C15.9257 20.12 16.3757 20.57 16.9257 20.57C17.4757 20.57 17.9257 20.12 17.9257 19.57V14.15H30.2257V19.57C30.2257 20.12 30.6757 20.57 31.2257 20.57C31.7757 20.57 32.2257 20.12 32.2257 19.57V14.15H38.9357L42.0357 43.1H6.11566Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
