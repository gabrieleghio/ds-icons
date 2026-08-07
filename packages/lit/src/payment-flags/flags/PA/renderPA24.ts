import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderPA24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2136)"/>
<defs>
<pattern id="pattern0_2072_2136" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2136" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2136" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL8SURBVHgB7ZpPaNNQHMe/Ke2sHZ2T/YFt4FKEbaetCvPqOk8DmTvIFGROvagH2fCkomyyu86TCAqrnqYHHYIMPGTiSUW2CcImSCpCB05ktmobu/X5fqmpqQgjC018bT/w+t7vtWn4vu8375BEwm9UVa31+/0jjLEeXvagyCy3HoDDLABsMpJZihoTEn2srKzIXLTChzIcwgXxBjFkWCSCpZiHKqeFu4wMn6QokGu93PUTXLxsfBMMBlFdXQ1JklBMvkg+OEUWDBpv39iGMSVnqwKjXi58xJipqanRhZcaHn51b+cty8c/kFsAD2P7KfZh40eBQAClTEDymMuegqrYUXebv9V5UMZUxG+V2KckQqfvYUH9DBGxJX58+pW+AFFlCSJiS/yiuqr3j16oEBEvLEIRn+JOz3DB5DpB/Z7z0wiHGjB2pBtyYxAiIMXjcWYUTU1Nmx5A17gh+l+QcPXWEDbj7bYuuMEqy+THlmOvTAxgONKBsFxXME+iRw524uGFPoiCZefNGCkIh+oxf23Q0rFCOm9mYF9I78NyPUTElvjh3g497mNHuyEitmJvB+FjLzoV8eVKRXy54m0+NfWn8u+AUzBtEW7Ab9jmx5XYlysV8eVKRbxo/PwQx7u2PqQXl2EHIcWvTtxEhi/A2t0Z2EFI8ek3OccTjxXYwfINTLdIccFfozO6YHKdoP599yD8Xe1ouHwGVXKLlb8UR/zHw6N50WYoBdS+P3+NtuUnsIIwsQ89vYPaoX5s4y6b8XG3684dw64H12EVYZz3tTaj5faEPqadnlJAcd/98j62ipAbXrA/ovf+znbYQUjxO48f0uPeeOUs7FAYe8boDQX875DjVjc3IpvNFtTceTaXrzY0lDKpVMpczlPsn+XLdS3XGEMpwbieZDKJRCKRn5Mk6YYX6cwk/FXDMN7DW0/nWpEx31FxAZU/o4h6MDe+xteBts8YygOVu95Lg9xuP3sxhtlL/MEbOwlG76g6DnOgKTz+VzVN28tdj9FJfwGN1CTQpQKRrgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
