import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderKH48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB7ZrNSisxFMf/mUarwr3IhYtwr2hRH8C6UVdWH8OViEu1ig/gI/i9cefCnUv3fiwEQfx4gGoFXbgTBD+njUmmM51RC4LJLJL8IENy5pTwn3NmeqY9BCG5pXbQ5iLACnxVgHmcg2EZpemt0EDkMbeUQ4bugZAcTIexMir+KMrz5UB879qVFcJDgguQp+hdnUgI91p4PmT5IDAGxvh4BapPwVropXSOgnjFyMlr5SML4xCBFAHlNz2qz6FxxOPH/sjJa4bRJANb8JJnDUr1L0nq82AxTrytOPG2Qk7QwcJFBzIwnTtUorlLe1vRLr6T3eLv3s4n+8XuZjQ+IvzF53STSuSzhWE5VPv+lNTS/vfiglI/FVBo5vHyOph0/Uuk8p/QzmmL2YX/Y+ycTtwDz1a0pf2v7Q00DeXR1tMd2Rqlc9we90fpCG/Hp3gYn4YOtESeDualcBU0DQ7IoQMt4ltnp6CSluIkdKCltu/88PQOSaR0Axr535D/UIGr7Ws48arQWZM3ekf4CcrEp1GTq95Dmfi0anKV+7hfcmxF+1tdWrBv/tvEYnOCvvX6mrbDePz7aOq+523FibcVJ74Og9kk9Qnx+9Gq+gKjqb7GV2dcPDuon3yuXQDTMqDWiBR2YwWmFSI7LzP0zLI+vCuUZno8lOfvZUeiaMyzASG84o+JabIglg2Jsi+vH+mSxn22z7c5hO8vy4Bz3gGRi6ojInRj5QAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
