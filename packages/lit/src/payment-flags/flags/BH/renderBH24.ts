import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderBH24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1428)"/>
<defs>
<pattern id="pattern0_2072_1428" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1428" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1428" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB3ZpLaBNBGMf/SRsploZArW0x4io+DlV8FSFebIqvWmsu1lYUH6jxUUVoz9IEz0E9CpWiIIgUBEVREGJOXoTqxYtIIghVqhiwaYNNs87XdNcxNCWv3Z2dH0wy+7Eh/Pf/7czst+OAxugTDzJ116Gigx11QDrU93DiNs4fuq9FHAvfCvovRdEZUCA/CczBj8tdCU18HHQBfPuAvovA8npITgKu9HYSf4a1UT3c2AxcDQGb2yENqgr8SQPTKS6WDdcgJ7xFD86wE2LP2YlTwDYfpMDBPK515W7yzKweo0O14I+aWoHQXWBlK6SAMiD5Uz9cWrzGsSDQewFS8OuH3i1OPCFLFpQlXsPuWVCReMLOWcCJd6IcJieAgSPAi0ewM+U5z9O2E7gybJ8sqDjt86lvYEulQfZEcBjCU3XxGiS+Nyh2FhgmnqDBkGYEUbPAUPELnDrqwY3BJijeZRCJie8ZvU9r+xAM4MPHNJ6++g2PuwZb2+ogClOprN43zHkeyoJIqGX+QlgN73x583yJPBhLov3gZ8TepiASpognvnydxd6+BIbC3yAKpqR9Pmu8Lrx+rFgyGJqe9vlQFmzY/Qk3b03CSixxniew342xkdUwC8ud17h2rtFU4fnUwgLonr8XWYU9PmurxKY7T26/e7necuGEac6L4jaPKc6L5DaPoc573E6MRLwIHGiAiBgmngSTcLoAVqDqryELx6s/z1NVh6q73cchJNzzfHWdp3rewHCuoGEDqiNedLcLULl4m7nNU5l4qtjazG2e8sQrG3Nu07eNKV18d3+uPF0v5txdCsWLp1o8vZmhe1wSihMvkds8S4uXzW31//UciX+Dxfbd0RsXGs1lcps2Jek4xkl8DLx42oZGI/kuP6SBHE/PsDb9L+bM3qG1vYe1cdA+vE1bgNNDwIpmSE4cwa515HySNT96TkTRc1KB/MQxh07qaM+bCTx7uJYFz87vUTUf1YQWZZ9huNI7aOsp/elfOnPnFMp4QoIAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
