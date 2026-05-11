import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderNA48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUNSURBVHgB3ZpvbBNlHMe/d2txfzKo2Z9sBLObr/APrlMDzBdbyxtjIghGYxRh02QSDKSbxhgMSCfGxBfEEjAj2YttKIkui4l/SNQXtvDCGSFZUSfzVbvEbM02XAHXsS3r+fwOnltXeu21vWtrP0l7zz13t+Zzz93v+S53AjhSlw3r17kgyw625kARsL7iPry9rwWde5qZluwXRdFTX18/yLcLyvfmdyVYo17WklAEkHTn848r0tTmREb8mP24L7jw6zWnE+PBO/Jb3gmgCMS1pJf/DmH2k3O4OfwD7wpieaHZwsQ7ECtewg4SrOwj4P+CrbIUrle2oevlrUqbsxK+hZkPe3Hj9OeIQo49RIquK++ysAvfpfaXsANFa8ofszdOwR+oRyFA0u43Wu+R/ocJz545jyhri0yyjH2ibFsEK8o+oiy3WZi4XT1KtKT8Mak2DO8H/Wg88BbCkVLki46dTTh+oBVSvU3ti5eOp1wQEZFX+Kojzjb1pd7uHIWt4ja6do7A/aUTucbxRAOTblOWnFTSnHi71EMdA416B5MnXM+OwPNtS85GP5E0cf30eUyz+zqZtBZpydOo0wkgaPSPv+RFd/8zMBMt6fBnX2P6xFksT0wiUwRW7VfLoLVy9UcfCWD31nE01M6xAhdSZOmTCH+gDsFpGyam78eAz25IMdSSnr94mVXws5i/dAWZMCMvq23NkfeNNbJL3I/d28aRCjo59Bn8qTlrcWnjBla929DOClos2UonIull33Fmj7Js3zGKVJA43z8TaKqikaa5OhYzpDkp73k9JyAbca2AYqZ02fYmVHe36yt4ngstSeXdQ+lPeVrSS6yAzZzoZQXtGxhNeeuTeODNF1G+/c4tpUteqplLur1JCikFTw+poihNXUZjbdiI2qMHYdu/C1NTU2q/LnkqZrH4g3WwS6t9jbVzev6MrihqJKKtUpGuOrx3Tf/PoT9w8uqQPvmmu6K+MQk9XziVmYDm+/5DX8HxaBBNcScnnkyiaDaQdNXhV1F9aK/S5vgm/Xjvx08xEhpT1nXJT8zY4Dz2miLNocvc+f7rSh5wsaibiGyiaCZoSQdvheC+PIDBv74Hbiyp/ZohJxvMiKLJ0JIOL/6LnisD8Pw2vLpzjHxa8TYVZkZRLeh+pvs6XvoUE/b8Pqy0tTBE3qwomgzbvl2oPXZQqeQcvdKcrORzGUU5NFeTdAVbctKV5mQkn48omkiaIGk3u6/TkeakJZ+PKKolPcAqdw+r4FTJM0WXfL6iaCJpmqtJmpbZklQ+31E0FiOlOZryhRJFzZDm3CNfSFHULGmOKt/y2CZ81P1cYUVRk7GQND3Me4ot2UM8dUNBRFGTESYnJ9VsT/KFGkUNI1G2pyeYwd6jBRtFzcBC0tc95xD55SpqhNTP6dLByChqBoLX+pB62Rslb0YUNQyz/qU1M4qagSHyuYiiZpCVfC6jqBlkJJ+PKGoGacnnM4qawRp5em1DTLBTIURRQ5DXrpK8D3ffu1uQV1AhlKgbCymKGsLySuzaqCUqyxdFQXDQWoSNvcDOTqkgooZJ5z2KGoXMpJbYdX07Rl4WTwle2G2wLtJTSIn6NrzwNKq698O6qU7d7+bSPPqufYe+Py8o7SIggCMjD1qc8Ie9JZudZVse9lYf6ZT4E0yiCKWJABv2HdRY84ISe4LZIcuyizXtJH3SP5QraRmmI/vY1yUslnrg9ikvFv0Hmk42EHJnO/UAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
