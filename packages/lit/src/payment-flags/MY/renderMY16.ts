import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMY16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2074)"/>
<defs>
<pattern id="pattern0_2072_2074" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2074" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2074" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgB7Zo9jxJBHMafQZREICExJrCNYOG1mLOyESw0Jp6xN+p22p3GL3B+AONZ+VJ5NjYml6iFV4EWVp5cezaLDYQYkwuvkYJ1/nALAzm4WRJmX9hfstmdYYE8O888/IcMwxA9AfTWATMHsBwUsoN3UMAePzavA1tWBxuc9DQXXuAXaTiAIvEW5R6Qv8HPoUHbOeEOkOaiC9tAIgzc1TEm/CQ/eLdlCgVcM00sEpN/frvdRr1et7rSvO8RfwhsfXTbKQzEqxOuAsYYotEoYrGY2HeFbJ8d3XYCfoYegEAuPP6y3Ijra/u4z4/shb9IxP/hoBHB3q8zePtpBVv8sEuJqXPaH+Gaf+s9YcKdnvnGtNbA9rMvfdHTKFfiyD+41T/L8hOvoApRfEj2TSS88PrjTOHifXR2O2HZG48SVPyh4embS33Lk/Xn5eKC016kWq0Or6XE0xyfFE5zW9/Iw8tI2Z7CTYTm8wYfca8jNfKT87y4q80MNHN3FGBs9SGOw6m0lxp5+jkT+W0jyd2MlPjJMDvngSSXQcr2lOa51cqwfTtn4HH88tSEl7G6iFNpLzXyk1VbIt7F8yff4XWkxFPZSqMvQj9/pfcfxhzhNaTLWzuVm90S1/Xlrawgcojd2t4ppMtbggRl1u4MVnU3+apuRVjV7fNV3ef5VnVOYWtVtyhM8yVUYTvt/cpSi7c15xeFq2t7v+KKkVfCEe5ilUplmPapVAp+J0j7Q/xr+2krRaGf7fCm1TgL/xOk/SH+sf0ctUKQ9suKd20/7/9+QdoPCGzvCRaw8htL+2Qy2d/C4Vd6vR5qtdqwTbYvWo1mswk/0+l0xGYpZJrmV6tF4lutVn/3kp8gPY1GQ9yNRQ5/wQzDSEQikRKWZx8eYWiadj6UyWQO+FOgXQZlLAcG13uVLsbSjZd+OrcI7cvLQi0q5lmRa/vW7XY3acCp4z8U4Q+yKhzmJwAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
