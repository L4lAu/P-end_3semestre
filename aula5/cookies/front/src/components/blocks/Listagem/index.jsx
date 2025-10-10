"use client"
import { CardItems } from "@/components/Cards";
import { ModalAddItem } from "@/components/ModalAddItem";
import { useItems } from "@/hooks/useItems";

export default function Listagem({ itemsInitial }) {
    const { items, loading, error, addItem } = useItems(itemsInitial)
    const delItem = useItems()

    return (
        <>
            <div className="m-10 grid gap-10">

                <ModalAddItem onAddItem={(newItem) => { addItem(newItem) }} />
                <div className="grid grid-cols-4 gap-5">
                    {items && items.map((item) => {
                        return <CardItems key={item.id} item={item} onDelItem={delItem} />
                    })}
                </div>
            </div>

        </>
    )
}
