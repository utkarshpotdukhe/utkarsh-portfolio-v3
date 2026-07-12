// Resolves a public/ asset path against the deployment base URL.
// On GitHub Pages the app is served under /utkarsh-portfolio-v3/, so an
// absolute path like "/projects/foo.png" must be prefixed with import.meta.env.BASE_URL.
// In dev (base "/") this is a no-op.
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
