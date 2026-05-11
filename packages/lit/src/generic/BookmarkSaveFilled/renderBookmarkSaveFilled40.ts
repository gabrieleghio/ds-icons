import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M29.3896 2.61206H9.92961C9.46961 2.61206 9.09961 2.98206 9.09961 3.44206V36.5321C9.09961 36.8721 9.29961 37.1721 9.60961 37.3021C9.70961 37.3421 9.81961 37.3621 9.92961 37.3621C10.1496 37.3621 10.3596 37.2821 10.5196 37.1221L19.7096 27.9321L28.7996 37.1221C29.0396 37.3621 29.3996 37.4321 29.7096 37.3021C30.0196 37.1721 30.2296 36.8721 30.2296 36.5321V3.44206C30.2296 2.98206 29.8596 2.61206 29.3996 2.61206H29.3896Z" fill="black"/>`)}
  </svg>`;
