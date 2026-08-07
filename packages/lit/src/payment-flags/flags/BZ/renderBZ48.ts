import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderBZ48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOjSURBVHgB7Zo/TBNRGMC/B0bOgtjEqAiBVANOGNtgYiJEWzQGXIiJmDAYCoubdDUOhcXV4uQk7WQiJjoJUWOp/yZJm8AkJlSMlaBDIQUL2p7vO7jrgW0K5XuHXP2RS+/eHS/9vf/v6zFYI2i1Wn8nLX0AzMkvnWA2GESYDL6Lya+BTBInKFXZUlAalAFsYHK4cLQUUi5XcjaqyL+UaqaLQVxFKQBp0bHnuVTj1ouXMwYSlPA/85DmxzLIkJDTyjX6riQtnhLeD/rUhyq4uMVk4gj67AN0Y7o0dp4fYFcTykynvR4LW+fnZHDmtqxd7q0E07OyoJ2au6rzUNTye8AgrBVl0N1+Euz1h8BprwPr/jKeJin3IlNzEJ2dh6dvpyAUnuHnC2AEwvs8Svd1ngZPZ5Mmmw//yAQMDL0TUwi6Pi9UHqX7e85uWloPtoR+XgCBkUkgRScvrNl7e5q5eHPO+93+Nu084B79676t6gD4b11WPrEViEDIgJdPfCtgPl6ivDZCLu9ubyQTV8H8PLwLUUPa521VlRC816U0VZV8zXsjuZ6PJ5bh2LX7yue2ELXIwRrSi1OCswZ17ZPJY63jPC4SnD2wEKggG+2djrqs6fqm+6o3s6tqfZDpbV3lmfSHizLkAsXdvIB9wx+AArKa72hpACM4VX8YqKBr9keN2RE6HbVABVmzt9cf0c5zjdgtnSey/u91V9bkrPkUslrMxa7b1VEOeGTy8UQSdhtki5zpRzdyzvGxWEw5Nkt1dbVyZCPyaQ4cvX4oGBGLnFD4CxjB52/zQAWZPNaIETx5MwVUkI32GIDwZtm7F7S2n8z9fChC18IIB7xlGBweB5H4eWADgxxUkE51uOwUNeqjNHVQgzyM5bnaBHdvXsj73Fa7g/vOMwiMEoS0RMbtfY/HyWsI8yMR34CQFR4GHqkKAPPpFxTDExq9dbc1gre3sAAHjh0DQ+/Jtq8aRoWuERTHCE83j+1tBpTGWWN18NxmyCobRsqrYCE47bXQca5Bifqou0CURcmxyAxEPn7nfXtCjLTKTsj/M/z/lXYVw36o3C4MZKCGvZBqtFwPslJTNwUU/SGntGt0HVMvfq69sGNWkrKu9chymMvLIfV6iZfNEn8gLaCJ7STos8i9EpCpXMbYIAuCzfpLWgkzYDYoEmSQpy8lY8dLXBCNpyDt4glRKAJQnPu24jnT38AXEpX38nSvpxn2ncQzxnVfJ6SE70o8HseEPxfuXzMiwu+aAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
