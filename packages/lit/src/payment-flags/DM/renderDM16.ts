import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderDM16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1618)"/>
<defs>
<pattern id="pattern0_2072_1618" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1618" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1618" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN9SURBVHgB7ZpBTBNBFIb/XUrRlgLG9ECjSZWDRqI2JgUjB4tV4xFD9GS03DTGoPEi4aIX9GAiHjxTvHAwQa9iGvBCChyoJhqN0faAbSIxEaSFUso4s81uF5BC031N0/ZLtn3zMtP03zedvveyElR8nibIiV4wycNHHhAwd21Ksw94s/5oNKrZjv7LICIEsEEMTQ+rDll59Z12Qlqe5cIfgkh4CeACJD962sOKXqjiJTbOX52oDJyKXr7TTfC5fdALr63hF78nkgSjabZv429uzg6sZhgOY8DaOrCaVj1OIHHXxEX2apPMNRnx5YYIpNDF7wFSadV3VoTYpU0yyShrNgbWs1EtwVYvKTbJK/NQ56YqvlKpiq9UTCgiiQ9WLE3WY5m/B+1mNMgyFtfXET7fDcsZNxqvdqGYSDzXZdqIIrviOOJpDMzE0Taf2nFuwGHGY5cFUStRshVf1Uzybd8VSWL03cKuhAu80VW85vPFOmpIt70QMDCzhHyxpZi27o2zDlSQRV5s9QehOAqhj68Xn0MFmfi+UAINKYZCyOyAwm5gLqS5ALRvuF3JmS/J73WI3GzZ4j92Zb9mv1h4ptm3G+9p9udXv7esO/g0AsvJBIwgNp+1SSK/8HYfjGRp0gYKSMQnPlpgJCI/oEAUeYX9MP9D0H5USWByMX7xpWZ3jl3POfcvS6P911cYDUnkdxKeLzaJJuEhES9SViMRkadA4j3z7GmvbyQWwA9vN5Kfvmzx6097/am+nV+lrvUIDgdGYQSxWEyzSSJv7XDDSKwdbaCARLztkhdGYkS1x3j7evNFVtX5J0Qxs4ZCCThqcaejAYZRjKqu323DYm1h3WCx/omrHlSQif9plfkXLyw5EevF51BBWtKq5aio7vIpcjIRt5KWswLyZoYQ0H2hSenQ7IZpu0mZTy1cUJQ2lkrcO4PFsUYlV5//VsszwRqeEKVhP96q/D2KfwnryH2QojvwitrA3NOygj23VhS75UTWzwK6hGgERaPat69UquIrlap4DWZ4U6e02CRPiJ/QRiljmxAlR1rfFGGzMpj0XhuLh3XW0uW3A4QeoS2pFy8/50nOyiDvldyA+jiaMoGmbaTvmW/w67or+gyMkDCGgsMy/KE/PPqd3BFBZRDmes8JI3Pg+YMRDE0d4s4evkVCKD6M/GIY5/oege09pejl/AOkkDudK3j2pQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
