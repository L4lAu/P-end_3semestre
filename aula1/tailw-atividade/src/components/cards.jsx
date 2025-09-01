const cards = [
    {
        id: 1,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 2,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 3,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 4,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 5,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 6,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 7,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
    {
        id: 8,
        imagem: "lalau",
        titulo: "titulo",
        subtitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum maxime, porro sed a repellat, omnis culpa fugit illo, odit temporibus placeat dolor adipisci delectus iure autem necessitatibus incidunt sapiente.",
    },
];


export default function CARDS() {
    return (
        <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 lg:m-10 min-w-90">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-white text-black min-w-30 md:min-w-45 lg:max-w-90 max-h-90 md:max-h-100 lg:max-h-110 rounded-2xl">
                            <div className="border border-black m-2 flex justify-center min-h-20 items-center text-2xl font-extrabold text-white bg-gradient-to-br from-green-300 to-black">
                                {card.imagem}
                            </div>
                            <div className="font-black text-xl m-2">
                                {card.titulo}
                            </div>

                            <div className="text-xs lg:text-md md:text-sm m-2">
                                {card.subtitulo}
                            </div>
                            
                            <div className="m-2 flex justify-end items-end">
                                <button className="mx-2 text-white bg-green-600 hover:bg-green-700 cursor-pointer p-2 rounded-md border border-black">acessar</button>
                            </div>

                        </div>
                    ))}
                </div>

        </>
    )
};

