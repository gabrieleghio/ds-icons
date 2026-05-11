import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderVN16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2470)"/>
<defs>
<pattern id="pattern0_2072_2470" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2470" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2470" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK7SURBVHgB7ZrPThNBHMe/v+l2W1ogSKIxAcPGG5zkRPQi9e6JF+AJrCffQU/AyZPRB9AX4FA1hIQTnuqx1eCFA9RK6f8d97fplnYNptDOTLLbT7Ldncm03c/8pjO/bYbQo+AsLKTdTt4lbBKwiejxjaTcefyz9iGoIH4pOGknJRMFr+gg8shyk7q5XLlR9uUPV7KleIgHcAck162DB9ntQfEsEWYEIBAdXO9oSODClb0acmy389IiQfmg0awnnomSdQ9WynhjXHpHre+Pp8IrPwoapSMoPkhGUP+aJ/Uh3Yi7g0LlqPv+l6l8XJnKxxWj8nfyTZjEmHx6o4PFFy3MbHRhCmPyi/mWfzYZfSPyHPUg4nw2FX0j8vNbnaGyqehrl7eWXMxttYfqTEXfgmLEnIS17CK16sJeu17y3psGqh8tdE4E2r8IrWIC7h+CSuhwZVb2byAxmS9Lrbm4+7qO5LKEmJe4LW6V0PwucL6bQv0ogUlw2r26HyXDvlkUuNxPjiXO8PsbR9bExP/5fCjibM/2IzYO53spnO3aUIXSCW+cDlAtziif7W/TATrEGS1LHXdAbX+0hYXb6RBntK3zo05+vCzqQps8L3+jkFwab4W4CVrkOavjZGcUeIToir4e+ZAMZ248CZ48z/rncCZnr+pJdZWnt0ww5Fny9zsblfdJP3tjmkUb1U+W/2wf5Py6hr6S9DbM/bd1X5Znfc7dr4NHCHcCc/oqDRUMprda5G8K/+6DkTFplOf246JKPMz039u4MpWPK1P5uDIkr+95ygzhvFF4FZ+DQt3V90Rlgrq88vOujgUIX4IK3qxz6TWIWh+wT83zuhgY2oLkLvHOy5RsH8dsH17pyY/aQ5ErVypE3RxvzEMskCXP9xlfDSXRB052myTlB7en6bojKMaf2whfM7B21r2Ac91f9VX0wwrs0ncAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
