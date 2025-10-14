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
            const createdItem = api.post("items", newItemData);

            if(createdItem.error){
                setError("erro ao criar item");
            }
            setItems((prevItems) => [...prevItems, createdItem]);
        }catch(error){
            setError("Erro ao criar item");
        };
    };

    const delItem = async (id) => {
        setLoading(true);
        setError(null);

        try{
            const deleteItem = api.del(`items/${id}`);

            if(deleteItem.error) {
                 setError("erro ao exluir item");
                 return;
            }

            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error){
            setError("erro ao deletar: ", error);
        } finally {
            setLoading(false);
        }
    }

    const updateItem = async (id, itemEditado) => {
        setLoading(true);
        setError(null);
        
        try{
            const editItem = api.put(`items/${id}`, itemEditado);

            if(editItem.error){
                setError("erro ao editar item");
                return;
            }

            setItems((prevItems) => prevItems.map((item) => {
                if(item.id === id) {
                    return editItem;
                };
                return item;
            }));
            
        }catch (error){
            setError("erro ao editar: ", error);
        } finally{
            setLoading(false)
        }
    }

    return{items, loading, error, addItem, delItem, updateItem}
};