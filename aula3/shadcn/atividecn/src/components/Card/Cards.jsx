import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { description } from "../chart-area-interactive";
import { id } from "zod/v4/locales/index.cjs";
import { Button } from "@/components/ui/button";


const cards = [
    {
        id: 1,
        img: "https://netshow.me/wp-content/uploads/2022/03/Plataforma-de-cursos-como-criar-a-sua-e-comecar-a-vender-online-1-1.png",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 2,
        img: "https://doity.com.br/blog/app/uploads/2022/05/DIVULGAR-930x534.png",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 3,
        img: "https://s3-sa-east-1.amazonaws.com/agendor-blog-uploads/2016/01/19232051/cursos-online-vender-mais.jpg",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0w2TzyhlVPd0UwWKm6YYTQC_jGkzy7SuEw&s",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 5,
        img: "https://blog.coursify.me/wp-content/uploads/2017/09/marketing-digital-cursos-online-coursifyme.jpg",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 6,
        img: "https://blog.even3.com.br/wp-content/uploads/2023/01/imagemdedestaque_vendercursoonline.png",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTBF0VN6K7w2DRnRddnrnrgaNPiVhkJ8gzg&s",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
    {
        id: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP_7kSBWxzapbU5GITB9SttPvH6Klv7Fdew&s",
        titulo: "Curso de Tecnologia",
        descricao: "aprenda a usar... com nosso curso de ... horas",
    },
];


export default function Cards() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid grid-cols-1 auto-rows-min gap-4 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-muted/50 aspect-video rounded-xl">
                            <Card className={"w-80 h-70 md:w-55 md:h-73 lg:w-60 lg:h-75"}>
                                <CardHeader>
                                    
                                        <div className="w-auto">
                                            <img src={card.img} alt="img" className="object-cover h-30 w-68 md:h-33 md:w-40 lg:h-35 lg:w-48" />
                                        </div>
                                    <CardTitle>{card.titulo}</CardTitle>
                                    <CardDescription>{card.descricao}</CardDescription>
                                </CardHeader>

                                <div className="mx-auto">
                                    <Button className="w-30 md:w-40 lg:50">
                                        <p>acessar</p>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
        </>
    )
}