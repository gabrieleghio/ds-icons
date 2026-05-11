import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderER16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1654)"/>
<defs>
<pattern id="pattern0_2072_1654" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1654" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1654" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT5SURBVHgB3ZpLbBtVFIb/8Th2YseJhWhJQER2KU1IU6kOgiwSIKlYQStgVxagCiEhYFFgA5suEAsEqyBQxQKoYEORkChFsGuaVFSoRaorYd4IR5ECVZFCHn5l7PFwzzjXuTGJc2c8Hj8+aTwPz4zmP+fc/965GgWcM+EwEDgJQ5lke5NoP66zZRrPLH7MDyj0E8dQxAf14veDhci5CQ1XBwv469Yi2pR5rOtTeP7GvCn+RxxMslVEPGMmlse5cQ0XRvNoQ+ahpGNKAsMnFChn+NFuqAiwgvCUigILe4u4PJLHp1PrbF1AS2KwRWM/GaGaDeN1hWU9zjYP036ICQ8y2TvBA/H+0RwSUR0tR46Jzxp8b5bEl/f2oqOK9K2QeAoCBYOC0hKQ0uXNpG0R38fE26HULLTWCMS/DosX+WZMMwNB66aknuI5TWuUbogXaSqjdFu8SMONspHiRRpilM0iXsQ1o3RCvHc0Bd9DK/D0aVBCOow1FdkP++B/dAnq3VnzHP33LmhzvShc65a+b92Nshbxnn4NwVML6GDiCS46d3ZP+RwfC0Dg2RvmuYT+WxfWXo2i+LcPVqiLUdoVTxntOf2HmWkizzKafmNgW1EkvJsFySsEafXF/WYg7OCYUdoRT2JIOM/m+te3mMJ3g6qEmgJBAVh5etByBVRSk1HaES+KoLa88tQgZOn55Fd4D5R8gKpl7YX9cArLRmlVvMoevJcJ4Cw/Mfy/7HWxNk5L9oM+cxGhagl/8VN5f5WJt2KCMkgbpSBe6iXO/8hSeZvKfbuyJeHiWoTOp+s41Es4zcBND56c8eP8qR7EnwvjvXeDGEmqVa+REs+dnRBFWEG8riOWQj3hgZh7pddcaJuOVeKVuRk3OYLaux1ElxfvV28o+1QFBDWLj8Yy5TlKKfG8ayPIse1gpNRt7+cm44kO3JUIYDVg4PRjOTnxJJg/MB/NWUXprj2AtfItM8LPD2XNidk1FgAp8WRYaqjUVdFAx45TqxtdHb+fW/wQHUFi3wi+mjiGdGcQ2upN3LNY+k9KPPXN/OGpr7cjno8RzPvFne3mKiGR58ePmaJp2Qkp8dqlXnQe/8fcJhG5z/ZYGqaSwYni7fYY1SDBF+49givDY1UFi0iJp0zTwsfpobeS5kBFpnz5sJhDb3l2x/eVkOA/+6M4+/BxJG+PmvtWkBJPpNg4nkZ5ZHhc0G4BIH8IvZ0sd21kdJnpO1Ar1I6vHBzDDMu0VcEi0uJJZJo9OL2pEXzISiVcWcZUIVTmYqkTdL1ds6s0Liew/D5P7+rBlxYt9dWUcRKuWWzrssZlBXJ7jnTmyxczAdT+Ay8vwvfg7mP0au/822HHuOxS0xwetWn/0SV42Vhd7d+cztKZ0ALrzmSnsGo1LiuImW/oBKZTxmWFmsq+VuphXHZxRXw9jMsJ6ibeTeOyi6Pi3TQuJ3BEfCOMywm2iKdJYNkvM5rJuKQxjC27XgWYNTa+u8tANz9I2olmNS5Z9PzmnALTHPfqUOY8MCbpQIrlnr7B6mIB4BXQCsa1GwbLeFFjqV1Pl48p8LyjxHE47IMWZ7sR/kfGH8DCbXfiywceZ/PhA8h0BtBmJK++ef8+bwzXl3/G0FQRnou/DAxFrh0YxeVDE+0omJP0GPoR2lDEo/e99t0JKOpJZeO7PBcxUGdY5c8qMC4Fcr7p2enYMh37D3WwpaDW8gFaAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
