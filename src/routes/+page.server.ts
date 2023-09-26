/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const params = await fetch('https://jsonplaceholder.typicode.com/photos');
		const paramsData = await params.json();

		if (paramsData) {
			return {
				data: [
					paramsData
				]
			};
		} else {
			return {
				message: 'Did not fetch anything',
				status: 400
			};
		}
	} catch (error: any) {
		throw new Error(error);
	}
}
