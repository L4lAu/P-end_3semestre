const cards = [
    {
        id: 1,
        imagem: "AI",
        titulo: "o uso degenerativo da IA, como não deve ser usada",
        subtitulo: "Aprenda a usar a IA corretamente",
        tags: "#curso",
    },
    {
        id: 2,
        imagem: "AI",
        titulo: "como falar da forma correta com a IA",
        subtitulo: "Aprenda a usar a IA corretamente",
    },
    {
        id: 3,
        imagem: "AI",
        titulo: "Como programar sua prorpia IA",
        subtitulo: "Aprenda programar sua IA do 0",
    },
    {
        id: 4,
        imagem: "Phyton",
        titulo: "Phyton basico",
        subtitulo: "Aprenda phyton basico",
    },
    {
        id: 5,
        imagem: "Phyton",
        titulo: "Phyton avançado",
        subtitulo: "Aprenda phyton do 0 ao Pro",
    },
    {
        id: 6,
        imagem: "Phyton",
        titulo: "Phyton avançado",
        subtitulo: "Aprenda phyton do 0 ao Pro",
    },
    {
        id: 7,
        imagem: "Phyton",
        titulo: "Phyton avançado",
        subtitulo: "Aprenda phyton do 0 ao Pro",
    },
    {
        id: 8,
        imagem: "Phyton",
        titulo: "Phyton avançado",
        subtitulo: "Aprenda phyton do 0 ao Pro",
    },
];


export default function CARDS() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-2 lg:m-10 min-w-90">
                {cards.map((card) => (
                    <div key={card.id} className="grid lg:flex  bg-white text-black min-w-30 md:min-w-45 lg:max-w-110 max-h-90 md:max-h-100 lg:max-h-110 rounded-2xl">
                        <div className="min-w-40">
                            <div className="border border-black m-2 flex justify-center min-h-20 items-center text-2xl font-extrabold text-white bg-gradient-to-br from-green-300 to-black">
                                {card.imagem}
                            </div>
                            <div>
                                {card.tags}
                            </div>
                            
                        </div>

                        <div>
                            <div className="font-black text-md m-2">
                                {card.titulo}
                            </div>
                            <div className="text-xs lg:text-md md:text-sm m-2">
                                {card.subtitulo}
                            </div>

                            <div className="m-2 flex justify-end h-auto">
                                <button className="mx-2 text-white bg-green-600 hover:bg-green-700 cursor-pointer p-2 rounded-md border border-black">acessar</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
};

