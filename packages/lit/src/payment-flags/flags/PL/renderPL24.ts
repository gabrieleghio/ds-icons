import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderPL24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2166)"/>
<defs>
<pattern id="pattern0_2072_2166" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2166" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2166" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgB7Zo9TsNAEIVnVhCZ/CkVUjqLEzg0lCScJDcIRwlH4CQEGkTl3MCuYokqsogtg+JhFrHIDjVI2ZmvSHaeq29e4sIywjdJkoyCIFgQ0ZTHKXgGe62NMcvxeHzvMrQfWZaFfPGBjyH4T4qIM15C+iW/2WwSkCHuSKuqmpxw63NuPXTpYDCAXq8HvB3wBfaDoiggz3MXhZ1O59bwhYVLhsMh9Pt9r8Qt1scWat0a2bXh78gF3W4XfMYuoMHUNCffGj+E7/btGQSj8lJReamovFRUXioqLxWVl4rKS0XlpYIvZ5fkhnM8Bd95pY+fs/7spaLyUlF5qai8VFReKiovFZWXSku+Br+hg9kg0MoNJe3BZ0pq1kux2RM+unHH3Re8gPrXjo4b67NjrzdolEt0h/EoGr1XGPNDnRDEQMlVGV+YyXa9rYlmHKQgAkrY98aeWq9fPQfR3CAuOI7gf/nz/xkRrQjwKQjqpS3cZp9uiHdz89CnOQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
