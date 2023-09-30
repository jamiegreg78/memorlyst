'use client'
import { FiMenu } from 'react-icons/fi'

export default function NavToggle({label} : {
    label: string,
}) {

    return (
        <button
            aria-label={label} 
            className="p-sm rounded-sm text-white hover:bg-opacity-10
            hover:bg-white border border-1 border-transparent
            hover:border-outline hover:border-opacity-30">
            <FiMenu size={24}/>
        </button>
    )
}