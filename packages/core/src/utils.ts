import type { IconSize, MultisizeIconDefinition } from "./types";

export const getClosestSize = (
  variants: MultisizeIconDefinition["variants"],
  size: IconSize,
): IconSize => {

  if (variants[size]) return size;

  const available = Object.keys(variants).map(Number) as IconSize[];
  
  return available.reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev,
  );
};
