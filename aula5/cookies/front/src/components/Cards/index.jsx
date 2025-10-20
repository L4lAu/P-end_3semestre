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
import { DropdownPut } from "../ModalEditItem";

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
                <ItemActions className={"grid "}>
                    <div className="flex gap-1">
                        <ModalDelItem onDel={() => onDelItem(item.id)} item={item}/>
                        <DropdownPut onEdit={(id, data) => onEditItem(id, data)} item={item}/>
                    </div>
                    {item.id}
                </ItemActions>
            </Item>

        </div>
    )
}
