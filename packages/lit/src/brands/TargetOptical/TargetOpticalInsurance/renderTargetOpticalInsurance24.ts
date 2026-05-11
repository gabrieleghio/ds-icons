import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderTargetOpticalInsurance24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_6628_814)">
<path d="M3 4.97849V8.65196C3 14.1622 6.39548 19.2852 12 22.2488V2L10.5803 2.79426C8.54992 3.92609 6.31109 4.63596 3.99779 4.87424L3.00496 4.97849H3Z" fill="#CC0000"/>
<path d="M12 2V22.2488C17.6045 19.2901 21 14.1622 21 8.65196V4.97849L20.032 4.87921C17.7038 4.64093 15.4501 3.93105 13.4049 2.78434L12 2Z" fill="#A60D0D"/>
<path d="M10.6498 15.3982C10.5058 15.3982 10.3569 15.3436 10.2477 15.2295L7.54716 12.529C7.32377 12.3056 7.32377 11.9432 7.54716 11.7198C7.77055 11.4964 8.13293 11.4964 8.35632 11.7198L10.6547 14.0182L15.6536 9.0193C15.877 8.79592 16.2394 8.79592 16.4628 9.0193C16.6862 9.24269 16.6862 9.60507 16.4628 9.82846L11.0568 15.2344C10.9476 15.3436 10.7987 15.4032 10.6547 15.4032L10.6498 15.3982Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6628_814">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
