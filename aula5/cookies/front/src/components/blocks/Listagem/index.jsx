"use client"
import { CardItems } from "@/components/Cards";
import { ModalAddItem } from "@/components/ModalAddItem";
import { useItems } from "@/hooks/useItems";

export default function Listagem({ itemsInitial }) {
    const { items, loading, error, addItem, delItem, editItem} = useItems(itemsInitial);

    return (
        <>
            <div className="m-10 grid gap-10">

                <ModalAddItem onAddItem={(newItem) => { addItem(newItem) }} />
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                    {items && items.map((item) => {
                        return <CardItems key={item.id} item={item} onDelItem={delItem} onEditItem={(id, data) => editItem(id, data)} />
                    })}
                </div>
            </div>

        </>
    )
}
