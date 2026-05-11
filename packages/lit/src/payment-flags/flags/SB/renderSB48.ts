import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSB48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQvSURBVHgB5ZpLaBNBHMa/naa0TQ+NVqn1lehBEAT1IihoUw968hXPPhDEg48qeLEgxYsnH1WqiEq1oiC+6vNQLbRWRKloKlarYGmqVmlrobZNsTXJOhPMuhuzs7vZzSaNP0g7OztZ8vHNfPlPGAEx1te7CEGFKMIrCPAiy6C62ggRq8M3fXWxPiH6d329hwpvoi0Pshyv503gyppj5aXlg4GoeOKr78J/ILxqxVVsW9zImoFQJLzYkeO7uVWUC88tAHLoSxCQLbiLenF69QkscHXEujwEZK9DBKmQRuU6AUcBsondS+7j4IprcOUHMRwUMBIUo/2ECGUO+n+RNDInD9mCKy+II6suYPPCJqmv0PlXPMVLFO8QSMIH7Vk9A0YwOt5qytztaN2+XyGcQf6s5OFxgspHJSBaD9qyvARVG2fD5XRAD0bHW83RVbV4tKkKHldfwvv+r/nYdmsGngSc1GtfvTQPUFAsNcvmF6F2xzx4puRLfY87fsB3/B0GR0P/PNToeKtxF/Xh/Noa6vrbhPeHxghqnhWj9qlT6lN1nn3wupZeRd++y52qQoyOtxIWai/oNFcT3vq5ABsuz8Ylv0vRz52bTFAMJuJ1dxBWjjdLolCTE3M7XnQMrng2hQ/d6sadlwOooCHmptfd339aNt4MLNTOrTmlurbf9+dh591S9Azlqj5Ddc3rgaX6yYYe2A0Ltd1LHqjeZ27XPJ+c8F5odFxqJx3JsVS/9KTXlnXN0Ao15jJzm7muB8Pi41N94OxSW1JdXqklos4/CaeeTY6uc70YFh9L9SqfW+pLZaprhRpz+0BDCVq/GC/Lk5r2dqW6Vqgl47acpMTbkeq8UDPjthxdaW801c18C2iFWuPHQlQ+nJa02/K0z6janlepMbG77k7HrnvTkxYeT0bU9lqhxsrTAw9LuAWLXnQ5b1dtr7b9ZDCHDzdPxeYbMy0RHk9aa3teqFnpthppqe15oaa1GbESU7V9MvAqNT2bEbNYUtsbRSvUeJuRVGGLeF6lZnQzYiUpF88LNbPlqVlSJp4XalaVp2ZJiXheqKXbbTmWiueFWqa4Lccy8bxQM7sZSRWWiFcLNSa2smEaGjsLkYmYEs8LNTvKU7MkLV4t1OwsT81iWDwv1CaC23IMiVcLtYnkthzd4tVCzY7NSKrQFM8LtXRsRqxEKV6MKA4oqIVaOjcjphCVlw5RRLN07i40Fj2QxAu1TCpPjRIJR+SXfgcV/pg2vNHL0CiWzfqACxvPYM6kfsUbM7E81YtIHRZDEUR+heWdJwR28pLOdL9Af4WSnVNTcL2d/jL7yoWRCeh2QkSxK3Dl5VyC2xsG6VIvv7iuOhAv/NuIA3vul+IknebZJBzh8ErWVJw0/NRUvFUQxAoIwiJ2YOdwy1S7RItIPc301YKRUHXgdtsg6/gNWt2RpeXeqCAAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
