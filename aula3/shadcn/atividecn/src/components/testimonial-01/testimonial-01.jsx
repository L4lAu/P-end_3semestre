import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    designation: "Desenvolvedor de Software",
    company: "TechCorp",
    testimonial:
      "Os cursos superaram todas as minhas expectativas. Foi uma das melhores experiências de aprendizado que já tive!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sofia Lima",
    designation: "Analista de Dados",
    company: "InsightTech",
    testimonial:
      "Aprendi muito em pouco tempo. A didática é excelente e os conteúdos são realmente aplicáveis no dia a dia.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Miguel Oliveira",
    designation: "Designer UX",
    company: "DesignPro",
    testimonial:
      "Foi uma das experiências mais enriquecedoras da minha carreira. Os cursos são claros, objetivos e muito bem estruturados.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Souza",
    designation: "Especialista em Marketing",
    company: "BrandBoost",
    testimonial:
      "Simplesmente incrível! Os cursos me ajudaram a evoluir muito profissionalmente. Recomendo de olhos fechados.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martins",
    designation: "Desenvolvedor Full-Stack",
    company: "CodeCrafters",
    testimonial:
      "Conteúdo de altíssimo nível. Sem dúvidas, uma das melhores decisões que tomei foi fazer esses cursos.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Juliana Castro",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "Nunca aprendi tanto em tão pouco tempo. A qualidade do material e a didática dos instrutores são impressionantes.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial01 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2
        className="mb-14 text-5xl md:text-6xl font-semibold text-center tracking-[-0.03em]">
        Testimonials
      </h2>
      <div
        className="max-w-(--breakpoint-xl) mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 bg-accent rounded-xl p-6 break-inside-avoid">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-10">
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank">
                  <TwitterLogo className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TwitterLogo = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default Testimonial01;
