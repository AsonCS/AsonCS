export default interface Fetch {
	fetchWithCache<R>(url: string, defaultValue: R): Promise<R>
}
