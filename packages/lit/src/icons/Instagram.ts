import { renderIcon } from '../renderIcon';
import { Instagram as InstagramDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderInstagram = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(InstagramDefinition, size, color, className);
