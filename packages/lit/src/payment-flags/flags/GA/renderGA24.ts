import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderGA24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1692)"/>
<defs>
<pattern id="pattern0_2072_1692" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1692" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1692" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7ZexTsJQFIb/cykUEwcGHdwan6A8geBuIgOJI5tuqO9hwNFNVxeNzkb0BeAN6GDioAODilLa463aQkkcdbjnfkNzzn+bNN/pbXJLSOlsV8ClNohruqvBPAZg6uLw/CwN6Ova2fGA6FZXHswnAMI6Di6DH/nmEDLEUwI9gKqDo2YL8+LlIuAW9J4gGAMzMImAcZgmHmJnX0FxO7tpSYuXHbPEExIf1/l2S1G0ofSKnwWlAozGdea7msotmvbGF1nwUxCMlZeKlZeKlZeKaHl6uAGnzdoqjOfxaVbbbS8VKy8VKy8VKy8VKy8VKy8V0fIODIVBv+QzqLp7nfXF5RWYTvjynNX2m5eKlZeKlZeKlZdKXp5jGA1zrlX6FNhLmyh8h8nE0zk/Rl8x4rtscfKmBzDWAzJrByQ+UeL28TrLCnRMfuuiQm6hr4/5HuQw7J9sravBaWPEFNX1LALIYMg03UyK3H+fv3fVAlNbhz7+F8Yfox/Q07b3KE+7g25jlGSfJlVm6s7vvTIAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
