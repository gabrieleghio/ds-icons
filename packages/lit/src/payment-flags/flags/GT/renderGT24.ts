import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderGT24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1746)"/>
<defs>
<pattern id="pattern0_2072_1746" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1746" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1746" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANcSURBVHgB7ZpBSFRBGID/93y5uq4WarHiSit4yLpkhw5mtZuUHqRLEdoh7RAEBRYUZCBYHiQI0kNBJ7OLCXqpDknJmpVUl/aSFiy4paGYRua6+nT3veaffM+3sQrt7gy5bz94+2ZmZ1i+mX/mzT5GgFVcLZ5tSjo0qoLqEkB1QRw8qi+FRFPbNQpxoQpeAKF96Lq7SysS8MPV5nEqoHhI0gkJ4L+UX8O/DKL7bZPbL2IukeKbAGc68cVIlw62DTSAQTzNkkWuDBAEEWKloKAAEo1l6wzEiqoqEF6WIbwU0IqcypbQJYnM78bV6Acpw0bEMyHZwIGU0As7QQ7SMlVMO0yGV9irVRLTLZDMSBarnsZFPSK24wn1TYEgRGST3HZjUvJmJSVvVlLyZsXU8hJw5tlwH9gyc6CkqBTs+Q6Ymp0A7+d39Lvq8hPAE24jj5LnbtbA1MwEVJQdpeKIPc9BpX1fR6Du2iH6PS+4yKP45dunIRCcg4bjjVHrXKxtBps1m9bj1QFc5DWheoP4/PR7+DRwht41qkgEYEc13zsPPGAuj3NcG8mSot16+bSvB5TQAsx+eaqXVZQdo3ff+Ahtxxrm8v3DvXraKC/P++k9+OOjXobzP1o7VjCX943H9u4t1nb/AnP5QPCXnjYuZNbcPfSekV2sl2G4R2vHCubyNmuOnn7tfa6nc3fWgChlwfaSU3qZcbSN7VjBXB43Mxr9hkUsZ8d+2FX5ELLJXaPrScdaO0fiX3//DXP5KsOuDcP6bk9r1HoobpwWVQfY7/aYy1eXn4wY/d4XnXCr86o+v7UOefB4bdTteYW0HWu47O1bL9wnG506MrLfaB6f4es9x1H8zpVu4AGXHR4+v1HInl+4YT2MkD/1HMADbv/qsAO6216REe+F/jd94JsYpY8zXNVxccM5ziPUjXD/S4uCvCXXI/Umx6yk5M1KSt6spOTNSoQ8nl1JalQ1IiuqIAxqGUVehGQmvLJkyKkfREEJv9SyITlID+wkWwTQ01jyAoQWA4bCtA5JXJHaFYtSD6vH0UJLCwB4xcHk5CQkGnnuOySQMTyJKQ62uH+KILpJgR/MwdgyiEcwQRe8wSa3f6ipspgsB2dJPHiBPyrrSwXVQ1a1G6Is7sOjp/ijvwGdZUf8iBVVIAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
