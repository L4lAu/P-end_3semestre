import { ModalDelItem } from "../ModalDelItem"
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"

import { useItems } from "@/hooks/useItems";

export function CardItems({ item, onDelItem, onEditItem }) {

    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle>{item.titulo}</ItemTitle>
                    <ItemDescription>
                        {item.status}
                    </ItemDescription>
                </ItemContent>
                <ItemActions className={"grid"}>
                    <ModalDelItem onDel={()=> onDelItem(item.id)} onEdit={()=> onEditItem(item.id, item.titulo, item.status)} item={item} />
                    {item.id}
                </ItemActions>
            </Item>

        </div>
    )
}
