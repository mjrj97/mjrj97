import { TypeAnimation } from 'react-type-animation';

import Resume from './Resume';
import Brief from './Brief';
import SoftwareList from './software/SoftwareList';

import Page from '@/components/Page';

function HomePage() {
  return (
    <Page title="Hjem" description="Min personlige portfolio">
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
        <Brief />
        <hr className="my-12 mx-12" />
        <Resume />
      </section>
      <section id="software">
        <h1>Software</h1>
        <div className="grid grid-cols-10">
          <div className="col-start-3 col-span-6">
            <SoftwareList />
          </div>
        </div>
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
