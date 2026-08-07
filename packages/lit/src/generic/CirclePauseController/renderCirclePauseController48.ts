import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderCirclePauseController48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M24 47C11.32 47 1 36.68 1 24C1 11.32 11.32 1 24 1C36.68 1 47 11.32 47 24C47 36.68 36.68 47 24 47ZM24 3C12.42 3 3 12.42 3 24C3 35.58 12.42 45 24 45C35.58 45 45 35.58 45 24C45 12.42 35.58 3 24 3Z"/>
<path d="M18.5 36.17C17.95 36.17 17.5 35.72 17.5 35.17V12.83C17.5 12.28 17.95 11.83 18.5 11.83C19.05 11.83 19.5 12.28 19.5 12.83V35.17C19.5 35.72 19.05 36.17 18.5 36.17Z"/>
<path d="M29.5 36.17C28.95 36.17 28.5 35.72 28.5 35.17V12.83C28.5 12.28 28.95 11.83 29.5 11.83C30.05 11.83 30.5 12.28 30.5 12.83V35.17C30.5 35.72 30.05 36.17 29.5 36.17Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
