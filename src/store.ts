import { atom } from 'nanostores';

export const isSideMenuOpen = atom(false);

setInterval(() => {
  console.log('Estado actual de isSideMenuOpen:', isSideMenuOpen.get());
}, 5000);
