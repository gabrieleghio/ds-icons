import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderIQ48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgB7ZqxTsJAGMf/JyRWdOhow1LfQGYHgfgIPgDRB8AHMKEkjg46OGriaxgDOjjDbgIsUkcHTaoRzrtCsRjFEtpq7rsf+eDu0ib8vn4fOZoyjGmapvnu5aoAK4ppEarB0GYcJzvew+XnkqBprNsDZJocsKE4QriXwaBU8h57vvy1ke9SEA/wE2C8FLJXRr4SFl9lDAaWxEsdhiJewfHMh/5c+r55uYMl0QfV4KA1IZ5TTFwifVYg3VhojW2LwGawsKyc9jQ5NuVXnJqprY7QdR+huu9MtDxVtDxVtDxVSMuzfr/Pg4llWVAd13UnY132VElcvvfkznV8vXEBdrglPs+RNInKS5GN410UziqRz3HG0o44N2kSk5figUjbvZ+7AtIgEfmwuKRW3oNtWqmWdBRil/9O3Cnv++M0SzoKscrPEv+PxLbJ+So+D/zobjKWbTELRyS0tkBCE9nkOCn1cZwtE5v8Ilcj+AGsRxCTrRQXem9PlSwUhXP+67q8lc1BFP2vjipanipanipanirk5W9Ak5aUvwVNTuWbKaKL0R6fSnTCWbAJJaCDHx64rIho/cEXGqYQDREORpXu8wGsBjX+2rZnpgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
