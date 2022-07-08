export const routesOrdered = [{ name: 'Blog', href: '/blog/' }];

export const routes = Object.fromEntries(routesOrdered.map((r) => [r.name, r]));

export function removeTrailingSlash(path: string): string {
	return path.replace(/\/$/, '');
}

export function normalizePath(path: string): string {
	return removeTrailingSlash(path).toLocaleLowerCase();
}

const registeredRoutes = new Set(routesOrdered.map(({ href }) => href).map(normalizePath));

export function pathIsRegistered(p: string): boolean {
	return registeredRoutes.has(normalizePath(p));
}
