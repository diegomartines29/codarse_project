import Image from 'next/image'
import Link from 'next/link'

export interface ICardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

export const Card = ({title, description, image, href}: ICardProps) => {
    return(
        <Link href={href} className='hover:no-underline'>
            <article className='gap-2 p-2 rounded sm:hover:bg-[var(--color-primary)]'>
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={0}
                    draggable={false}
                    className='aspect-video object-cover rounded-4xl'
                />

                <h4 className='font-extrabold text-lg'>
                    {title}
                </h4>

                <p className='line-clamp-3 sm:line-clamp-4 md:line-clamp-5'>
                    {description}
                </p>
            </article>
        </Link>
    )
}
