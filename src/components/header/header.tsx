'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";
import { usePathname } from "next/navigation";


export const Header= () => {
    const currentPath = usePathname();
    const [title, setTitle] = useState('CodarSe');  // Criamos uma variável title com um valor inicial 'CodarSe' e a função que modificará essa variável é a setTitle.
    const [drawer, setDrawer] = useState(false);

    // O useEfect define o título como document.title sempre que o currentPath mudar (A função fica escutando o currentPath)
    useEffect(() => {
        setTitle(document.title)
        setDrawer(false)
    }, [currentPath])

    return (
        <nav className="flex items-center gap-6 justify-start md:justify-center bg-[var(--color-primary)] py-2 sm:py-4 px-6">
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu size={24}/>
            </button>

            <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined}>
                <li className="my-2">
                    <Link href="/" className="border-2 rounded-md py-2 px-2 text-center font-bold">
                        CODARSE
                    </Link>
                </li>

                <li className="hidden sm:flex">
                    <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                        Página inicial
                    </Link>
                </li>
                <li className="hidden sm:flex">
                    <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                        Cursos
                    </Link>
                </li>
                <li className="hidden sm:flex">
                    <Link href="https://google.com" target="_blank" className="flex items-center gap-1">
                        Blog
                        <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>

            <div data-open={drawer} tabIndex={drawer ? undefined : -1} onClick={() => setDrawer(false)} className="bg-gradient-to-r from-[var(--color-background)] fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full">
                <ul className="gap-4 p-4 w-60 bg-[var(--color-background)] h-full" onClick={e => e.stopPropagation()}>
                    <li className="flex py-4">
                        <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                            Página inicial
                        </Link>
                    </li>
                    <li className="flex py-4">
                        <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                            Cursos
                        </Link>
                    </li>
                    <li className="flex py-4">
                        <Link href="https://google.com" target="_blank" className="flex items-center gap-1">
                            Blog
                            <MdOutlineOpenInNew />
                        </Link>
                    </li>
                </ul>
            </div>

            <h1 className="sm:hidden">{title}</h1>
        </nav>
    );
};
