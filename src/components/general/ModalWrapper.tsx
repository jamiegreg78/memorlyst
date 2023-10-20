export default function ModalWrapper({children}: {children: React.ReactNode}) {

    return (
        <div aria-modal id="create-deck">
            {children}
        </div>
    )
}