import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderAE16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1324)"/>
<defs>
<pattern id="pattern0_2072_1324" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1324" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1324" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFmSURBVHgB7ZrBTcNAEEX/2g4gUBBXcnKoAGiAhEqgABRaoAJCCVQSqCDuAJ/iKweQEMQMs7HXSrgg4yjKeuZJY+3s7e3MWtZ6DUpegKO9CCMCBiiiFr2bU2w5CccY98mjmzD2kQExhZhwFuOfeCDvSEEYYpykC/lZyIVvIG7xSN5iF+AsykJc0ZJ4l+MAZUvUodvB1kK8meccH7mbiVnwNmLxkZs5RCHeOgyXssPxzePPagEuAn5U/bqPlrMTLGeDlax2q/vGL8EAglF5qai8VFReKqLlzSziT/ySYzTgi+ADWZZVY217qai8VFReKiovFZWXispLRbR8hJZCRH/Or03eGP9O/XXPS0XlpaLyUlF5qazI+3Hyvj6s/JNL3iCKacDVfnaZlX+HmA54MPbm5W6IaeN7eHP4BGvjJOgDrybHkMudQgZW/NIOFi88/kGZ9nL0DeEaxR3VTUMbiAnHHcc5UBT6B0u8YL7OcK4vAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
