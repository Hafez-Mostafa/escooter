import { Similar } from '@/utils/data/data';
import { ISimilarData } from '@/utils/types/types';
import Image from 'next/image'



const Similarities=()=> {

   
      const similar: ISimilarData[] = Similar;
    
     
  return (
    <>
    <div className="  mx-auto grid grid-cols-3 gap-4 p-6">
        {similar.map((item,index)=>{

          return(
            <div key={index}>
            <div className=" overflow-hidden rounded-2xl mb-4 relative  min-h-300 min-w-300">
                <Image
                    className="transition-transform duration-300 hover:scale-110 object-cover"
                    src={item.imageSrc}
                    alt={item.title}
                    width={300}
                    height={300}
                />
            </div>

            <h2 className="font-semibold text-pink-500">{item.title}</h2>
            <p className="text-md text-gray-600 my-4">{item.description}</p>
        </div>

          )



        })}
        </div>
       
                 
  </>)

    
}

export default Similarities