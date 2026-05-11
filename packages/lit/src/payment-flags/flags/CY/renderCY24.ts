import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderCY24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1584)"/>
<defs>
<pattern id="pattern0_2072_1584" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1584" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1584" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOdSURBVHgB7ZrNTxNBFMBfN0g/ttQqEUJDSEs5AQmY+EGiCcWIXtQQSOQmcPMG/gXCXyDcvCHePOhdagKYYISYFA54g+1BSzRRSemHRdM6b2Wa6caFrTOzxi2/BLozLZv+3nvMRzsuOETTtKDH45kslUox0oyBwyBeG4qizLa0tCzQPhf+2t3dDZMnl8hlGJxP0uVyDZAgJHX5VCqlQW2IU5KFQuF8Hcn6OMl6mPY2NDSAqqpAogNOgfhBLpeDdDpNu8L19fVTCnlikvYEAgHw+/2OEkfQBxOKbkxfv0Iee2mHz+cDJ4MBYIgpbMtpGTdCRvvKNtQwJ/KyyG8vw5f4DIgmv/P7vul3C8BDHUgE3yC+UaRx8CHwgPfJba8Q4Sfw81tSv1/gwhjwIE0es07Fv8an9cdqA2AUpuB9zg5OAy/S5I3lbjUAZsIUUeKIFHk26yxmAThOmCJSHJEif9QgRwPgi/ZbEqaIFkdcZFNTog2y0wEe9FF4ceaPWedBpDjZy5SvhWReljQiI+MULnmZ0ohMcYSr7D88HpAmbgZvQNiy51rh8S5cqqX57rzQSuCS90Zj4G2PgWxOnQlD21SCrOjGQSTca/vm0XlQPEGQBQa37UEC3KFeEA23PGal8Yb48seAnrvzCFrvL0kLrpCpLnh1Cor5PWE7OLVrCJqIeB0JrEyErfBwIFK8QX3qK37fg78BSxwHURxL7EDoCg/5QZaquIS1utfGkj59cQzUziFbpNmpTrg8BYOAAcBNTiG1Ua4GlMVxwtfRD94ImS06YlIHTCNC5J8+m4PV9TgM35qAK5cGwa8GwC4y2TS8XHoOb9YWoae7D+6NTlr+W255FMcfikrEMQAjtycgGu4EWWxuvYXVtbguns2Wv4DQ5a0GgEveKG4kGukUWg1slje31kxfZzUAXPLb2nv9zayuL8Knzx9NX8dbDWZZNtLTfRl6uvrg5sAINDe1HntfYQOe1UBYrQarWa5WmEXKaG8lEGbVYCXLPMIs0qc6qxVxHKKEWWyZ5ynVBkKGMIut8ixmgZAtzPLP5FmuD7eXr1+92AG7EPZJzv9OTctXbGnx7IpdBxTsLHVKsVisaGPml2kjk8mAk8nn82wzgQeSVmgL5bPZrF4BTgJ99vf32dNYWOFzLjx56Xa7E1Bb5/C0UCjUrkQikT08kUg6klAbaMT3Gl5UjG6HBxJxXyj+c+KjseP/bJm4vT44OJjFhGPHL9DjKg6xdVsvAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
