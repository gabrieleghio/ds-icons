import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderTargetOpticalCross,Medical,Pharmacy40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_7218_352)">
<path d="M19.9955 1V39H13.4229C12.9263 39 12.5201 38.5937 12.5201 38.0972V27.4709H1.90283C1.40627 27.4709 1 27.0646 1 26.5681V13.4319C1 12.9354 1.40627 12.5291 1.90283 12.5291H12.5201V1.90283C12.5201 1.40627 12.9263 1 13.4229 1H19.9955Z" fill="#CC0000"/>
<path d="M38.991 13.4319V26.5681C38.991 27.0646 38.5847 27.4709 38.0881 27.4709H27.4619V38.0972C27.4619 38.5937 27.0556 39 26.559 39H19.9955V1H26.559C27.0556 1 27.4619 1.40627 27.4619 1.90283V12.5291H38.0881C38.5847 12.5291 38.991 12.9354 38.991 13.4319Z" fill="#A60D0D"/>
</g>
<defs>
<clipPath id="clip0_7218_352">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
