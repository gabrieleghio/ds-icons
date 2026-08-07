import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderGY24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1758)"/>
<defs>
<pattern id="pattern0_2072_1758" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1758" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1758" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB3ZrLbxtVFMa/a0fEURLjxI0oWBEWUlY8VCQWKCzisIEVYtcFEUQoUoGiuCF7Cn8B7Y5I5VXUDUSEggSoAWwHhVaiUsIrbECxCm3cWLR52G3t2p6eY3ec8dSPufbcqd1f5ExmYjn5nTn3uzNXI7CHb3R0NDw3Nxfy+/0hw3H8cTWOz+MxfHfxPP5NJ9GhrELDMby19Il+QPC3iGd/cCKTjFzU8sHh4WHMz8+Dt9W4BwoRB7LjmDkXL8p/7wms72qF4MncDhbyaXj7gNnDz2Hq1YMQ/c/X/JQOLkQccD0pzngCk1SBj/Sj3+TSOJHfxq6mYXoCODodhO/BEFwDrwC9oZqftnrlH3z89yJOX1hGPHUZbQW5IJsHruf3jhXwrljsDqxQ8x/g/T4h0AMXLmk5TGUu0zaP4EPADx8AwQC94b5gsQCufWHAc6Dm32rbQtzI0UsvgBYVi56Apv/OL9ykXoKGAd7PbeNUbhe+fuDt14HwhOGDSF7sOwLRO1YqSg3aqhBsup0p71bID5G8mVOUA1yE8jB4jaYFr+lN1A1iYLIzCrElIc/UHAbV8L5Yygfa1uOuFUJWnmk4DMzo+dAgKBlHC9GMvI6lYWDGYlAyygvRijwjNQzMWAxKRkkhWpVnpIdBNSwGJWNbIeyQ12lqGFTDYlAyLRXCTnmmpWFgRiIoGelC2C3P2DIMzEgEJWOpECrkdWwbBmYkgpKpWQiV8oytw6AaEkHJVBTivwvl40rkGSXDoBoSQcksrp0t34Yrk9dRNgzMWAzKjY2N8s/K5Rnlw8BMnaA0yrtf7vK+o+/0ChdU0E+f+4K7D1m6p/xpO4uTX9H/1A08/QTUkN+i+3ZasrsyB23nNC3a9EC4fWTrQyqVKr/NEXmmmxZKnnH3UCEEfrmRwdfLFLy7VIDHS4VQRi4B7HwJ7f/j0NIxpNK0mOH2UjHud6btzZwvZIrDgBl7CvjxQzjGBi81ukh+aBZdcBhOfw5AJvwSzQJvwDl4inSNQ/gOFgvgmLx56nuPpr5pFVOfGRbuG4PwHymOeWEIPEfkS2m/WdwW057anLfKcJHkULgkXmfaUy6vtzmfeb3N+czbDgsPli52RIMbIu32d2XyjrQ5CaOHrvkfOArB8zlPZ3XQ6Gt580+cS/6Fz9ZjauSVtzm3M59hvpqzIBxN/IqlxO90fX+m4trednllbW4KrkZEEqt7wjVub22TV9LmFoNLh89wLPFbXWEjtsjb2uYSwcXIChtpWd6WNpcMrlaEjTQtb0ubSwSXXcJGmpJvqc0lgkuFsBFp+abaXCK4VAsbsSwv3eYSweWksBFL8pbbXCK47pawkYbyltrcYnC1g7CRCvkCvWo9mXFHm1sMrrYS1ip3WT5KrxDvXCdhXsqq2eYWg6vdznCZbN64t0LyWowWcUO8d41KM09LzSfoVW7zN30YeLhxcLWtMMNPY2UKpQeSdFw4LiII+m56sitpTQt+Si3+RT4Fr9eL2UOPYurQLAXXY8Uln2r8vLmGs8m14u1hhz2Ht46ZpUe6xhHf+hb7xw9nk5FLFp7A7GBhnXXq/2f5B2E8OjIyMrmwsBAeHBysWOl3QFiDcrQo6S5RGx/DTHSLj9wCEvzOnha1fmMAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
