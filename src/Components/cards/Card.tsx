
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { ICardData } from '@/utils/types/types';


  // <div className=" ">
  
const Card: FC<ICardData> = ({ title, imageSrc, link ,preis}) => {
  return (
    <Link href={link} >
      <div className="overflow-hidden rounded-2xl mb-4 relative  min-h-300 min-w-300">
        <Image  className="transition-transform duration-300 hover:scale-110 object-cover" 
        src={imageSrc} alt={title}  objectFit="cover"  width={300}
                    height={300} />
      </div>
      <h3 className="p-3 font-extrabold text-pink-500  text-lg">{title}</h3>
      <p className=" p-3 font-extrabold text-amber-600  text-md">  {preis} € </p>

    </Link>

  );
};


export default Card;
