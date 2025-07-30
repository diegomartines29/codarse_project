
import { Card, ICardProps } from '../card/Card';

interface ISectionProps {
  title: string;
  items: ICardProps[];
  variant: 'grid' | 'h-list';
}

export const Section = ({ title, items, variant = 'grid' }: ISectionProps) => {
  const getContainerClasses = () => {
    if (variant === 'grid') {
      return 'grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    } else {
      return 'flex gap-2 overflow-x-auto sm:overflow-x-auto';
    }
  };

  const getItemClasses = () => {
    if (variant === 'grid') {
      return 'w-full';
    } else {
      return 'w-full flex-shrink-0 sm:w-72';
    }
  };

  return (
    <section className='flex flex-col gap-4 px-4'>
      <h2 className='font-bold text-xl'>
        {title}
      </h2>

      <ul className={getContainerClasses()}>
        {items.map(item => (
          <li key={item.title} className={getItemClasses()}>
            <Card
              href={item.href}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
