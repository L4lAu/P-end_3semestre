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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ModalAddItem({ onAddItem }) {
    const [titulo, setTitulo] = useState('')
    const [status, setStatus] = useState('')

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Adicionar + </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Adicionando item</DialogTitle>
                        <DialogDescription>
                            Utilize esse modal para adicionar itens a lista.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Titulo</Label>
                            <Input id="title" name="title"
                                value={titulo}
                                onChange={(e) => { setTitulo(e.target.value) }}
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="status">Status</Label>
                            <Input id="status" name="status"
                                value={status}
                                onChange={(e) => { setStatus(e.target.value) }} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault()
                            onAddItem({ titulo, status })
                        }}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
