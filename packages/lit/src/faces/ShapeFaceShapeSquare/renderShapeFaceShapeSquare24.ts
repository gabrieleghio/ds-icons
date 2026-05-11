import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeSquare24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M21.668 1.81006C21.9855 1.81021 22.248 2.07261 22.248 2.39014V21.3901C22.2479 21.7075 21.9854 21.9701 21.668 21.9702H2.66797C2.35045 21.9702 2.08804 21.7076 2.08789 21.3901V2.39014C2.08789 2.07252 2.35035 1.81006 2.66797 1.81006H21.668ZM3.31738 2.97021C3.27528 2.97035 3.24818 2.99745 3.24805 3.03955V20.7397C3.24805 20.782 3.27517 20.8099 3.31738 20.8101H21.0176C21.06 20.8101 21.0879 20.7821 21.0879 20.7397V3.03955C21.0878 2.99734 21.0599 2.97021 21.0176 2.97021H3.31738Z" fill="black"/>`)}
  </svg>`;
