import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderDeviceMobilePhone48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M32.2998 3C34.5098 3 36.2998 4.79 36.2998 7V40.6299C36.2998 42.8399 34.5098 44.6299 32.2998 44.6299H15C12.79 44.6299 11 42.8399 11 40.6299V7C11 4.79 12.79 3 15 3H32.2998ZM15 5C13.9 5 13 5.9 13 7V40.6299C13 41.7299 13.9 42.6299 15 42.6299H32.2998C33.3998 42.6299 34.2998 41.7299 34.2998 40.6299V7C34.2998 5.9 33.3998 5 32.2998 5H15ZM23.6504 36.5498C24.6166 36.55 25.4003 37.3335 25.4004 38.2998C25.4004 39.2662 24.6167 40.0496 23.6504 40.0498C22.6839 40.0498 21.9004 39.2663 21.9004 38.2998C21.9005 37.3334 22.684 36.5498 23.6504 36.5498ZM25.0195 7.49023C25.5695 7.49023 26.0195 7.94023 26.0195 8.49023C26.0194 9.04013 25.5695 9.49023 25.0195 9.49023H22.2803C21.7304 9.49023 21.2804 9.04013 21.2803 8.49023C21.2803 7.94023 21.7303 7.49023 22.2803 7.49023H25.0195Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
