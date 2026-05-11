import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderFM16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1684)"/>
<defs>
<pattern id="pattern0_2072_1684" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1684" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1684" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgB7Zo9TypBFIbfGZELegtyi1uT29xWK2PlR6GdvwFMjHaa+DtMsFOb1b9gp40fDbHC1oqtLYyFICDuOAcZ3E00QHZnVmf3SRZ2BnKSl/POcnJyGPrsOLVCE91tBrGI3mUb7FYIUTlanzsZ7NDLllMtCvALeVuE/bgM3tJBed7tid90bupIhnCFm0d2NrPhVEvwCZ/MT2MylwdjHLYghIduu4VO80ltFZteayfDwbfVTnbqtxQ+BdugRJIueebx8tx43+MTC5TeGfWlTDYHmwkmViwGvM24PVb/DMZYYG232iGk4uNg9X8Be2vF3ntcxCZ+pS96JYnivwMZGIQs/lmmyf7E+d0jzuRlCqOZH2Zx00fAqPhhWTWZdcKo7cnW532ByurE7qmLOEj/5+NAWdy01f1EZnv1JB/1ie0/Ajrij0JkmdddtOiIn+gzz2QLS6jF9J+/GIevihZFWIvqiN94uB/ch8q87qJFd/xQ4nUXLbrjh7K9H91FS1TxI7P9Tycy8bqLFh3xI7P9uOgoWkbhW9g+7eTETNrJMUXayQnxedSknZykknZy4mDcTo4OUtsnlYB44XmwGRpL8cMZ2KVavLSfYTOvnQ998meocXivV2qDhnW6raZ1DiA9pK3dGExjYUJgn5WcWuEXOjUkaw6vflie+8ePy7OPNJEoN1wkg7rUu0w3gfGkLadaEu9zeTMwi4B2xCWDuM4hV6nIhNPOG8Og+6NXkYrWAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
