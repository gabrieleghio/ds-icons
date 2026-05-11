import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderHN48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB7Zq/TgJBEId/uxz+AQoaCzpib6JPoKcvQmNiBz6J2Blt9EHMoS+AiQ8AFRQ2FoDiAessessdCUoMp2Z3vmQvMxNC8mWHySWMQEQtKGKAKpQ6APSxDfEAIeq49G9MZfo8CcoYTwKKyrCfNjLSx4Xf/pA/vm3BDfGINkK555F4BXHxbJ7OBvWEhDWoCTAaAm+9qFLG2qgm6TdeNR9aK9DJ2SWu0T7ZTTq5WU1l9iUNgV1T8NZhNXF5GurJK7btxucRIpFabvs1LO8qLO8qLO8qTsuLTqejoqRUKsF2ut2uibntXcVDCojTRxOrsx38lFV9zyK47V3lz6Z92i29CJ72n/C0XzXLtPQyrc7TPkV42kcJv9s7RCoD7z+g1Pd1QX9XzdL8Fqyn/2RCnvauwvKuwvKuwvKukpTXuys2M/faR/KiYbLwBVYzfo0lqimhxncmDwfAaGBfB2ifsA8Me7OayJwLVIIispMm3NrDa+HqaFvi2n+ebiTqxTw3aJHvoQ6S60l6IVHv5cXX034HhbRRqkGPexS8Oup04cQ7DXp+xQ35kEMAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
