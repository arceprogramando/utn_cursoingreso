export default function addSpaceBeforeSecondUppercase(str: string): string {
  return str
    .replace(/([a-záéíóúüñ])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-záéíóúüñ])/g, '$1 $2')
    .trim();
}