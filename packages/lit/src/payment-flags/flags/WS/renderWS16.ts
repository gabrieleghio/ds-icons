import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderWS16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2482)"/>
<defs>
<pattern id="pattern0_2072_2482" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2482" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2482" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgB7Zq9TuNAFIXPjH92N6tdeYvtLSqEQHJqCgJPQkkX3gCokKigo4SC5wggIcogBIKOIEoKIn4CwcaXO7aDAhURyoh45pNmxh65OXfOXFlXV6BHtBxIVOoEUROgGjRyfLkFDRyBxPpk+3S7tyGyOVoNJZwGP4VIE15SgAi6OLzawbDxWKovMrmtmNLZavu85aq3XDiFSB55SaCbDqXQgU8Cf6QTekI2mkFYdZ1obZ7UiSdPuXDnB/vB5yGgi//SxTBRoe1ygO953KYvCDgArqwsuiy8nommmIX/ZBv4KBuSxy8hsyAol8V8pT3IGbUfgaORf+WhzFSEzNYYKp9R7YPfBrP60sL02/PK5gG+Oz11vVQuYTBGix84zX7G6qNyHaztTWVg24+61fuxtjeVL/1Uj6LV+7G2N5Uv2X4Urd6Ptb2pWPGmYrR4cfJvgh64rqVqW8MuJH4Hrrk0r8pZv3lY25uKFW8qVrypWPGmYsWbihVvKla8qci3CXnvSpn52F8mQbTrFj0Lj1Ru+U+FvqIlrSkJYs/jF9Wn1imKGqnGHjwdKD0PRTeWj1wrKN0QzSAKPNFtchDCO3pBt2TC+1Gi/0qHZ7qYujkby88/GA/59Btc1QpVp9JzyQKgcppbuJuP/CImmlMdmO/ar46D8XmubNX5mwh6GX60Obexu/cTdNar7VZbbb0Cgo202x9eSpwAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
