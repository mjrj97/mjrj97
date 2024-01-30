import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

export default function IconLink({
  to,
  title,
  icon,
}: {
  to: string;
  title: string;
  icon: IconDefinition;
}) {
  return (
    <HashLink
      smooth
      to={to}
      className="text-white hover:text-blue-500 transition"
    >
      <div className="flex flex-row gap-4 align-middle leading-none">
        <FontAwesomeIcon icon={icon} className="text-lg text-center w-8" />
        <span className="font-display">{title}</span>
      </div>
    </HashLink>
  );
}
