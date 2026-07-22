export enum Lang {
	DEFAULT = 'en',
	EN = 'en',
	ES = 'es',
	PT = 'pt',
}

export function langs() {
	return Object.values(Lang)
}
