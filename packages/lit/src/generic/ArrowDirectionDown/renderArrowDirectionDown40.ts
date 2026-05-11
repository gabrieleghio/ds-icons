import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowDirectionDown40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1596)">
<path d="M20.4875 39.3302C20.2775 39.3302 20.0575 39.2502 19.8975 39.0902C19.5675 38.7602 19.5675 38.2402 19.8975 37.9102L29.5475 28.2602C29.8775 27.9302 30.3975 27.9302 30.7275 28.2602C31.0575 28.5902 31.0575 29.1102 30.7275 29.4402L21.0775 39.0902C20.9175 39.2502 20.6975 39.3302 20.4875 39.3302Z" fill="black"/>
<path d="M20.4875 39.3302C20.2775 39.3302 20.0575 39.2502 19.8975 39.0902L10.2475 29.4402C9.9175 29.1102 9.9175 28.5902 10.2475 28.2602C10.5775 27.9302 11.0975 27.9302 11.4275 28.2602L21.0775 37.9102C21.4075 38.2402 21.4075 38.7602 21.0775 39.0902C20.9175 39.2502 20.6975 39.3302 20.4875 39.3302Z" fill="black"/>
<path d="M20.4875 39.3302C20.0275 39.3302 19.6575 38.9602 19.6575 38.5002V1.83024C19.6575 1.37024 20.0275 1.00024 20.4875 1.00024C20.9475 1.00024 21.3175 1.37024 21.3175 1.83024V38.5002C21.3175 38.9602 20.9475 39.3302 20.4875 39.3302Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1596">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
