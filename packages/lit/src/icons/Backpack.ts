import { renderIcon } from '../renderIcon';
import { Backpack as BackpackDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderBackpack = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(BackpackDefinition, size, color, className);
