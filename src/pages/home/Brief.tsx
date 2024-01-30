import FadeInSection from '@/components/FadeInSection';

export default function Brief() {
  return (
    <FadeInSection>
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
    </FadeInSection>
  );
}
