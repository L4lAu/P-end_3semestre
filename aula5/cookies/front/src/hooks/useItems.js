"use client"

import {useState, useEffect, useCallback} from "react";
import { api } from "@/lib/api";

export function useItems(itemsInitial) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState(itemsInitial);

    const addItem = async(newItemData) => {
        setLoading(true);
        setError(null);

        try{
            const createdItem =api.post("items", newItemData);

            if(createdItem.error){
                setError("erro ao criar item");
            }
            setItems((prevItems) => [...prevItems, createdItem]);
        }catch(error){
            setError("Erro ao criar item");
        };
    };

    return{items, loading, error, addItem}
};