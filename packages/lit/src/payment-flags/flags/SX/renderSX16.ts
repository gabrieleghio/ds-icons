import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderSX16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2326)"/>
<defs>
<pattern id="pattern0_2072_2326" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2326" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2326" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB5ZpdSBRRGIbfWSxlRd1ICKuF1QiqqwoiukqDCuqmDLoLhKhuCukmujPzoqhEpSSw7IewCEq7tDC0sguhsK76AdulTTfMcnZdl11/5nS+yVlnZtudUSlnjw/Mzvlb2Pd873fO2WEkzNDt8XjylrurFcbKJUjlEI93XFfjjh+Dd7UGiT5CoZAvuP9A91Qw6IP4BBKTSkWF/D2gih8aGvIrY2M++XoLIm0PsATgExDbIvGoVzHGbmutSvsTJJqawSIRiILCrzhjiDIl2cartRKPej8vb6aGwsJC5OfnYyr4DYOVh9W7SIxz8eNcNcHAelyYEU643W71nuNdC29XJ4qOH4VIuCVXskyLukvfKUlSsuwqKkTx+RqsrKuBiztCBCRT3WX1Bc+xo/A+71TdIBqW4glR08CWeHWggGlgW7yGSGkwZ/GEKGkwL/HqFwVIg3mL18jmNFiweCJb04COt0yr5MVkfHnaAXngo2FQ2Z6DKN170NBG4/zPOgxtnnUbsLqgBPG6eigO/W8wrEwnywbxJSUl6n104EPKJOgnwCycRJfxvhXrNqp1J/83sBSvYZ4EmgAarAk3i9ajhCP4Vd+AcEsrnIRt8XqC4Qlc6h2Ge5kLJ7cXw1u0HHaQb7Ri9HKDY9JAL97WgjcSm8K1vhHEJhW1TJNAZTs4eTewJf7TSEIVrUHCX38dh12cuhvkWI6I93Chm1Ka+0Mx7F7zlm8R5bCDdihqW78Ptc29kMcSWBSmZtPPOvJyLc/31B/6Mzat9s2V6iPb0H71EJxAZvE86nTFJllKl5oGM/1zoeneG1SeegwnkFm8ncjajL48Fsfpi13qtWiWN5E+53VRLXbnGBY8grY8w7gMuR8YCmNX1X0EBsNwEukjr4voSnfqHHmLlv11rBmy+dbKW44TTqSPfN7OZOTPrF0FZNqmaawJsjmt6iTeqaQX7zn3526V056a2bEzONXmZjIveCSKxKXtTxXuZJubsX22tyIbbK6iO+RYn/BskC02N7PgJznZZHMz84581tg8A/MSn602NzNn22ezzc3YjrwINjdjS7woNjdjaXuRbG7GEHnGWPIFBRFtDhifS5D4Hn6VUyUajaKgoEBYm0OZ1Nf6XTzaL7Qaib/S+ko8m9NLSAp/gKLEZ5t4Rkt+v9+Tm5vbH4kmfPV3+nDz0XssAfzs84WynNLSUjkUClXsO/Gw2z8Y9kF8/GyC7aKC8QWl9WereFM1X/M24//C8I/h6d3D1b7ERLwRgUaZ2n4DUGry1dn40fwAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
