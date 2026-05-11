import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBS48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgB7Zoxa1NRFMf/Ny0mJCQ66KKCiYOzjm6JiCi4OCm6iCAuQj+COOjg0gY6WWxwav0EjsZO3eoslBchJtYaeSbvSay8dz3nkUdfM0l7b3OG+4PHu/dm+t9zwvsNR2GC53mnCoXCgta6Tts6jsBgdQ27zRVEoxHEoPBJaSxdH399u39E9Pv9KoX+QMsqDPG324d3/0nylgQF7swhajTG3zpJ+F6v58Fg8JRoOML35mv8bK1DEskFFMIriqr+kKreSn8ol8solUpQSsEUu8ur2HmxiOjXELMgpucPNAIdZ870c0VV36L1ZT6oVCpJcBsEG5vYvnkXsySk8L/pEia0c5gEZ4rFImzwY/kNOvceY9YUVS67rc9ndyZbnYn8IXZeLiZtL4HpdPOwxN6XbtLm/JZKDhbgNv989Zbo4IyV8JobTEM8VsKfefoIlzbf48SF85CMlfAMB+cLOE0XIRVr4Zm5kxWce/UMZ+nhtTSshk/hv0H13QqkcSzhpUjONNa+84w0yZnGSY5pnOQ4yXGSA6k4ybGNkxwnObJwkmMaJzlOcpzkQCpOcmzjJMdJjiyc5JjGSY6THCc5kMqB8Fqb7VVpkjOdjsO3000QBLCBFMkZZ4ur9VaOqv0x3XP4MAyNd8CsJSemmoeUKcD+NJZSqql48jKfz/NEVhWG4Tk8nsQctNYgCQ3t3Rj3LuZqtZpPt9Cgsw4MstftY/v2A5HBI8TXeH1gQGkykLiAzHjaYRi01pPJy3j437O3x2EFbYq7ERSCpTu+7/PBP+o3QhcFyQ1hAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
