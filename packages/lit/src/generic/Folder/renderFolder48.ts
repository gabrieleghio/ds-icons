import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFolder48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M43.143 38.3313H4.04297C3.49297 38.3313 3.04297 37.8813 3.04297 37.3313V9.82129C3.04297 9.27129 3.49297 8.82129 4.04297 8.82129H15.373C15.723 8.82129 16.043 9.00129 16.223 9.29129L19.103 13.9513H43.133C43.683 13.9513 44.133 14.4013 44.133 14.9513V37.3313C44.133 37.8813 43.683 38.3313 43.133 38.3313H43.143ZM5.04297 36.3313H42.133V15.9513H18.543C18.193 15.9513 17.873 15.7713 17.693 15.4813L14.813 10.8213H5.04297V36.3313Z"/>`)}
  </svg>`;
