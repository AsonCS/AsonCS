let lastCalledEn = 0
let lastEn: any | null = null
let lastCalledPt = 0
let lastPt: any | null = null

export async function getLangEn() {
	'use server'

	if (Date.now() < lastCalledEn + 1_000 * 60 * 30) {
		return lastEn
	}
	lastCalledEn = Date.now()

	console.log('en.json')
	lastEn = await fetch(
		`${process.env.GOOGLE_STORAGE_STRINGS_WEB}en.json?alt=media&token=9f3aa085-35ff-4249-bd98-3e3184cbc14e`
	)
		.then((res) => res.json())
		.catch((error) => {
			console.error(error)
		})

	return lastEn
}

export async function getLangPt() {
	'use server'

	if (Date.now() < lastCalledPt + 1_000 * 60 * 30) {
		return lastPt
	}
	lastCalledPt = Date.now()

	console.log('pt.json')
	lastPt = await fetch(
		`${process.env.GOOGLE_STORAGE_STRINGS_WEB}pt.json?alt=media&token=77279dd1-7075-4aba-a3d8-e0f6ff1b06c8`
	)
		.then((res) => res.json())
		.catch((error) => {
			console.error(error)
		})

	return lastPt
}
