'use client'
import { useRouter } from 'next/navigation'
import type { Deck } from '../../types/schema_types'

export default function Deck({deck}: {deck: Deck}) {
    const router = useRouter()

    return (
        <div
            aria-label={`open ${deck.name}`}
            className="transition-all p-md border border-primary rounded-sm hover:cursor-pointer hover:border w-full md:w-1/2 lg:w-1/4"
            tabIndex={0}
            onClick={() => router.push(`/deck/${deck.id}`)}
        >
            {deck.name}
        </div>
    )
}