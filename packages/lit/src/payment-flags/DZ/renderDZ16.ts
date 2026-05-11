import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderDZ16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1630)"/>
<defs>
<pattern id="pattern0_2072_1630" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1630" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1630" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARPSURBVHgB7ZrPTxRJFMe/3TPd7NDDLgIS4WBmh0S4kLBGE5JNdkGSvS3saZNVk92NbqKXlZOJ8eKPP8DBi8bEgxe5OhyMB3XkKiYS9YKJNFED/hqV+enMwLT1auhJgz0GreqGDH6Sgq6qEOb73puqV69awQp9o380A+VjgDLAugPwmOvHL8BPLMuaVlU11tHRccUeU+gHEx5h0wn2GIFP+C3ewZyiKIPMCHNqpe+v8A0mwqIgYZpmc7Bv9Pd/4BAe0DUoWgDMOvASZnn4BROLXC6HVCplD0V0XR9lnleP2SOBBg2qHvRcuN+QHsMwEA6HnWO/Utj32QNqMIB6hgzgYEBdNVtnHl8LW+1X97GF2dLig/AQo7SMoWfvEV0soDeZ5X2jVOZzyZk/EejsRMPgIPS9e/mz33ginkQOz77FyGyyKnYtSzMzvBUSCd4PDQ/DOHrUVyNIFz/8JIn9j1/XFF2L/MQEivfuwThyBKGREfiBVPF/zbzGftZqkQ2quLlzGx61NuLcmUtVL1vpNEorkUBGKM/P8yjwGmniPyecRE90tSIebUVWq6yxzvBWmpqg79nDW+OBA5Wvw+3baNi3D14iRTwtarWEvwppOPFzBK8aNayXYHc3b14jLL49V/ys8P8Huqre3mwIfyoS3p4rfTJue3yzCieEPhl5fejZouvc1e7tXxTqG4GQ+N5kznWcvH5rZzNkk70gtwAiJL5/Ie06Hmcru2woB8hcvMh/y0Is7PNF13Hz+wbIxva6TO8Liaec3Y3ZH76DLIpTU3h36FDV4/Tb2RfBk6U4q8kpilCYvzt8+BOhtgEyglEgJL6WSDrYyCDM8vxtly9DY5mfE+rTeFgwBRYU7/7nbvv+10IpbwsTqq8YQFvTF0FI/INWw3W8/0UasrEPOmGJBx4h8bVW9f4XKciGPE0GkOFxGyHxlMi4fe9pF6DDjmxoDZCJ8IIXj7a4zv336CVPfzczwlvdBBPv5n1a8U9OPZe28nuBsHgSPr5ru+tcdPEDzk/ObtoIkJLkxLtaMN7tbgDa9s5PmrzSs94ooKxOZg5fi8CO/p5T1Y7+9UfQh20Gv+92O+npZYuP/zKf4tFgsZuh33bthtrWxuephrdsmvhw4wYyY2N8zKsiZiaTqT4rfaMjlt3RwiGIMvS0UtJqz395oqOyWh5tZ1TH84qFhYXqs/TSNW1/FAVkgPVudyQ6dPAgDCaaipl+4cmlBVVwYj918mpO75ssz/ho0YumKqdAquY2te/gCYvW08MvLPwUbePpdRUZgSLBrapz9+w4Nppvt7RbldXiLQv1TLm8+v6QxN+xO8ulJdQz+Xze2b3PxCuTdq9cXOIGsOosAkhPmiVSjrex6IWkMVrtY6z9jZXX0cqFEm9e40w2NgCT3sRUp2PXWCaiDLKBOWwNTOZ1fv3LFzxmgLnpWPxHZoR/qQv/sXxoCRb+pwuFwm569ZT+6UfmK6z87QF7zAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
