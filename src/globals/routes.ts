export const routesOrdered = [{ name: 'Blog', href: '/blog' }];

export const routes = Object.fromEntries(routesOrdered.map((r) => [r.name, r]));
