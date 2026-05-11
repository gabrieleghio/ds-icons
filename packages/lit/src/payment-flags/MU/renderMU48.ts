import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMU48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7ZpPTgIxFId/LaNBUMPKxF3jalyQwMqlwEm4AXIS8AieRPAAjjGasGNWmrgiUcMITGtLZgpoYowLEvv6JZ281+nm65+ZpHkMGZEQlSIOOwqqoYAGnIPdcaB/Gt9f2R7ziEQodrFzrUMB94lnmDfr8Sheyj+K6hg0xHP0BBTqwYOotrEmvs8LKDEGzhhcQSqFqW6vMs27RIDFRcDAOoBa9hxo8TLncA2zkGXdjOVbNgEFsHNtqmr5oD0HxdcprfmZj/qGrdvq3/1c9/0RL08VL0+VoDU7swlPy3Admb7b2G97qnh5qnh5qnh5qnh5qpCWZ0/D7AJPc3wE53l+WcV+21PFy1PFy1OF9h0eHEH9YVzQug1XSWUHrrOYzG3szzxVvDxVvLzlt/+L/8oXPyM/yBP5kcJl5EzamIFFHBJD+zKRywlQyq0tYHxkkkJOV4uruLpkomcqL4sRaNXhjUfd0QmPu/FEJ03dYtDAFFy2TLBRaRj2wraC6ujzUMN22cY5G+h2kyDpZwuOT7eRcFstCvb5AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
