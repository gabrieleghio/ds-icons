import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderTargetOpticalDocumentPrescriptionRX40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_7468_339)">
<g clip-path="url(#clip1_7468_339)">
<path d="M34.6115 11.9796V39H5V1H23.6318L34.6115 11.9796Z" fill="#D7D8D7"/>
<path d="M28.3107 26.4918H11.31C10.7974 26.4918 10.3779 26.0724 10.3779 25.5597C10.3779 25.0471 10.7974 24.6277 11.31 24.6277H28.3107C28.8234 24.6277 29.2428 25.0471 29.2428 25.5597C29.2428 26.0724 28.8234 26.4918 28.3107 26.4918Z" fill="#343434"/>
<path d="M22.0566 32.6153H11.31C10.7974 32.6153 10.3779 32.1959 10.3779 31.6833C10.3779 31.1706 10.7974 30.7512 11.31 30.7512H22.0566C22.5692 30.7512 22.9887 31.1706 22.9887 31.6833C22.9887 32.1959 22.5692 32.6153 22.0566 32.6153Z" fill="#343434"/>
<path d="M18.8785 12.9117H11.3754C10.8628 12.9117 10.4434 12.4923 10.4434 11.9797C10.4434 11.467 10.8628 11.0476 11.3754 11.0476H18.8785C19.3911 11.0476 19.8105 11.467 19.8105 11.9797C19.8105 12.4923 19.3911 12.9117 18.8785 12.9117Z" fill="#343434"/>
<path d="M14.1904 15.7265V8.23272C14.1904 7.72009 14.6099 7.30066 15.1225 7.30066C15.6351 7.30066 16.0545 7.72009 16.0545 8.23272V15.7358C16.0545 16.2484 15.6351 16.6678 15.1225 16.6678C14.6099 16.6678 14.1904 16.2484 14.1904 15.7358V15.7265Z" fill="#343434"/>
<path d="M34.6115 11.9796H23.6318V1L34.6115 11.9796Z" fill="#B0AEAE"/>
</g>
</g>
<defs>
<clipPath id="clip0_7468_339">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip1_7468_339">
<rect width="29.6115" height="38" fill="white" transform="translate(5 1)"/>
</clipPath>
</defs>`)}
  </svg>`;
