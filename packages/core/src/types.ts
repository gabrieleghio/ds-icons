export type IconSize = 16 | 20 | 24 | 32 | 40 | 48;

export type RasterVariant = {
 viewBox: string;
 width: number;
 height: number;
 content: string;
};

export interface StandardIconDefinition {
  type: "standard";
  viewBox: string;
  path: string;
}

export interface MultisizeIconDefinition {
  type: "multisize";
  variants: Partial<Record<IconSize, { viewBox: string; path: string }>>;
}

export type RasterIconDefinition = {
 type: 'raster';
 variants: Partial<Record<IconSize, RasterVariant>>;
};

export type IconDefinition = StandardIconDefinition | MultisizeIconDefinition | RasterIconDefinition;
