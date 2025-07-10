import type { Metadata } from "next";

import { Section } from "@/components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
};

export default function PageCursos() {
  return (
    // Em uma tela que tenha mais de 880px, o width será limitado em 880px.
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px]">
        <Section
          title="Todos os cursos"
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
