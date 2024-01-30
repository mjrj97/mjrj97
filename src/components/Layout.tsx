import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  faComputer,
  faEnvelope,
  faFileLines,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from './sidebar/Sidebar';
import Body from './Body';
import IconLink from './sidebar/IconLink';

export default function Layout() {
  return (
    <div className="flex flex-row overflow-hidden">
      <Sidebar>
        <IconLink to="#top" title="Hjem" icon={faHouse} />
        <IconLink to="#om" title="Om" icon={faUser} />
        <IconLink to="#software" title="Software" icon={faComputer} />
        <IconLink to="#projekter" title="Projekter" icon={faFileLines} />
        <IconLink to="#kontakt" title="Kontakt" icon={faEnvelope} />
      </Sidebar>
      <Body>
        <Suspense>
          <Outlet />
        </Suspense>
      </Body>
    </div>
  );
}
