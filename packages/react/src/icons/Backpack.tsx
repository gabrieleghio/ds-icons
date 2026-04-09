import React from 'react';
import { Backpack as BackpackDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface BackpackProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Backpack = (props: BackpackProps) => (
  <Icon {...props} definition={BackpackDefinition} />
);
