import React from 'react';
import type { IconProps } from '../../types';

export const ExportTemplate32 = ({
  color = 'currentColor',
  className,
  style,
}: IconProps) => (
  <svg viewBox="0 0 32 32" width={32} height={32}
       fill={color} className={className} style={style} aria-hidden="true" focusable="false">
    <path d="M2.82977 29.7199C2.37977 29.7199 2.00977 29.3499 2.00977 28.8999V2.17986C2.00977 1.72986 2.37977 1.35986 2.82977 1.35986H29.5498C29.9998 1.35986 30.3698 1.72986 30.3698 2.17986V28.8999C30.3698 29.3499 29.9998 29.7199 29.5498 29.7199H2.82977ZM13.3498 28.1299L28.7898 28.0799L28.7398 13.0199L13.3498 13.0699V28.1299ZM3.64977 28.1299L11.7698 28.0799L11.7198 13.0199L3.64977 13.0699V28.1299ZM3.64977 11.4899L28.7898 11.4399L28.7398 2.93986L3.64977 2.98986V11.4899Z" fill="black"/>
  </svg>
);
