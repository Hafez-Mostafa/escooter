
// import Image from 'next/image';

// export default function HomePage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto py-10 px-4">
//         <h1 className="text-4xl font-bold text-center mb-6">
//           E-Scooter kaufen bei WeRoll
//         </h1>

//         <h2 className="text-2xl font-semibold text-center mb-4">
//           WeRoll Tech – Hochwertige und zuverlässige E-Scooter für jede Fahrt!
//         </h2>

//         <p className="text-lg text-gray-700 mb-6 text-center">
//           Entdecke bei <span className="font-bold">WeRoll Tech</span> eine Vielzahl hochwertiger E-Scooter, die perfekt zu deinem Fahrstil und deinen Bedürfnissen passen.
//         </p>

//         <p className="text-lg text-gray-700 mb-6">
//           Weißt du genau, welche Art von E-Scooter du suchst? Ein <span className="font-bold">Offroad-E-Scooter</span>? Oder ein Scooter für den täglichen Pendelverkehr? Bei WeRoll Tech hast du die freie Wahl! Mit unseren <span className="font-bold">straßenzugelassenen Modellen</span> kannst du legal und sicher unterwegs sein, während unsere <span className="font-bold">ohne Straßenzulassung</span> maximalen Fahrspaß bieten.
//         </p>

//         <p className="text-lg text-gray-700 mb-6">
//           Unsere Auswahl an Marken bietet dir die Möglichkeit, den perfekten Scooter für dich zu finden. <span className="font-bold">Joyor, Miniwalker, Leqi, 5TH WHEEL</span> und <span className="font-bold">Evercross</span> – einer davon wird dein zuverlässiger Begleiter im Alltag.
//         </p>

//         <p className="text-lg text-gray-700 mb-6">
//           Für alle, die unsere Website besuchen, bieten wir erstklassigen Service – sowohl vor als auch nach dem Kauf. Nach erfolgreicher Zahlung sorgen wir dafür, dass dein neues Scooter innerhalb von <span className="font-bold">1 bis 5 Tagen</span> schnell bei dir ankommt.
//         </p>

//         <p className="text-lg text-gray-700 mb-8">
//           Erlebe das unvergleichliche Fahrgefühl, das unsere E-Scooter dir bieten! <span className="font-bold">WeRoll</span> – dein Partner für unvergessliche E-Scooter-Erlebnisse.
//         </p>

//         <div className="flex justify-center">
//           <Image
//             src="/images/image.png"
//             alt="E-Scooter"
//             width={800}
//             height={450}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/scooter1.png',
    '/images/scooter2.png',
     '/images/scooter3.png',
    '/images/scooter4.png',
    // 'images/escooter5.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          E-Scooter kaufen bei WeRoll
        </h1>

        <h2 className="text-2xl font-semibold text-center mb-4">
          WeRoll Tech – Hochwertige und zuverlässige E-Scooter für jede Fahrt!
        </h2>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Entdecke bei <span className="font-bold">WeRoll Tech</span> eine Vielzahl hochwertiger E-Scooter, die perfekt zu deinem Fahrstil und deinen Bedürfnissen passen.
        </p>

        <div className="relative flex justify-center items-center mb-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`E-Scooter ${index + 1}`}
              width={800}
              height={450}
              className={`rounded-lg shadow-lg transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            />
          ))}
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Weißt du genau, welche Art von E-Scooter du suchst? Ein <span className="font-bold">Offroad-E-Scooter</span>? Oder ein Scooter für den täglichen Pendelverkehr? Bei WeRoll Tech hast du die freie Wahl! Mit unseren <span className="font-bold">straßenzugelassenen Modellen</span> kannst du legal und sicher unterwegs sein, während unsere <span className="font-bold">ohne Straßenzulassung</span> maximalen Fahrspaß bieten.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Unsere Auswahl an Marken bietet dir die Möglichkeit, den perfekten Scooter für dich zu finden. <span className="font-bold">Joyor, Miniwalker, Leqi, 5TH WHEEL</span> und <span className="font-bold">Evercross</span> – einer davon wird dein zuverlässiger Begleiter im Alltag.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Für alle, die unsere Website besuchen, bieten wir erstklassigen Service – sowohl vor als auch nach dem Kauf. Nach erfolgreicher Zahlung sorgen wir dafür, dass dein neues Scooter innerhalb von <span className="font-bold">1 bis 5 Tagen</span> schnell bei dir ankommt.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Erlebe das unvergleichliche Fahrgefühl, das unsere E-Scooter dir bieten! <span className="font-bold">WeRoll</span> – dein Partner für unvergessliche E-Scooter-Erlebnisse.
        </p>
      </div>
    </div>
  );
}
