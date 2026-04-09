import { renderIcon } from '../renderIcon';
import { Home as HomeDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderHome = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(HomeDefinition, size, color, className);
