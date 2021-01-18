export function getCsvSettings(title: string, headers: string[], keys: string[]) {
  return {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers,
    showTitle: true,
    title,
    useBom: false,
    removeNewLines: true,
    keys
  };
}
