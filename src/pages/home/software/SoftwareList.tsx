import SoftwareCard from './SoftwareCard';

import FadeInSection from '@/components/FadeInSection';

export default function SoftwareList() {
  return (
    <div className="flex flex-col gap-12">
      <FadeInSection>
        <SoftwareCard
          title="Timotheus"
          imgPath="/img/software/Timotheus.png"
          description="Et program lavet til foreninger som behandler følsomme personoplysninger. Inkludere et kalendersystem, fildelingssystem, opbevaring af samtykkeerklæringer og mere!"
          version="1.3.0"
          lastUpdate="19-04-2023"
          readMoreLink="/software/timotheus"
          windowsLink="/files/software/TimotheusWindowsInstaller.msi"
          macOSLink="/files/software/TimotheusMacInstaller.zip"
        />
      </FadeInSection>
      <FadeInSection>
        <SoftwareCard
          title="Terrastellar"
          imgPath="/img/software/Terrastellar.png"
          description="En simulation af vores solsystem. Navnet kommer af de latinske ord for jord og sol, og skal betyde 'Jordens sol'. Programmet er brugbart til at få en forståelse af solsystemet størrelse. Man kan flyve fra planet til planet og læse om deres karakteriska."
          version="1.0.1"
          lastUpdate="19-07-2018"
          readMoreLink="/software/terrastellar"
          windowsLink="/files/software/TerraStellar.zip"
        />
      </FadeInSection>
      <FadeInSection>
        <SoftwareCard
          title="Hygge"
          imgPath="/img/software/Hygge.png"
          description="Et lille hyggeligt multiplayer banko spil, som kan spilles online over internettet med dine venner."
          version="1.0.0"
          lastUpdate="12-05-2020"
          windowsLink="/files/software/Hygge.exe"
        />
      </FadeInSection>
    </div>
  );
}
