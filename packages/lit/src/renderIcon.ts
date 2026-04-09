// packages/lit/src/renderIcon.ts
import { html, svg } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getClosestSize } from '@gabrieleghio/icons-core';
import type { IconDefinition, IconSize } from '@gabrieleghio/icons-core';

export const renderIcon = (
 definition: IconDefinition,
 size: IconSize = 24,
 color: string = 'currentColor',
 className?: string,
) => {

 // — RASTER —
 if (definition.type === 'raster') {
 const availableSizes = Object.keys(definition.variants)
 .map(Number) as IconSize[];

 const closestSize = availableSizes.reduce((prev, curr) =>
 Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev
 );

 const variant = definition.variants[closestSize]!;

 return html`
 <svg
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 viewBox="${variant.viewBox}"
 width="${variant.width}"
 height="${variant.height}"
 class="${className ?? ''}"
 aria-hidden="true"
 focusable="false"
 >
 ${unsafeHTML(variant.content)}
 </svg>
 `;
 }

 // — MULTISIZE —
 if (definition.type === 'multisize') {
 const closestSize = getClosestSize(definition.variants, size);
 const variant = definition.variants[closestSize]!;

 return html`
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="${variant.viewBox}"
 width="${size}"
 height="${size}"
 fill="${color}"
 class="${className ?? ''}"
 aria-hidden="true"
 focusable="false"
 >
 ${unsafeHTML(variant.path)}
 </svg>
 `;
 }

 // — STANDARD —
 return html`
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="${definition.viewBox}"
 width="${size}"
 height="${size}"
 fill="${color}"
 class="${className ?? ''}"
 aria-hidden="true"
 focusable="false"
 >
 ${unsafeHTML(definition.path)}
 </svg>
 `;
};