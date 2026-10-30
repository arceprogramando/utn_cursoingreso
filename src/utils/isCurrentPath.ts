export function isCurrentPath(pathname: string, href: string): boolean {
  const current = pathname.replace(/\/+$/, '') || '/';
  const path = href.replace(/\/+$/, '') || '/';
  return current === path || current.startsWith(`${path}/`);
}
