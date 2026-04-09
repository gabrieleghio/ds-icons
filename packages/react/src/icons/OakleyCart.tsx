import React from 'react';
import { OakleyCart as OakleyCartDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface OakleyCartProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const OakleyCart = (props: OakleyCartProps) => (
  <Icon {...props} definition={OakleyCartDefinition} />
);
