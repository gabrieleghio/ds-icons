/**
 * sanitizeName
 *
 * Converts a raw icon folder/file name into a valid PascalCase TypeScript
 * identifier, suitable for use as a React component name or ES export.
 *
 * Rules applied (in order):
 *  1. Split on any sequence of non-alphanumeric characters
 *     (commas, spaces, hyphens, underscores, +, &, ', /, (, ), etc.)
 *  2. PascalCase each word segment
 *  3. If the result starts with a digit, prepend "Icon"
 *
 * Examples:
 *   "CardPrice,CreditCard,Payment"  → "CardPriceCreditCardPayment"
 *   "UPF30+"                        → "UPF30"
 *   "Click&CollectInStorePickUpBag" → "ClickCollectInStorePickUpBag"
 *   "What'sHot"                     → "WhatsHot"
 *   "CompletePairFrame+Lenses"      → "CompletePairFrameLenses"
 *   "12MP"                          → "Icon12MP"
 *   "FireWhat'sHot"                 → "FireWhatsHot"
 *   "LensAntiReflective+CShield"    → "LensAntiReflectiveCShield"
 */
export function sanitizeName(raw: string): string {
  const name = raw
    .split(/[^a-zA-Z0-9]+/) // split on any run of non-alphanumeric chars
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return /^\d/.test(name) ? `Icon${name}` : name;
}
