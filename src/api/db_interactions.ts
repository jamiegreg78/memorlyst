import { Deck } from "@/types/schema_types";

/**
 * Client Side
 * @param newDeck Object containing a name string and description string
 */
export async function createDeck(newDeck: {name: string, description: string}, userToken: string): Promise<Deck> {

	const deck: {deck: Deck} = await fetch(`${process.env.BACKEND_URL}/deck`, {
		method: 'POST',
		headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json'},
		body: JSON.stringify(newDeck)
	}).then(data => data.json())

	return deck.deck
}