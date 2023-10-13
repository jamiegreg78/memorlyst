
export const getDecks = async () => {
	const decks = await fetch(`${process.env.BACKEND_URL}/decks`, {
		headers: { Authorization: `Bearer ${await getToken()}` }
	})
	.then(data => data.json())
	return decks
}