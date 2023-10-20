// TODO: Make a component for the list
import { auth } from "@clerk/nextjs"
import DeckList from '@/components/decks/DeckList'
import type { Deck } from "@/types/schema_types"

export default async function DecksPageLayout() {
  const {getToken} = auth()

  const decks: {data: Deck[]} = await fetch(`${process.env.BACKEND_URL}/decks`, {
    headers: {Authorization: `Bearer ${await getToken()}`}
  }).then(data => data.json())

  return (
    <DeckList decks={decks.data}/>
  )
}