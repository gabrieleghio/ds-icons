import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderRS48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOiSURBVHgB7ZpLTBNBGMf/s23og6L4tniwgBpPWsOFC7Ga+LoZH0dJPegVYzwbjyRqAmcPRvFmjJ5EvcjjwgUBE6PBQBuJ1BiUSlsKhe46X7c73SUksG1Cplt+ycI33842+X0zO/toGYq8jkQaA0tqlwYtogEROA3GxqGh58LI0DORoj/97ZGQgvxHHobgfOIqVs5cGhmJF+Tft3fEUBviBvFFr+uUu7+9IwqTuN/lgldxQWEMTkHVNOTUPNL5vJEK+ZdW77gVpnVB00XrXW74uLzToIH0cjeVx4vFAjCw0woXDxudPIoCJ+PjBTCgRd1i66Spvh5r7Zw91BtQ0/JulIni1VAfzsF/fAUzP9VC+9AeF9LjdcjwrRooS94TWsXey4twN6qYGmWIfynuaMujlecbI0uYe+PHcrzs2m4Jtqc9iR2MpoX49GhpH8WUo33UZyfvKzMVnfOMLhibyMmKbfnkgBf/+Ea0tAGtbSVZiim3tp+slHVSJotSNK11Wb0A1SROMN/Ze2LomKdhwwOGM8OwQ0d9B2RCW06JePsmp1axfc4ffpAs/PeHbiE56EXiaZ9lf/BmJ18LssjGnuiJh5CWshY8Evc13+ab3jYKQOLB6A3RTxRAUmzLG+IGwWhnMWIWcX/I6PMLsmJbfqZnko/wBBrCJ0WuVIASqfEJPiMmebQDsmJbPs2lvndNIMDlgzdvWIpA6NJ9hX4FJLvUmSn7yWNtEQiLdBVQ8WPXj29fMdDdXYhb5hewG9VD2fJ/vXWY3rUD8z6PyI369mFXdlkvwlIOsmNbfj1pM5Q3F0FmbMvTiO5OzIn20d5HYtFLFdaBe9YD6iEtFd3e0mJnXu0pDoRPoFqoSN5Y5a25TsgAvYXfaHNPvbgrDggGgxt+6KfT52CHzNv7kIlEIiFi2yNvntZrH2r03HMR+460QmZsy5vPcbqhSZluaihOj38W7f3Xr0BmbMuTUN3BA6JtHn3zqFOfPRfPQ2Zsy7sCARzrfSwKYIy+edRpH/WRHTY7Oyve4W1mwTPz590H/H75iheE3v3pH9Nw6iT2X7vKc3Je4M0LXkXy1UhFq72T2JY30LTq+aqpHFRVtbRJfsBopNNpOJlsNmtujil8tAeNFslnMhnHzQDySaVSWFgoPWIzxnpZLBZr9Hg8Y6it3+HFmpqaWpTm5uYkr8IZnoijNohx37MUWH6gxK+BUT5FungYxtayFefZAHcbyuVyPTTglPgPMD5Re+QMbJgAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
