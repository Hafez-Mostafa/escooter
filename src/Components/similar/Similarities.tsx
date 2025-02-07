import Image from 'next/image'


interface SimilarData {
    title: string;
    imageSrc: string;
    link: string;
    description:string;
  }
const Similarities=()=> {

    const similar: SimilarData[] = [
        {
          title: 'E-Scooter kaufen bei Weroll',
          imageSrc: '/images/scooter1.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,
          link: '/escooter-kaufen',
        },
        {
          title: 'E-Scooter mit Straßenzulassung',
          imageSrc: '/images/scooter2.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,link: '/escooter-strassenzulassung',
        },
        {
          title: 'Miniwalker E-Scooter',
          imageSrc: '/images/scooter3.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,link: '/miniwalker-escooter',
        },
        {
          title: 'Ersatzteile',
          imageSrc: '/images/scooter4.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,link: '/ersatzteile',
        },
        {
          title: 'Zubehör für E-Scooter',
          imageSrc: '/images/scooter5.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,link: '/zubehoer',
        },
        {
          title: 'E-Scooter für Kinder',
          imageSrc: '/images/scooter6.png',
          description:`Use an image file to set an app icon by placing a favicon ,
                                    icon or apple-icon image file within your /app directory.`,link: '/escooter-kinder',
        },
      ];
    
     
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