import { renderIcon } from '../renderIcon';
import { ImagePlaceholder as ImagePlaceholderDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderImagePlaceholder = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(ImagePlaceholderDefinition, size, color, className);
