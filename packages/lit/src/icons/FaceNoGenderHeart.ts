import { renderIcon } from '../renderIcon';
import { FaceNoGenderHeart as FaceNoGenderHeartDefinition } from '@gabrieleghio/icons-core';
import type { IconSize } from '@gabrieleghio/icons-core';

export const renderFaceNoGenderHeart = (
  size: IconSize = 32,
  color = 'currentColor',
  className?: string
) => renderIcon(FaceNoGenderHeartDefinition, size, color, className);
