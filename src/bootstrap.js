const route = new URLSearchParams(location.search).get('page');
const base = import.meta.env.BASE_URL;
const home = base !== '/' ? !route : location.pathname === '/';
// Keep separate import sites so Vite associates each page with its own CSS.
const loaders = {
  home: () => import('./experience.js'),
  internal: () => import('./main.js'),
};
loaders[home ? 'home' : 'internal']();
