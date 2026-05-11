import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderGN48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgB7do/T8JAGMfx39UCFU3sYqLRoY5uxjcgOJi4uTirrwBnJ3wH+BJcnVxcXKqjk74DuvgncdEBqK3lvAMvlMWBVoN9nk9yhHsW8uWg0wl8813X/QyrDUDU1LaGDNavHpG31bt9ZCLxACFaOLk4NyOhX3xnyUsw40vAQw6mMn4kQBTX0bwMLL3LM/wf8FAu+Wjuufa1s3KYDp8TAg4sWJjc8iLytzCLiUlVGCVAGJuJh5J9bAmJhpnMq/BqxvCppLpQsYdrNNyy1L9+w2wrxcsel44XqI3VFjx9+AtIKXzvTzieKo6niuOp4niqOJ4qjqeK46nieKo4niqOp4rjqeJ4qjieKo6niuOp4nijj4LTd3NSdPyN2fRkwfPjJL27V/Hy1uy6kOiqb6cPiULRJ/4Rq9ONU0NxZtthuRU70YGA8PSoo9I7GdufX5G/9x5y1NY3Ma06grcE/bqEDEBDG1G8rd8MHni74UuwEz6tqQM/GtxR/Xvy15eUvlqnKnxTXz3VH/oFDUeDrvnH3ooAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
