import React from 'react';
import { SunLight as SunLightDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface SunLightProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SunLight = (props: SunLightProps) => (
  <Icon {...props} definition={SunLightDefinition} />
);
