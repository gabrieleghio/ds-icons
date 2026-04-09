import { renderIcon } from '../renderIcon';
import { ApplePay as ApplePayDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderApplePay = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(ApplePayDefinition, size, color, className);
