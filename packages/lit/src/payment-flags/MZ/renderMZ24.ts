import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMZ24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2076)"/>
<defs>
<pattern id="pattern0_2072_2076" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2076" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2076" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR9SURBVHgB5ZpfbFNVHMe/997dbZj9qUCZtJsroLiBgWEC6oMJI/rgiw9g0DhnNt80kRFM3Iua+IY+mDHiJLiEP8MHcDNRfB0DMTEaExiJqFlkrYw2c6PrWmm7rvcez+/e3XnbdevtBnJ7+SRn95zTkyXf8/tzzv21AgwOtrkQVzvA2G4Iwm44j6u8deH46VPGhEB/htDge/3V7UO3qsp8cD5+iGIzjp306+LlxtF/SiXfySYPBrY+ggcAP1LiDmFQbmgTIZwwZr970ovjz9YjVibDMTAGpBUglTLPfiS1S+tIuGbuCkHCzok4Xhy5jQsbV/MNKIEjELiDS6LeV9W5OQaBuzwz1qwRZMwt0YT37KpD37b1cAzkAfHE/FA0f2YeVM6k0Xl5FJ0/jGp9RyAIGUMx3/rW4RD6zw7DE0vCaeQVT3hjMxg4ew2t10JwEpbEE04MA8viDZwUBgWLJ5wSBhlHnVso/GKz5p0WuN9/C5KrEsVAKPSfwZZleTO3j36JP3ftRyoQRLGxYvHELBd+g29A+OgZFBOW3F72pvDQM3cwPfAw8tGnTKBH+RsxKLA7lizv7hiH+8C4laVoldzolx+HB/Z/McornqxevW8Kcq3+tIJXKMVA6Wa+EWthZ5YU36OMY/B5//yYrP87S2jz+aiEhE7Jw9t6rW9HFogXKxWUNSYg7p3AZc8k3v4iiVNf6Z9dn06hPX0D5ysmoTwd1dbmw85hkJHwGjvCWnwbRKLAnv3A8K/Ah4eA7l7AVQUM8s3w1eprktfLEXhtE9TY0talBEge06dMwi4syPaeT25mxLZ5A0iwWfjsmIxAyyb+LIVV7HQaLHD74Ht1mDhSMz8O3NQb4R8DLv2o95cjnKAw6C6phx3IWaea7K7RsnugYUqzOrn6hXNA+7vAm4d04c+d3gw1WngiO8Pd/jPV2rF5r1k025MwEmvE+Pat+gbQs7N3FpFpFESUKfhYCeIwbzFmjwvQohXKsi0JfN2r940YNzyAwqC8hW9QDJa4xfRTIshSsBOLWn5VY1ITTS18Yi3PBbWau9MGkPUpLKzwjTKFl9MjthNO5LS8VKVA5C3C7/IU/0ZSi/9Ugeq9U3DtC6N8SxIzv61a9B+Tm3+u2utoyybniw1daaVqhZ/hucWR1WkNbUYuyM0PpAP4gyVgZ1ZczMiG3Pywev+TmpBVps655m6JF3klZx2v6FBlx86YKzl35fsoud6DR/u7UL7tCRQTK67kuN54CY/9fM4GwlnBbUVuX/NBEKvb7JvNcxEyXS6X5faU6WuPBfhxZ+9sno+CxVe8EIWXv/nRPaDYKUh8Mbr5UlgS7xQ3zyaveCe5eTYZ4ukHG+azz2lurrLMMWm9aAwSc1dScvMN50ccJZxIZEbtFVFl7JIxipPtn4rB9+2Io+KbfoMUu8PfNE31B0nCEWEITS7IM1f42Oc+OA7XK2E4HcYwWrcTG8VmXI1AYs2eT//yPyjCS0qwh/oZ731jv6CNPzp4a8L/C8O95yIX/n26BF0bdiBCE/8CNQnTQoiNK00AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
