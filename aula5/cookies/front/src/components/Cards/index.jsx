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
        <div className="w-full flex-col items-start gap-4 m-2">
            <Item variant="outline">
                <ItemContent className="flex-grid h-max">
                    <ItemTitle className="text-md font-semibold text-gray-900 dark:text-gray-50 break-words">
                        {item.titulo}
                    </ItemTitle>
                    <ItemDescription className="text-sm text-gray-600 dark:text-gray-400">
                        {item.status}
                    </ItemDescription>
                </ItemContent>

                
                <ItemActions className="flex flex-col md:grid items-center gap-2 mt-4 md:mt-0">
                    <div className="flex gap-2">
                        <ModalDelItem onDel={() => onDelItem(item.id)} item={item} />
                        <DropdownPut onEdit={(id, data) => onEditItem(id, data)} item={item} />
                    </div>
                    {item.id}
                </ItemActions>
            </Item>
        </div>
    )
}
