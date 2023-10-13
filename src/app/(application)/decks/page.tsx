import { auth } from "@clerk/nextjs"
import type { Deck } from "@/types/schema_types"

export default async function DecksPageLayout() {
  const {getToken} = auth()

  const decks: {data: Deck[]} = await fetch(`${process.env.BACKEND_URL}/decks`, {
    headers: {Authorization: `Bearer ${await getToken()}`}
  }).then(data => data.json())

  return (
    <div>
      {decks.data.length > 0 && decks.data.map(deck => deck.name)}
    </div>
  )
}