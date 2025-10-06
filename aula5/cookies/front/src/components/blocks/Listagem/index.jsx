"use client"
import CardItems from "@/components/Cards";
import { ModalAddItem } from "@/components/ModalAddItem";
import { useItems } from "@/hooks/useItems";

export default function Listagem({ itemsInitial }) {
    const { items, loading, error, addItem } = useItems(itemsInitial)

    return (
        <>

            {items && items.map((item) => {
                return <CardItems key={item.id} item={item}/>
            })}

            <ModalAddItem onAddItem={(newItem) => { addItem(newItem) }} />
        </>
    )
}
