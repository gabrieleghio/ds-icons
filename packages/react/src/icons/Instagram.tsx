import React from 'react';
import { Instagram as InstagramDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface InstagramProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Instagram = (props: InstagramProps) => (
  <Icon {...props} definition={InstagramDefinition} />
);
