import { renderIcon } from '../renderIcon';
import { OakleyCart as OakleyCartDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderOakleyCart = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(OakleyCartDefinition, size, color, className);
