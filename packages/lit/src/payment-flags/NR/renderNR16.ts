import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderNR16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2122)"/>
<defs>
<pattern id="pattern0_2072_2122" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2122" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2122" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJsSURBVHgB7Zo9bxMxGMf/dq80A4UMSBR16LVZwtTrQjdIKB8g/QJNPgBSIl6EmGAFCSkgJibSL1AJPkBDN7o0bCxVrxIFBoYgGKDcnbF93KWJ6ItUp7Hs+ymO/Lb8/Dzns04mSHAbeVCnDoISb5VgGgwdENrE9tNW0kXkv/vABQ3WQYgL42E+QqcM/4kfy8/d3bFDPEEsQLjgoHC/xhtu2k8neD6M80JgDIzxEgDRr38dhGf6WMMBYXX+PMTQHC/jMA4RSBFQRPy3n/TdoFzcSydRB0ZDzx1slWj/qEGp/l/6/SgsJpO3lUzeVjJ5W8nkbSWTt5VM3laslief36afMnDlEozny7dePUt7WyEo3EvTHs4kjCf4kVaHFnmveBm6MxR5d/oi1leryE/moDNDka8ue8hfyKFRXYTOKJcXUa8tz8t6fWVR6+grlxdRd6fzsi6i/+j2dejKqXb70rUZVJaKmOHR9q5OSdnDIt35+BX+py52977j9doH2R4Jqnb79uYuF55A5VZRRvuoFPeKU3KemD8y8QFOnfa1h2/QWuucaK6YJ+brgpJn/iQLoJu4QNmG12y9P3L88csN6IYy+WSHP4x5DU98yuTFbn+QwU1t9pjFGQXK5JPItjd9lFdaWKi8wuzSC9mW4wOLowPKbiOI97eQFq+/BH+vy/tW5XlAnPZ0Y+CQcx5mX1DgqsHPtCXSvp22kvsqphL96dUZtigYe9cb3I8LYzAK4RP9jksCYc9JfPNybMuye3g72H42R+E3u4jCMl8dH1bAxcPwpqj1726FOzUwKu7fejhbzuI5a3OvDQRBUwac8xeAxbEDbYpzKQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
