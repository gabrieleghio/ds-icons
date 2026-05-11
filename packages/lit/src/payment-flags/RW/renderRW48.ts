import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderRW48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7ZrPaxNBFMe/bxuTukUIiGhFcRG9FKQRqiAeTEUETwpS9CQF/4BYvHvQsyR6FQ/2VrwUL4KXVkGEIKQiFsRCo4il2MJCaZqm2Z3ObLrbTWmbpNDC/PhAsvPebgKfeW93k2UIIflSGlY9B8ayPMpCPaZAVgG5gTdhgoL3/BcH1DXBRw7UpwzmDWLkSrkhXyjOQg/xED4Bhy4mkC8OIy7e3QOkbN4TFpSB+UCtCqwshRmHJx4lQJTjexupw0ca4qohCim8xCRUlzdydI1nWSY6KNkNpUn1xKNsc29L2OpnUn8xc+Eq+u3p1gcTNYXSn9hPegvBBDw4+hadIr18v/0j2N5Of0CnSCkvWvz56af4FWt3Uf2vfbfw2nkMh4/bgfg9nkVR+jhkQEjvJvh79RTOff+8/U53PhpKWfkbP8cwujCEb5W+pnyZS7+cf4i7M6/a+h4pKx8n7AIxEQPT71t/QPbKx3nn3gy2W7ugHaSXH10cCtr92b8RdEoCkiMqfn6ni1sLFPr30jlGXleMvK7QnwlEP3J6j0F55v5vjk3b64qR1xUjrytGXleMvK5I/zAjhO3hODp573IUd9lJqI5XqUVjc87ripHXFSMfwdq9YUjKFj2LgU2GgV/3oTLM8+JRySJGH6NwzQOr85diHSB8hJtf25T3Gb0g504mvZpKlkijdXi8tLNzY8WzVnl8ymVkDTKxME8DhDj3vS7GTcuTTty/NGz5yIEog4Nl388zcW0jok+Vql1wxyddkVsHvWCwEtESZGkAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
