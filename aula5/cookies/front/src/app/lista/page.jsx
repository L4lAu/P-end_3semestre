import Listagem from "@/components/blocks/Listagem";
import CardItems from "@/components/Cards";
import { apiServer } from "@/lib/api-server";

export default async function Lista() {

    let items = [];
    

    try{
        items = await apiServer.get('items')
        console.log(items)
    }catch (error){

    }

    return (

        <>
            <Listagem itemsInitial={items}/>
        </>
    )
}