import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { ReactNode } from 'react';

import MediaLink from './MediaLink';

export default function Sidebar({ children }: { children?: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="h-screen w-96 p-4 bg-dark-blue text-white">
      <div className="flex flex-col gap-8 justify-between h-full">
        <header className="flex flex-col gap-3 text-center">
          <div className="w-full h-28">
            <div className="inline-block aspect-square h-full rounded-full bg-black border-8 border-dark-blue-accent profile-image"></div>
          </div>
          <h2 className="text-2xl">Martin J. R. Jensen</h2>
          <div className="flex flex-row gap-2 justify-center">
            <MediaLink
              icon={faFacebookF}
              href="https://www.facebook.com/martin.j.r.jensen"
            />
            <MediaLink icon={faGithub} href="https://github.com/mjrj97" />
            <MediaLink
              icon={faLinkedinIn}
              href="https://www.linkedin.com/in/mjrj/"
            />
          </div>
        </header>

        <nav className="flex-1">
          <div className="p-6 flex flex-col gap-8">{children}</div>
        </nav>

        <footer className="leading-none text-center">
          <span className="text-sm">Copyright © {year}</span>
          <br />
          <span className="font-display text-xs">
            Martin Johannes Rønnekjær Jensen
          </span>
        </footer>
      </div>
    </div>
  );
}
