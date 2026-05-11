import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderSE24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2250)"/>
<defs>
<pattern id="pattern0_2072_2250" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2250" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2250" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgB7Zo9TgJREIBnniugsTAmFhYmeAPjBQRPYGFrFCqo4AreACtohBBbCy9g0BPIDSQxxsLEWBhlAXd8A+4PJgpIdGXnfQmbN7MTyMebfcnuPgSXYm1ZdaBARCkESMGE3O5lR9asn1UhLAihqQhKb+Vs3c1h/5irJRVSQ4+S8EP+u3yAlkN2Gir5luJoWvEZQ090vMGdbs3lTg4pKB5bAJhP6J7ASb4Q1lbHKFpagVAgbdizAewXN5NUbadoEWLBK4ovDsSjBk8ke/Gf0Hntp7T3Nrf9pldkxSDSBCaWF3U1dBIVRJpPl3LEbb/HyEvFyEvFyEvFyEvFyEsF7y6A3GCs29IZ5/7BH5u2l4qRl4qRl4poeQuEQB/vZyiQQ5Wv+vEUz9V7+7sja6zTcwid50dvaK55qRh5qRh5qRh5qRh5qRh5D3Ig0hANhUqHl17UtSHS9Hw/7X2tkOjKy/BmnW47eh3APuzm78Zi+WPLSagS2nSA7nY0LggUjUvwefiXBG4nw0SL30A5W1dQyjwRYVonWiAAFieyd3g8WPAqmRaVsxsOUUafbMLfQ7/90WtdQx+PKI5bvPWUf/QdHUyfsFxT7ioAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
