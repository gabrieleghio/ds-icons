import React from 'react';
import { FaceNoGenderHeart as FaceNoGenderHeartDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface FaceNoGenderHeartProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FaceNoGenderHeart = (props: FaceNoGenderHeartProps) => (
  <Icon {...props} definition={FaceNoGenderHeartDefinition} />
);
