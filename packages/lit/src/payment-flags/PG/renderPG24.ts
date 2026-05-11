import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderPG24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2148)"/>
<defs>
<pattern id="pattern0_2072_2148" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2148" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2148" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ+SURBVHgB5Zq5b9NQHMe/zuX0SJtKUEpBIkhcK4WBioFUggUQEhMsIKQGwcYEElPpXxBGhlbAgMSMQAiQaMLSBRHWCgR06CEKlB5pk+Yw7+fUrYkS5z37uQ3mIz05duzG3/d+Z20F64xFo9FirvUWoMTZbhxeQ8FHRcP907mpx5uHKsQeqbvG9iiBGDwOE/zNj9LAQG72myH+Kxuxq4EOXAlE4HX0CQhnj5L4a2w8NL44oARxX92JvUoAXqHMRh4alrWy6Zg27EdFeI9x8Bc7nCqtIgIfDvtC8AK0wsF1Dy9sHFP0I1q9iy7423A72IWI4oMXIKE/tNLGvqWqZ6UsLuVnMa0V0Szsur4AuyhV+w2XlISfzU3jQcH+j8qChHcn5N0Htz0/KC7gUm77rEC2cMLS52vRy7LAzUAnLgTa4AYksJFpl5Z8yH0KYv55O+ZfiN3HnMnnKdrfgwBLLBuMlVd1CzjuC0NVFMgk+yGsb9uP5eue41M1hHaX0HFqFV3nsyjMBJCfDIKHFdNaC4s3mNAKeFVawYC/RXo24JkAA3+kjOiZFdAaGNdZIUU8QVbwpLikfz7ub/zDIohMANHWl+eaAGniDd6X8xhjhdFJNgF2rcDHVlCNFRA5kdNXk8bCm4o/i0xA9oOqu0E9zOKFA54VdoPhjstLeqAjwWbWmAgSE9pd1IXxQNd8vtKjB8VamAOeVPEGIpWhGylsOtmFn09rN2hzvBWeXXgrQzeEE52nVrjOc61ob1QZuiWcCB8scJ3nitlXc1gJIanu0GOCCF3nltHNJolyej0m7+zEYroFvLju87VwUhlaVX0U2CYu9tYNcNU4qvDs4qQypNz9m5Wx/vYyWg79bdJU7an7ChtpsRHS8vzQ0BBSqZT+OZ1Oc11jtzIsLfuw+K6V5XA/wofWWFrcFKHGiqzWD3GVuNLyvKaZ/pCNGp/c4GawE3aodgVe85dm9iQ4Ho9jeHh4wwJEcFIZVrsCr/m7VuHZxWmbbM4KjaL/tkR7Hpz+z5BcgUplK/NvWvEEWcGI2i1cExhQH0ABcTHdWvN7YZ8Xjep2soCB0zaZsoJV1Bf2edGo7jQLGNitDK0Qbmwompu3ss+vx4S2hkT+O54Vs3CDpvP5esh6gNLUAc8Kp8GQcL2fdwvZD1CkiU8kEhgfH8fg4CDcRtYDFGlmT8IN+vv7sRWQ+d9Yrwx5c4orLS2ltL6+PoyMjCCTyWAroJogxdrkGWYBxzjbZFda2mQyidHR0S0TbsZok+OsTe5okA2apqV1A2qQbrA2ud7dSIv2sooZmVAwvMyC4RRHMPyn8rwItYJh9ZsZ5PNxNmLwGLWCYY656Zqx1pqWIfH74cWXDtcxguEJNgHmsMRi1F3aRlF5D0/z+rga6NBeh/ew0fvFPEGx/2UCjiihLy/DPTHU4BobmW24qfIWjLeo1DRRQ+wfbXa6bzIeG2IAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
