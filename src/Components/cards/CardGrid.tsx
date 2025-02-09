
import { FC } from 'react';
import Card from './Card';
import { cardData } from '@/utils/data/data';
import { ICardData } from '@/utils/types/types';


const CardGrid: FC = () => {
  // Daten für mehrere Karten
  const cards: ICardData[] = cardData;
    return (
    <div className='grid grid-cols-2 col-span-4 gap-4'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          link={card.link}
          preis={card.preis}

        />
      ))}
    </div>
  );
};

export default CardGrid;
