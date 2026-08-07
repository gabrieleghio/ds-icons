import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSocialMediaXTwitter48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M1.114 2L19.265 26.269L1 46H5.111L21.102 28.724L34.022 46H48.011L28.839 20.367L45.84 2H41.729L27.002 17.91L15.103 2H1.114ZM7.159 5.027H13.585L41.964 42.971H35.538L7.159 5.027Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
