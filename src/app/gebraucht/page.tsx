import Head from 'next/head';
import Image from 'next/image';

function Gebraucht() {
  return (
    <>
      <Head>
        <title>E-Scooter kaufen | WeRoll Tech</title>
        <meta name="description" content="Entdecke hochwertige E-Scooter bei WeRoll Tech. Finde das perfekte Modell für deine Fahrt, ob für den Alltag oder Offroad-Abenteuer." />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            E-Scooter kaufen bei WeRoll
          </h1>

          <h2 className="text-2xl font-semibold text-center mb-4">
            WeRoll Tech – Hochwertige und zuverlässige E-Scooter für jede Fahrt!
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            Entdecke bei <span className="font-bold">WeRoll Tech</span> eine Vielzahl hochwertiger E-Scooter, die perfekt zu deinem Fahrstil und deinen Bedürfnissen passen.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Weißt du genau, welche Art von E-Scooter du suchst? Ein <span className="font-bold">Offroad-E-Scooter</span>? Oder ein Scooter für den täglichen Pendelverkehr? Bei WeRoll Tech hast du die freie Wahl! Unsere <span className="font-bold">straßenzugelassenen Modelle</span> bieten dir Sicherheit und Legalität, während die Modelle <span className="font-bold">ohne Straßenzulassung</span> maximalen Fahrspaß garantieren.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Entdecke Marken wie <span className="font-bold">Joyor, Miniwalker, Leqi, 5TH WHEEL</span> und <span className="font-bold">Evercross</span>. Finde den perfekten Scooter, der dich zuverlässig begleitet.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Unser Service begleitet dich vor und nach dem Kauf. Nach der Zahlung liefern wir deinen neuen Scooter innerhalb von <span className="font-bold">1 bis 5 Tagen</span> direkt zu dir nach Hause.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Erlebe unvergleichlichen Fahrspaß mit unseren E-Scootern! <span className="font-bold">WeRoll</span> – dein Partner für unvergessliche Fahrerlebnisse.
          </p>

          <div className="flex justify-center">
            <Image
              src="/escooters/erscooter1.png"
              alt="Moderner E-Scooter von WeRoll"
              width={800}
              height={450}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gebraucht;