import { Section } from "@/components/section/Section";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function PageHome() {
  return (
    // Em uma tela que tenha mais de 880px, o width será limitado em 880px.
    <main className="mt-8 flex justify-center">
      <div className="max-w-full min-[880px]:max-w-[880px]">
      <Section
          title="Veja mais cursos"
          variant="list"
          items={[
            {
              image: 'https://i.ytimg.com/vi/bP47qRVRqQs/mqdefault.jpg',
              title: 'NextJS, TailwindCSS e Typescript',
              description: 'Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube.',
              href: '/cursos/id',
            },
            {
              image: 'https://i.ytimg.com/vi/bP47qRVRqQs/mqdefault.jpg',
              title: 'NextJS, TailwindCSS e Typescript',
              description: 'Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube.',
              href: '/cursos/id',
            },
            {
              image: 'https://i.ytimg.com/vi/bP47qRVRqQs/mqdefault.jpg',
              title: 'NextJS, TailwindCSS e Typescript',
              description: 'Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube.',
              href: '/cursos/id',
            },
            {
              image: 'https://i.ytimg.com/vi/bP47qRVRqQs/mqdefault.jpg',
              title: 'NextJS, TailwindCSS e Typescript',
              description: 'Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube.',
              href: '/cursos/id',
            }
          ]}
        />
      </div>
    </main>
  );
}
