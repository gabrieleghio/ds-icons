import React from 'react';
import { ImagePlaceholder as ImagePlaceholderDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface ImagePlaceholderProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImagePlaceholder = (props: ImagePlaceholderProps) => (
  <Icon {...props} definition={ImagePlaceholderDefinition} />
);
