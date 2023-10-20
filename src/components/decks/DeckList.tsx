'use client'
import type { Deck } from '@/types/schema_types'
import DeckEntry from '@/components/decks/DeckEntry'
import ModalWrapper from '@/components/general/ModalWrapper'
import { useState } from 'react'
import { createDeck } from '@/api/db_interactions'
import { useAuth } from '@clerk/nextjs'

export default function DeckList({decks}: {decks: Deck[]}) {
    const [allDecks, setAllDecks] = useState<Deck[]>(decks)
    const { getToken } = useAuth()
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="w-full flex gap-md flex-wrap" id="deck-list">
            {allDecks.length > 0 && allDecks.map(deck => <DeckEntry deck={deck} key={deck.name + deck.id}/>)}
            <div
                className="transition-all p-md border border-primary rounded-sm hover:cursor-pointer hover:border w-full md:w-1/2 lg:w-1/4"
                onClick={() => setModalOpen(true)}
            >
                Create New Deck
            </div>
            {modalOpen && <ModalWrapper>
                <form onSubmit={async (event: React.FormEvent<HTMLFormElement>) => { 
                    event.preventDefault()
                    const formData = new FormData(event.currentTarget)
                    const newDeck = {
                        name: formData.get('name'),
                        description: formData.get('description')
                    }

                    const createdDeck = await createDeck(newDeck, await getToken())
                    console.log(createdDeck)
                    setAllDecks(oldDeckArray => [...oldDeckArray, createdDeck])

                }}>
                    <input name='name' type="text" placeholder="name"/>  
                    <textarea name="description" placeholder="description"/>
                    <button>submit</button>
                </form>
            </ModalWrapper>}
        </div>
    )
}