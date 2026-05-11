import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderLR24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1944)"/>
<defs>
<pattern id="pattern0_2072_1944" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1944" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1944" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALxSURBVHgB7ZrBTxNBFMa/2VQNKZpGLhBqspqoSEzck+JFikc5leBNw/4DWLjqoXrwbAnxLNy1nPSowAm80INRRBOaiBAOGFho68HsODO4027p0hqK7uz2l0w78zrT9Jv35s1kOwQOuhmDZqdASYK1EjgC2fwC/AfNgSIzhJVpx0LEq27qIPQdr6EJ+FO8JE8oGUhiOa+JZhOFK4BOmd4X0GMR6PdNVArXTrDJ4IW4RowM9WE625hHk/Yy/ASlFMViEZZlOSad2cY0EC0le2kn90uVcJMJzzwcRux0G1SEMD3RaBTt7e2Vtn4e9oa0aJGag9OjdxA704Yx8zZUhk9ABYkqteTAAO51vbtD1FMjA8hMvcX2bgmHMa9dhV/Zwi9Z17w68RA3euLC69LGvJ8eHRT2IEBwfoQ6jfT4XSSuX2KePgs93lF3cO7TGratEsafvkRueU3a577Owa9Uet4V9tPZRRbmN4X4RjCuxPFk8o1LOOeW/QF+ZWNjQ9ZdYZ//voWBexn2/gONwIU/nnwNVTmw5hudANWFc2rubXwCJlhWf/Zo2HMgz/peKJ/t9fjh697Z/lTGU/y1nnOudvXebvR2Q3UiXh8Yvft7+RQ7z/P1zZeCmexD+sGg2A0MMTmLNceqku1riueHmdzHb0L07Psv0j41syAKn4T+GxehOq5DDiJRNAO68hx+pa7nj4ry2T4MhFo8WV9fl2u+q6sLQcfzbB82wh32WXJZhn3H8SR/X9HK9n8Ivqsd5BPp8nPKVrYPK8ENe0rr2lvZPqwEx9WENNqxXGtl+5Cibth7ZfO/GNfK9mFFHVc3nM3rflG5VpntOzs7xRWOoGLbNjY3N2Wbh/2s09jb20OQKZVc/zotaZRSeZOAiy8UCuL20n+H/4YmFco8vmtZsHZ2pI1F+ASZgR6j5NQSwnMPj7M6RD9f0JLIb/MbicyQRzhYZXrFtTJXdnuFHpPATrGYMPBvOfZ1xiJ9lsmd1/Azwx3Obb8BWEk3uADYgzAAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
