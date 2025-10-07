"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Title } from "@radix-ui/react-dialog"
import { useState } from "react"

export function ModalDelItem({ onDelItem, item }) {
    const [titulo, setTitulo] = useState('')
    const [status, setStatus] = useState('')

    return (
        <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">deletar</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>deseja deletar esse item?</DialogTitle>
                        <DialogDescription>
                            Utilize esse modal para deletar itens da lista.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Title htmlFor="title">{item.titulo}</Title>
                        </div>
                        <div className="grid gap-3">
                            <DialogDescription htmlFor="status">{item.status}</DialogDescription>
                        </div>
                        <div className="grid gap-3">
                            <DialogDescription htmlFor="status">{item.id}</DialogDescription>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                            onDelItem(item)
                        }}>confirmar deletar</Button>
                    </DialogFooter>
                </DialogContent>
        </Dialog>
    )
}
