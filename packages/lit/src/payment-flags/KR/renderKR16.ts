import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderKR16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1900)"/>
<defs>
<pattern id="pattern0_2072_1900" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1900" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1900" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQdSURBVHgB7ZpNTBNBFMdfKx+1pdhIgLSYsKgBPaBgtEQuFIWzKFcqGBOMiQ3IxWBiQmKCRzDFg16AQLgZMV5RwVtJDMQLStSWiDTGmBTaQgqxdd7Clu2ybbe7O0S2/JKFzuzOx3/ezOvs6+hgB6/XazEYDF2xWMxBkg7QGETXvF6vH7RaraNcng7/+P1+htx8Tz4yoH18Op2ukQyCjxW/srLihewQzuGLRCK1OcTqHcTqDJdrNpvBZDIBGR3QCkQfrK+vw9raGpfF5OXldevJjS4up7CwEAoKCjQlHEE9aFDUxstr0JP/NVyG0WgELYMDwMOh56e0ZnEhxNsnpiGLORSvFLfbDZWVVezV1uYEGmC9XBvYnhooFo8dcbuH4mmXywU04NeL7akxAIrEC4Xb7Xaoq7MDDbBerH+3beUDkAMyEQpH0lk9OD0LgckpCM3MwqbvJ/wNBOGIxQx5TBkUNNihqOMGGGvOJC2P9TudTl4fhuL5ctCRrW2MS5D9rqRCYsLRKuPjY6LPR4jQpVu9ECLi03Gs5SqcGHgI+WRAxMC1PzubWI/LdU/yAJAdbfxzxtNeTPh2B8Qb/zP6Cj7XtkgSjqxOvmWfx3JiiLUjdwnIsrxUUMBSRy/IpXzkCRS1Xwc1UWR5qeBUX+7uByVgeayHFtTEL9/vZx2aErA8+gpayPb2qUBr4dqVQjDHABNMPXw8XsFeSOWaH6qCfuj8+g5sxFfgt4TZof5XKBXxq6+nJD03XXIW+qpbIZhrSMhfLLSy15uyC+wAPCL1HRjxAQlWf376CrwgVzrwmRLvd3gM6kNlzW/ML6S8P1FeL0k4x8utUqABFfE/IkeS3ls0WzMSjixETUADKuIfNN4l67UWvph39w0rRy3sVO+0396zxtNhMeUCDaisedyr90VbQS2Y0gNkece5YlATtevjoCL+2mUbqEl7UznQgJrl1bJWCxnImlMWoAG17e1wzyXFjgrLD9w5D7SgJp4pNZKO14ASUDgtZ4fIeJ8figcS+ZfHs/d9vaO5XNYMwOeHey6S8syeex6PR7R9sRhDOjIWnyxqkiyYgAMw96xZshN0VBeT55tEhW+3Ix5IwX5liuxghlj0ZGxsLGUAc/5bAEamlmDm02/w/QpDILzFWhmndgNxkOjcUjlKtLrTeTMhL1Ph/GCGokiOcABSxfHUQBi/k2Nx1SI5wiWAHRNb+2qAVlcqXIhiby8cALV+TREi/GFEqXCEagDzf2RfApgHgUPxHHh2RctEo9GENIqf5hKhUAi0zMbGBj85hweSZrgUig+Hw5qbAagnGAzyT2PhEZynOjx5mZ+fPwfZdQ7Pa7PZTuorKioCeCKRZPggO/ASvWwENeH41c6BRDyXp+xdNHP2Y51NE20fNjc3B9HgmPEPGy2r22WhopcAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
