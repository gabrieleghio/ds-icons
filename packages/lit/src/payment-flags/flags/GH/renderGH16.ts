import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderGH16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1720)"/>
<defs>
<pattern id="pattern0_2072_1720" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1720" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1720" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJcSURBVHgB7ZpNaxNBGMf/sy12TRX2Iqi9BC96M4KityTFe8EvYMSTp9RPINabp9SLXqwVvImCV9G8eJOWNr21p6TQN+ilhxbSl830eXabZLfQhJZkls7sLyw7bzn88sw8k1lW4ISS4zhHjUQeEBmqZqAbAlUhUXjaWP/aaSJK9s2ki6GSBJLQHBKuD8HNZhtbdU/+jz1WM0G8hfcD2HsPhn/bY7mg+KgQsGHRRx+adO1DYlc2vTr7HjQSkxatg3xr0DUST2gmzrDPVbCbCLSJNF1ItRpGtNMOkxAhv0yoprc6AnH30d23K7G8qcTyphLLm4rR8mLtL//V9bl1A0p5+xF48wpK2dzulCOLfHkOmCL5yhwiIzL5qU/+naMfFZHIc9RbEa/MRxf9YSiivgFUl4FVun/4Fu57/R54PgHcvws414HUPShh4AnvVxF4NolzU/wMpB+h7yhNeBPjwMy7c33FGz8I8dMoWfM8pVmIp3Q3uJ/H8XgVKFvzLJS8DYy/PHvMj2l6vPIQylCa7WWP/l4zo98oledM342lZShFqXx1pVNO0/T+WfC3t3a/zvJLK740b2PFGX8nWPjuJznOB6ubUIrSgw3v+Sx80f5+ENznIz3VDZKzkmtIHi8ed8aNXoH27B20i/GTHFOJ5U0lljeVWN5UwvKy16HzknNKj+XL7dphE1rjuoGKXLQgRaVdP6TOI1e/GcA+7LYflLemBXIpB2JkEQa9h0fU8OX/HQuz1R2KfpYa6jCDGvl6B+fwC0q5JzmgmYcQKahl8OtMcm4T/wC7gNnyDjcdA/pLpbShAt/YAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
