import { executeQuery } from '@datocms/cda-client'

import { getLogger } from '@ason_cs_ts/shared'

export default async function execute<T>(
	query: string,
	defaultValue: T
): Promise<T> {
	try {
		return await executeQuery<T>(query, {
			token: process.env.DATOCMS_READONLY_TOKEN!,
		})
	} catch (error) {
		getLogger().error(
			'@datocms/cda-client.executeQuery',
			error
		)
		return defaultValue
	}
}
