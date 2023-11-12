export const load = async ({ fetch }) => {
	const uid = await fetch("http://127.0.0.1:5000/retrieve?search_key=24")
	const uidData = await uid.json()

	return {
		"uid": uidData
	}
}
