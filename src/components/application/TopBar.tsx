import NavToggle from '@/components/general/NavToggle'

export default function TopBar() {
    return (
        <header id="top-bar" className="w-full flex items-center p-sm bg-brand">
            <NavToggle label={"open navigation menu"}/>
        </header>
    )
}