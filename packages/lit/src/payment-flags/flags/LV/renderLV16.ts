import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderLV16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1972)"/>
<defs>
<pattern id="pattern0_2072_1972" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1972" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1972" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgB7Zo7bsJAEEBnFsiHipbOSoWoNlwgkJNwA8NJTI6Qk+TTR7iJkg5X0FIRPmInsxFLbBQpVVLszJNsz4zdvP1YsjwIB7LEtkzTpITYB6I+xEeOiJP09eU+FNCfso5N0JgHDhOIn4KcG4zf8+JLftLtzUCGeKCglbuuZ93eEEriF7UanCMCLxGIBSKCLR8f+30oJdA0ozorpqFy6cWNgdjwE+knlDheHwYAkW68qQ0PnUUoXqYysYT9im08C/1nTv3inupfUHmpqLxUVF4qKi8VlZcKzudzCkm73YbYWSwWx1iXvVRUXioqLxXR8nWQAlH1yiD/sDhmrUYDYme52x1j3fNSUXmpqLxUVF4qKi8VlQ8QxM2pn+GvnMeQbL4bdqJk61wpo6khxKeQrvmmHwCiuNaA9/GNSKVuLEBHd5hZ28INTgExASkQzUZv0yszzvMlj8yACwVIgMXZ99aHlQalrGOHaDDlsoX/5e/3Gb/beIs/w8pNxkW+9KVPqZmA9y+ZBpoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
