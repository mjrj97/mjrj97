import { TypeAnimation } from 'react-type-animation';

import Page from '@/components/Page';

function HomePage() {
  return (
    <Page title="Hjem">
      <section
        id="top"
        className="grid justify-center content-center h-screen hero"
      >
        <div className="flex flex-col gap-1 text-left text-white">
          <h1 className="text-6xl">Martin J. R. Jensen</h1>
          <span className="text-3xl">
            Jeg er{' '}
            <TypeAnimation
              sequence={[
                'programmør',
                1000,
                'webudvikler',
                1000,
                'kemiker',
                1000,
                'kristen',
                4000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="border-b-2 border-light-blue"
            />
          </span>
        </div>
      </section>
      <section id="om">
        <h1>Om</h1>
        <div className="grid grid-cols-8 gap-8">
          <div className="col-start-3 col-span-1">
            <img
              src="/profile-img.png"
              className="w-full rounded-full"
              alt="Profile picture"
            />
          </div>
          <div className="col-span-3">
            <h2 className="text-3xl mb-2">Frontend Developer</h2>
            <p>
              Jeg hedder Martin, og jeg er uddannet datamatiker og kemiker.
              Programmering har været en af mine favorit hobbyer siden jeg gik i
              folkeskole, og siden da, er jeg kun blevet bedre. Jeg har altid
              elsket at programmere computerspil, men har også en stor kærlighed
              til desktop udvikling, og prikket en smule til mobil apps og
              hjemmesider. Jeg er villig til at lære noget nyt, og lever med
              princippet: &quot;Hvis andre har gjort det før, kan jeg også gøre
              det.&quot;
            </p>
          </div>
        </div>
      </section>
      <section id="software">
        <h1>Software</h1>
      </section>
      <section id="projekter">
        <h1>Projekter</h1>
      </section>
      <section id="kontakt">
        <h1>Kontakt</h1>
      </section>
    </Page>
  );
}

export default HomePage;
