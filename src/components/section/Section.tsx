import { Card, ICardProps } from "@/components/card/Card";

interface iSectionProps {
    title: string;
    variant: 'grid' | 'list'
    items: ICardProps[];
}

export const Section = ({title, items,variant = 'grid'}: iSectionProps) => {
    return(
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">
                {title}
            </h2>
            <ul
                data-variant={variant}
                className="gap-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=list]:sm:grid-flow-col data-[variant=list]:sm:overflow-x-auto">
                {items.map(item => (
                    <li key={item.title} data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                        <Card
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            href={item.href}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
