import { renderIcon } from '../renderIcon';
import { SunLight as SunLightDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderSunLight = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(SunLightDefinition, size, color, className);
