import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderCF24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1512)"/>
<defs>
<pattern id="pattern0_2072_1512" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1512" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1512" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIDSURBVHgB7Zo9SPtAGMafu1y1y5+/Dg4ZlBQXwUERQXGx1d1VndTVRRdxdtRJF8FRHMRV3KuTo4qILmJBaIcuftXPNuddbdIqlhT1qObuBxfe9+1Lk+f6XBPCEXg4s02INswAJC6yOBSQPN8O7Em0j0AJHIcgfBlnS+teiRSPHfOOOCbFcKCQuoovk5KnwdliipYKyoX/IhxIvcLpDB1zk6gUbjUKP0TEIH5pc3rLj8dXR/FVWuT3BhH5hx+HczHyQOHRqziIRmYZOJmBp9OKArSGC/xryB+yOPGumIDnUpEOUvFBt99EGUINbajM4h/Ufm71sf5jfMZ3lkB9IO8yCo3RWnzVRV7N0n/P6tUxtteVmu5tYbJ6Jcb2ukLS6TT3Etu2oZKTxq7Ans6nI6gkk8n4sbG9rhjxumLE64oRryusb6PXT6z/FlSyg+bAnthaG1RSuC74sbG9rhjxumLE64p5hxcGyBf62H5v2k/sFijltIaHnPOBS6gkky3HZs3rihGvK0a8h+si1Lj8fU7FjW/XS3IPCDUPjxUJxwHlBex5+d29mID78DlA6rnNATd35ZplYYXlGZaZiwlS2o52k3sbKsjyl8CepiyUI9x/YSewTmMJXDGKBH/bmRh6pHChd0jGxT88MQup1mHERDhV3KNal2tSPDiS3MVCnqJH6pUnfQVPJZNITQQ4mwAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
