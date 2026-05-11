import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSZ48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPmSURBVHgB7ZpNaBNBFMf/s922fhMt+FGEBqQXEVHsVVwVe/KiKPai5uLHRVTEQ08aLz14aENVEC+1IkXUWrAqiNBVKXhoqXoQrEgSK9G2FNM2MUmzu+PMprtu0rS2cRPrJj+Y7MzbXZb/vHlvZydDMI3keeSChrOgmgRCJDiPt6y0yO0HbxsGwn+YcDc02sOqbjifAASyW247EEiJP9bpR3EIN2AdML5dlI4+9MAivKx8qV4IIXAKlFKoSgLqVNQwsZG+6pzIVJ41LGLFMl240+COFMuXsF7QoCZjKSPFLoEdthkXCWIlnIxodSxL6oL1JCECHE1GKDtc7dwUtXgSesNCf5oNa+F4vo38rpeGfbFC7i3dag77KlIOpzNGk2a9NOyLFREF5J06iV41zMo4IlAQpSputbSiYXc9Jt9/xOjjlxjtllEo8h7zEaqgUxnFQ2VYF5uJy+XCwMAA3G633o4HQwjd7cbQtQ4o45OwG2vMlx0uX3fZaCwjZbCTXiWMC1OD6FMnkPw9nUgjHo8jGAyioaFBb4uulVi9cwfWH6pn4iOIvB+EncTYio2BbZ6vfd5v1ieYw7ytwIOn874dPT09kCRphj0y0oYf/vOgrCOz8aLfl9Ve09ie1W71vO0x//UbcOQMO35f0G3wer2m+FAopJcUW6AotxAdbsOaFZ9Qtdy+kWCr+FyFc2RZRiAQ0GOfC+/r68u4Yj9q0b04xb/etwUX4oMYplNp9qamJrPe2Ng4p93n86G5uXnWZ1TSkxg6IehJ0aAG7cgV297zVxPBGcIXSldX15znl9RUY/PNS7AL28RfrHRjPanA35At4VmJMY9/OOWFXSw421uzeiZ/E/Mcv9+vxzyP95kxz569thu1657Mev+n+h34E3nL9hs3APdac+sAj8djTnSqq6tRV1dnnlMSATPb24mtnjeYiABX2Ov3/jPMG8PrmURGbiPsPwdtlve8lbx7fj4P4JxixV0xhjvJEL7/IRFavW6ghCfx4bSXzfdl1tqEfFCAub3K5vbDeK6MZe0ELprP7gzxXPTQ9Q58udGh1+3G6vmCLmbwuX6vFsZnNYbP9Kf+UcO/6vZLe/WvOe7lH6/7kU/+mfjFQGklZ5qCLmbklRz+Vy2t2xcr/+2wp7mMc36fZUGJSMc6zWbl8io4nUR0zKyX1u2LlTTxlGpwNDR9BVlgBtloaMkEnIyqpukbEFjSfGm0lORPqEpc373kJPTdWMkYWxeIWs0+EYLQAo0ex/R2tNQFUTgcP9+JKchtB8J8RyL4xrziwM/07uGVtJmCviExtS9vGwpL/uOM5zaCV3yk6w5n/AIEMa/8e0s/WQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
