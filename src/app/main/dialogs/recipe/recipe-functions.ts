export function getTabIndex(tab: string): number {
  switch (tab) {
    case 'recipe':   return 0;
    case 'details':  return 1;
    case 'comments': return 2;
    default:         return 0;
  }
}
