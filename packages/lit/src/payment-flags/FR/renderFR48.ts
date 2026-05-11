import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderFR48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7ZoxT8JAFMf/dxZp6sIoW50MG3F1EFz8FEb9BOpk3HRyxY/gJ0E/gIE4uXGTdTRoAgj2eQVKq4sJVCN975e8y713TZrf9XrTU4gpXZTgeccgqtmshgV4ut9H1nS397AYqq0IjU3zcDOrjMf1Kx9KN+3MRwb8T/kZhmhYr5hHo8dphuJLgK9UodnyqyXHfvVDpMVVEdBFxIdiHsrlMrLGcwqYl5AIPRuv4Udc8l2MThxobf/zaUm5U/F8oZXCmo1I8226AUqpHW0r1eSpVeQZT+t0WtNfl+c/6suA/iFnhchzReS5IvJcEXmuiDxXRJ4rIs8VkeeKyHNF5Lki8lwRea6IPFdEnisizxWRTyDkmfBbbuXpNlkdIM/0wrQ+tTSI7pJ8MImcnYCoGytqREp1Y0GRvnbgug0M3g8Qt6OFfTv0sQhBECBruqMhMqQTdWJqmNMXUFi3BQMedIhWdqPJ5MJ7PjcIzjbsJhzZrI2/h349iJpEdNmjla2KaZvopZ8Xl42fZPEZ4AAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
