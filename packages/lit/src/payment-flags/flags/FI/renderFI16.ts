import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderFI16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1672)"/>
<defs>
<pattern id="pattern0_2072_1672" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1672" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1672" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgB7ZpNTsJQEICnL0gJUOKWrtoDmBg9gOjGY6gnQBcuTTQeQLyBHsMVegADNyirsjWUn4AJdYbwmoeJATSh0pkvAd5MX0K+16Ghr2PBnCAIdguFQj2O4xqGNVgT9/Rh6Zzw5QrSAr3aSqlGtVp91jlFb91u17Ntu4UTbuEX4tuAZVn76PcUhmFAvpSbyWOyiR8e8MAjX6r0HK7COQaePuI4DpRKJVopWIsdZ+kULDlIA/SD4XAIvV5Pp7x8Pn+p8EBdZyqVCpTL5fXF/znkQyeU3IzcEZX9vk4Ui0XIMrQABjVlRlk749/Bq/1iDIwRea6IPFdEnisizxWR54oFe9dxEq1wW7r1fEbJUMqeKyLPFZHnCmv5HDAh2Z40tiktfIKR/Mn5y766dXi/dE78fgNpg88pkrH85rki8lwRea6IPFdEnisir6HelSwznU4XYpJ/1UG/34csMxqNzLBFDUlvOiL5wWCQuQognyiKzG4sasF5zE0mk4Zt22cw78OjCeaklTH2w3/CvJ1MmYA6MZXv+x+4CseY6AAPAvQ9ocHsgoer0HFd18fkBYZt2DzxBl5NLP+78Xh8QL70pV+AuqjyAGvzOwAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
