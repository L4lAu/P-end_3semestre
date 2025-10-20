"use client"


import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog"
import { DialogFooter, DialogHeader } from "../ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"

export function DropdownPut({ item, onEdit}) {
    const [isOpen, setIsOpen] = useState(false)
    const [titulo, setTitulo] = useState(item.titulo || "");
    const [status, setStatus] = useState(item.status || "");

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogTrigger asChild>
                    <Button variant="outline">editar</Button>
                </DialogTrigger>


            <DialogContent>
                <form >
                    <DialogHeader>
                        <DialogTitle>Editar item {item.id}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Título</Label>
                            <Input
                                id="title"
                                name="title"
                                value={titulo} 
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="status">Status</Label>
                            <Select value={status} onValueChange={setStatus}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione o status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="Ativo">Ativo</SelectItem>
                                        <SelectItem value="Pendente">Pendente</SelectItem>
                                        <SelectItem value="Concluído">Concluído</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onEdit(item.id, { titulo, status });
                                        setIsOpen(false);;
                                    }}
                                >
                                    Enviar
                                </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}