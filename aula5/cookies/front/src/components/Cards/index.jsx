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

export function CardItems({ item }) {
    const { delItem } = useItems()

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
                    <Button variant="outline" size="sm">
                        <ModalDelItem onDelItem={delItem(item)} item={item} />
                    </Button>
                    {item.id}
                </ItemActions>
            </Item>

        </div>
    )
}
