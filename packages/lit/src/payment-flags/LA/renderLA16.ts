import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderLA16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1918)"/>
<defs>
<pattern id="pattern0_2072_1918" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1918" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1918" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJsSURBVHgB7Zqxb9NAFId/l0TCTSmyqJCQ0sGw0Sls3YgRYg8zUrIhsbR/SlgYmBqJmeyA5MJUpnpKx1qCICRUZNEkNaXxcc+pgwOixFbvpJ79RVb8Tu+kfPad/XI6hjMc0zRPg+omwBoibEA3GFzG0XkQDLq/mwSOcdOaoOxwwILmCGGvjIltB1+8SP6tUTvIg3hMdAGM0d3Ka6PWToovMwYDJfHRh1AcP8Ax5GEUk+9JUN0qiXmwGSddFeJVzcQJ8lkCubFEG7snDtTjhivaac9TZXN+jblIb3Uk7vsU3X3PpZDPK4V8XmG41eKzqLIM7TkdzU6LYZ9XKlBM+9EGWs0N1NdrMFeq8I/GcPsDbPd20X21C5Uom/NW7Tp6z5+gfmftnzne4BD24474/gZpqJ7zJO683DpXfJq3GuVRvgqUyE+FVhfKpTwaISqQLk9zfFHxGBohLdFPNtLl6eGWhXZTA/n6+hqy8L/nw0UgXd5cWUIWzGvZ+qVBurx/dIws+N+z9UuDdHm3/wlZcPez9UuDdPmsVdu2gmpPujyVrWnvIlV43Z4G8kTz6YuFS1bKoxJXBUrkF63Z3f3BWd4hVKB8MYOKF6re6P1Pr0F6G7j9j2KOf1Ay1JN/bIqVnLyifDFDFgzpYW+M2mzY32Bl6M5XPpmdFwuYeaWQzyuFfEwIveF/xCS/EwfHXG/9gCf0Od8T8vxdHI/FtRmLhPCva3S5IZ+R8BomxjZj7BlzYJk/jZM9BmYhJ3Dwg4fB59slG54/QWiLBg85gMSF7306nyuJaUNitC8vsT1N2W+Sz47QfT80hp2m7/vU8AspJtFOGnEE4gAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
