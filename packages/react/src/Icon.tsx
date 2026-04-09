import React from "react";
import type { IconDefinition, IconSize } from "@gabrieleghio/icons-core";
import { getClosestSize } from "@gabrieleghio/icons-core";

interface IconProps {
  definition: IconDefinition;
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  definition,
  size = 32,
  color = "currentColor",
  className,
  style,
}: IconProps) => {
  let viewBox: string;
  let pathContent: string;

  if (definition.type === "raster") {
    const availableSizes = Object.keys(definition.variants).map(
      Number,
    ) as IconSize[];

    const closestSize = availableSizes.reduce((prev, curr) =>
      Math.abs(curr - (size ?? 24)) < Math.abs(prev - (size ?? 24))
        ? curr
        : prev,
    );

    const variant = definition.variants[closestSize]!;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={variant.viewBox}
        width={variant.width}
        height={variant.height}
        className={className}
        aria-hidden="true"
        focusable="false"
        // Il contenuto SVG proviene dal core e non da input utente.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: variant.content }}
      />
    );
  }

  if (definition.type === "standard") {
    viewBox = definition.viewBox;
    pathContent = definition.path;
  } else {
    const closestSize = getClosestSize(definition.variants, size);
    viewBox = definition.variants[closestSize]!.viewBox;
    pathContent = definition.variants[closestSize]!.path;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={color}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
      // Il path SVG proviene dal core, ottimizzato con SVGO e non da input utente.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: pathContent }}
    />
  );
};
