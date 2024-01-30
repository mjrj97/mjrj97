import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import FadeInSection from '@/components/FadeInSection';

export default function Resume() {
  return (
    <FadeInSection>
      <div className="resume mb-5">
        <div className="grid grid-cols-10 gap-8">
          <div className="col-start-2 col-span-4" data-aos="fade-up">
            <h2>Uddannelse</h2>
            <div className="resume-item">
              <h3>Datamatiker (AP)</h3>
              <em>
                UCL Erhvervsakademi og Professionshøjskole, Seebladsgade, Odense
              </em>
              <p>
                Uddannelsen bestod af en række projekter med forskellige
                virksomheder, her i blandt: En ny hjemmeside til{' '}
                <Link to="/projekter/4Semester">Den Frie Bibel</Link>, en
                bestillingsapp til en restaurant, og en desktop-app til
                håndtering af inventar.
              </p>
              <p>
                Modtog pris:{' '}
                <i>
                  &quot;Dygtig, behagelig og hjælpsom studerende, som har været
                  positivt engageret på sin årgang&quot;
                </i>
              </p>
              <h4>2021 - 2024</h4>
            </div>
            <div className="resume-item">
              <h3>Bachelor i kemi (BSc.)</h3>
              <em>Syddansk Universitet (SDU), Odense</em>
              <p>
                Batteriteknologi og computerkemi, med kurser i analytisk
                spektroskopi, mikro- og makroskopisk fysisk kemi, miljøkemi,
                organisk kemi og mange flere! Jeg havde også sidefag i fysik,
                hvor jeg bl.a. lærte om elektromagnetisme, kvantemekanik og
                elektronik.
              </p>
              <p>
                Mit bachelorprojekt var &quot;Beregning af ioniseringsenergi ved
                hjælp af det udvidet Koopmans teorem (EKT)&quot;, hvor jeg
                skulle{' '}
                <Link
                  to="https://gitlab.com/dalton/dalton/-/blob/master/DALTON/sirius/siropt.F"
                  target="_blank"
                >
                  programmere
                </Link>{' '}
                i Fortran til Dalton programmet.
              </p>
              <h4>2017 - 2021</h4>
            </div>
            <div className="resume-item">
              <h3>Teknisk studentereksamen (HTX)</h3>
              <em>Hansenberg Gymnasium, Kolding</em>
              <p>
                Jeg deltog i Hansenbergs talentakademi, hvor jeg arbejdede med
                en simulation af vores solsystem i Unity. Det kan downloades
                nede ved{' '}
                <HashLink smooth to="#software">
                  software
                </HashLink>
                .
              </p>
              <h4>2014 - 2017</h4>
            </div>
          </div>
          <div
            className="col-span-4 col-end-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>Erfaring</h2>
            <div className="resume-item">
              <h3>Frontend Webudvikler (Praktik)</h3>
              <em>ChurchDesk, Nørrebrogade 45E, 3., 2200 København N</em>
              <p>
                Mine opgaver bestod af fornyelse af interne værktøjer, udvikling
                af nye features til kunden og vedligehold af eksisterende.
                Primært med TypeScript, React, Ant Design og Recoil.
              </p>
              <h4>2023 aug. - okt.</h4>
            </div>
            <div className="resume-item">
              <h3>Lagermedarbejder</h3>
              <em>Lemvigh-Müller, Blangstedgårdsvej 11-21, 5220 Odense</em>
              <h4>2022 jan. - aug.</h4>
            </div>
            <div className="resume-item">
              <h3>Formand</h3>
              <p>
                <em>Odense LMU, Rosenlunden 15, 5000 Odense</em>
              </p>
              <p>
                Ledelse af en bestyrelse. Et af mine projekter, var at gøre
                foreningen GDPR-venlig. Dette indebar: ny hjemmeside,
                privatlivspolitik og håndtering af samtykkeerklæringer.
              </p>
              <p>
                Vi måtte ikke længere benytte os af Google Drev eller Dropbox
                til fildeling, så derfor udviklede jeg et nyt fildelingssystem
                (Timotheus), som også skulle hjælpe med programplanlægning mm.{' '}
                <Link to="/software/timotheus">Læs mere</Link>.
              </p>
              <h4>2020 - 2022</h4>
            </div>
            <div className="resume-item">
              <h3>Kasserer</h3>
              <em>Odense LMU, Vesterbro 9B, 5000 Odense</em>
              <p>
                Ansvar for foreningens bankkonto, økonomi og indsamling af
                medlemskontingent.
              </p>
              <h4>2018 - 2020</h4>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
