import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSC48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQgSURBVHgB3ZpNSBRhGMf/M45mlrHapSRoLl0rwqBObR8QFBRBQaFo17pYQXRJiC59QGB0TvBWdNGbeVATrCghL5af7Yrmuqurq62mq+7b+66NztrufL3vu2k/eZed2V3Yn8/Mf56HHQUG/gc+VVVrCFH8Ct2CYC4fmcazy6MQyUxTOLWcQbpVotQd7+1tMPYoqUf/A11V8troMx2S6Lzbh30lCYjCnXgawQTByZO9vUGVbckWv306LFQ8+nLEqzhDL1DQ1qbrPi3P//A6MYvnbVtdigIR7C9dxJNrcfqsCLwk55YRrf+BHZ/i2JGf7/xzhGCBrvjKirFLLygqvKURBTVr79IKV8UFUns+BBEw8VBtPxKBX3CLSgtZRBctMuaMfwDBCXrYK4fX31UAkVQdi9I1BV6WI4uexc0Uqap506+lvSroUDe4f46/6ob4coQ/MzbaqZBELRXXd/N9YZHimZAiz0KO91yXLc7QIAFe8URgHuHHQ1LFGcLleUOOibOKJ+dWIBvh8jwh97M1iqn6kZyIM4TK84QcE598EUQuKDx0CCXV1eLkeUJu+lUIsddjkM328nLsvXKFyq+2NsLkN7O4VlaG0hs3sOvCRYRC699TiLzXkJMtrhYXp6R9FZUZXxci7yXkZIozaV9lZUqaPc8Gt7yXkJt4MYx46yRE41TagEvebcgZI6locbfSBlzybsVFTGYb8VVU0PP6pitpA8/ybkKO9emsXRUpXkyTezcNM5bkXvEs7zTkRA8o7FrNEnx7+VHw4kneaciJFBcpbeBa3mnIiRKXIW3gWt6JuIiRVKa0gSt5JyHHO5KaW1HZuJK3CzmekdSuFRUJ+fPoWN4u5LyOpF4bFLcQ+hdbiKNztAct37vQTJcjebuQ89Kn50o6EBtH08B7NPV9QHd4ELHJ9dPWkbxIcdnSrLrd4SE09lNhuoIz2X/WspW3Cjm34jytqBXBWJhWtxONRnUX5xx9zlY+W8i5ERfRippxU10rLOWzhZzTkVTktdprda3IKp8p5JyOpCKkRVXXiqzymcTtRlJeaRnVtSKj/MaQsxtJvUrnorpWZJQ3h5zVgOKlFc11da34S94cctnE3bSi/7q6VqTJm0Muk7jTBmUzVdeKNPnac6vX7Y0jqZ30Zq5uGiR9U6Pb7ey+O3af3KWDESq+tDaSWklvleqmsWSaNhV80RSSfAdF9d8+HcF4SwQrb8aRP09QSqXNreiWqW4mCC1xIknXsnnvcy0JUnfnTKTa9zWsT70cwc6zZ7GrqhpLe/agayxAR7/PaB7qQs/kMGa3QnWdEcCjjobUPTrf7vn1+EBJW35VhT5Y5sNbJkzn3ZHZCfyHBOghcAqPPwbTblA68PTq9YHoWA09Hw4jtxBIh7TTE70DC2od6tpjbM9vLXLxFzggBBcAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
