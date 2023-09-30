import classNames from 'classnames'
import Link from 'next/link'

export default function NavDrawer() {

    const linkStyles = classNames(
        'w-full',
        'block',
        'py-sm',
        'px-md',
        'rounded-sm',
        'hover:bg-black hover:bg-opacity-5',
        'transition-all'
    )

    return (
        <nav
            id="nav-drawer" 
            className="flex absolute z-10 md:static left-0 top-0 flex-col h-full w-full md:w-80 px-md bg-background-light dark:bg-background-dark border md:border-r-primary transition-all"
        >
            <div className="flex p-md border border-transparent border-b-primary">
                <span>Logo here</span>
            </div>
            <div className="py-md flex flex-col gap-2 grow">
                <Link
                    className={linkStyles} 
                    href="/dashboard"
                >
                    Dashboard
                </Link>
                <Link
                    className={linkStyles} 
                    href="/decks"
                >
                    Decks
                </Link>
                <Link
                    className={linkStyles} 
                    href="/study"
                >
                    Study
                </Link>
            </div>
        </nav>
    )
}