export function uppercaseFirstLetter<T>(s: T): T | string {
	if (typeof s !== 'string' || s.length === 0) return s;
	return s[0].toLocaleUpperCase() + s.slice(1).toLocaleLowerCase();
}
