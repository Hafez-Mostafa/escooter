
import { FC } from 'react';
import Card from './Card';

interface CardData {
  title: string;
  imageSrc: string;
  link: string;
  preis:number;
}

const CardGrid: FC = () => {
  // Daten für mehrere Karten
  const cards: CardData[] = [
    {
      title: 'E-Scooter kaufen bei Weroll',
      imageSrc: '/images/scooter1.png',
      preis:250,link: '/escooter-kaufen',
    },
    {
      title: 'E-Scooter mit Straßenzulassung',
      imageSrc: '/images/scooter2.png',
      preis:250,link: '/escooter-strassenzulassung',
    },
    {
      title: 'Miniwalker E-Scooter',
      imageSrc: '/images/scooter3.png',
      preis:250,link: '/miniwalker-escooter',
    },
    {
      title: 'Ersatzteile',
      imageSrc: '/images/scooter4.png',
      preis:250,link: '/ersatzteile',
    },
    {
      title: 'Zubehör für E-Scooter',
      imageSrc: '/images/scooter5.png',
      preis:250,link: '/zubehoer',
    },
    {
      title: 'E-Scooter für Kinder',
      imageSrc: '/images/scooter6.png',
      preis:250,link: '/escooter-kinder',
    },
  ];

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
