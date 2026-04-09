import type { IconSize } from "@gabrieleghio/icons-core";
import type React from "react";

export interface IconComponentProps {
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export type IconComponent = React.ComponentType<IconComponentProps>;
