import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderSY48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ6SURBVHgB7ZpPaNNQHMe/r5ZN3cqCB7EHpQgTLxt6FGRrcV52EcSLCLKbx6m9eFAZ28WLoFdhiOLwIqJXtdbA1JNsrreJa63Qak8rRumK5vle2pclY//SJFvIywd+zctL8ms+ea+/NqEEbfJKSoHeNQ5C0wBJI3TQeejkXubX4iPRQ/hLXjmeAtXzrJlC+CmBNDOZ5VKpJd93rAg5xAX8ApyM55T+MdBV8R4Sw14WMYQHncUK1aFRXXSldL3rajxGMS56epn0PhIm7RbciHtx9T/tCxAjdJj1kxNip+4QilvZb/MjaZttuNXb1d1C2H03JZKXlUheViJ5WZFaHpVKhYpwy+TsE+onXuS3+no28mp5AZOzM8bSD/zI75n81PsZ29Jr/MjviTwfDbVcaLcLno++X/n3ZLPZCbGSSCS2fWCp/hPq9wJeFT/hpvoQyyu/zW2fa0to/Gui8beJekPDod4DcIpf+TVNM9uEf/DFSjKZ3PLgl18+4sLzKTjlzcU7GD4yuOV+fuevVqtm2/G0P9d/CtOj1xwdMz16fVsnthP5rcTRAZcHzhrLbO6BbTquRenuwd0zV9j+IwhSfoHjaW+FF56Rpzc23J5jU3GogxHxM7+rae+EPjYyQc7vSv4bq8ibMV8rIsj5Xclb33zo8ACenb+FwYNHzT7+lRTk/B0VPMFC7atxUrdPXzKrLa/WjwuvjV9i5foPuMHv/K5ubF4sfnC1fTfyW31dVfsgwzzX7bdWe/4om0JSoic5shLJy0okLyuRvKxIL/8OcjLH5VXIyX3+orDgN85UorA9CEhJdAGWsMEfLsdYzO3CCek7EG9ZTKA10w3+A9oBoVCFW34LAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
