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
        titulo: "Curso de Economia Digital",
        descricao: "Aprenda a entender e aplicar os conceitos da nova economia baseada em tecnologia e dados com nosso curso completo de 20 horas.",
    },
    {
        id: 2,
        img: "https://doity.com.br/blog/app/uploads/2022/05/DIVULGAR-930x534.png",
        titulo: "Curso de Marketing Digital",
        descricao: "Domine as principais estratégias de divulgação online, redes sociais e tráfego pago com nosso curso intensivo de 18 horas.",
    },
    {
        id: 3,
        img: "https://s3-sa-east-1.amazonaws.com/agendor-blog-uploads/2016/01/19232051/cursos-online-vender-mais.jpg",
        titulo: "Curso de Excel Avançado",
        descricao: "Aprenda a criar dashboards, usar fórmulas complexas e automatizar planilhas com nosso curso prático de 15 horas.",
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0w2TzyhlVPd0UwWKm6YYTQC_jGkzy7SuEw&s",
        titulo: "Curso de Edição de Vídeos",
        descricao: "Aprenda a editar vídeos com qualidade profissional utilizando softwares como Adobe Premiere e CapCut com nosso curso de 12 horas.",
    },
    {
        id: 5,
        img: "https://blog.coursify.me/wp-content/uploads/2017/09/marketing-digital-cursos-online-coursifyme.jpg",
        titulo: "Curso de Computação em Nuvem",
        descricao: "Entenda os principais serviços de nuvem como AWS, Azure e Google Cloud com nosso curso completo de 22 horas.",
    },
    {
        id: 6,
        img: "https://blog.even3.com.br/wp-content/uploads/2023/01/imagemdedestaque_vendercursoonline.png",
        titulo: "Curso de Power BI",
        descricao: "Aprenda a criar relatórios e dashboards interativos com Power BI e transforme dados em decisões com nosso curso de 16 horas.",
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTBF0VN6K7w2DRnRddnrnrgaNPiVhkJ8gzg&s",
        titulo: "Curso de Vendas Digitais",
        descricao: "Aprenda técnicas de vendas online, copywriting e funis de conversão com nosso curso direto ao ponto de 14 horas.",
    },
    {
        id: 8,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP_7kSBWxzapbU5GITB9SttPvH6Klv7Fdew&s",
        titulo: "Curso de Documentação Digital",
        descricao: "Aprenda a organizar, digitalizar, armazenar e proteger documentos no ambiente digital com nosso curso de 10 horas.",
    },
];


export default function Cards() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid grid-cols-1 auto-rows-min gap-4 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-muted/50 aspect-video rounded-xl w-72 md:w-82 ">
                            <Card className={"w-full h-80 md:h-83 lg:h-85"}>
                                <CardHeader>

                                    <div className="w-auto">
                                        <img src={card.img} alt="img" className="object-cover h-30 w-72 md:h-33 md:w-82 lg:h-35 lg:w-92" />
                                    </div>
                                    <CardTitle>{card.titulo}</CardTitle>
                                    <CardDescription>{card.descricao}</CardDescription>
                                </CardHeader>


                                <div className="mx-auto" href="/dashboard">
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