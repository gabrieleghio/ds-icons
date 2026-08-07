import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderSN16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2290)"/>
<defs>
<pattern id="pattern0_2072_2290" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2290" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2290" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB7Zq/btNAHMe/dw4FFYYIlrBURsrGEMpexQ0TUyUWxsATBHgASPMEhQeolAcAiYkJko6wxFmYqDAIaAaIkMqfgGr/+rtacZJWTdTEPrexP1IS586K87nf7+581gn0qVpZSFkBkQUBCzPw5a5E2HwvOZgNsgXERuHrdr1fIg7eq5YJKRp8ZCIETqd8gEOuu7rccRz/X4YofgYwhWE0Wlkzm0HNuodh8fMGsMAvITAtV3MGwsYwMpgWD4QeEXY9r19kYlE+4F8UleCsCxlffM6Q3LsXOZgex/M3+Q0ghCiqtL8RnHUu/L56mrgoR/ysUdsZUv0scNhuvkM9gVQ+qaTySSWVTyqpfFystwhxEpt8c4dQsz1sdeJrgNjka7YvHWf0Y5FXUe9HXH3GFf3pF8knxNkl2F3g0y/g2XtvpO7hW0I5DxQuA9kFXmZe0bPAilz+5WfCndfe2HPaXcKjd6PRf3NbopiLthEiT/u1JYHNlZNdZnNFRC6u0NLny3m/AVRKj0PVK/FyXs9QpK3PqwYwL0mUXh3fBZ7fkrBy+h6oaB3tacKgPikzwkarvBrpx9H+oXfK0ypvdwdyxRzwgtNcTW+DemhFW59XtLu+9JPlwTS2tmSg/oFvdVvexMwIG63yleuCZY8mmxoMy3nj4J5AJ1rTXs35s9SHTbqeTyqpfFJJ5ZNKKp9UUvkAivc5etQctpNc0gy+/fcwz/ylIT+iFkeetoKCf3vcAO7cZYDHPmoj0tBuLLUh6WmGI78BXlShvx2txw3Qw0zsdCLYhOjuITQIHwvftusS1eZPbppVLnKQBFicPLekDv0QVZsOHjeucc19Tnkb+iENrwYJsU5/3Jtq66m66D72pt+TTb/+hAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
