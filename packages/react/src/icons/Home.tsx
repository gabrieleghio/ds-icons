import React from 'react';
import { Home as HomeDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface HomeProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Home = (props: HomeProps) => (
  <Icon {...props} definition={HomeDefinition} />
);
