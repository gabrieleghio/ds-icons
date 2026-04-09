import React from 'react';
import { ApplePay as ApplePayDefinition } from '@gabrieleghio/icons-core';
import { Icon } from '../Icon';
import type { IconSize } from '@gabrieleghio/icons-core';

interface ApplePayProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ApplePay = (props: ApplePayProps) => (
  <Icon {...props} definition={ApplePayDefinition} />
);
