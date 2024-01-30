import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function MediaLink({
  icon,
  href,
}: {
  icon: IconProp;
  href: string;
}) {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <div className="w-8 h-8 rounded-full grid justify-center content-center transition bg-dark-blue-accent hover:bg-cyan-800 ">
        <FontAwesomeIcon icon={icon} />
      </div>
    </Link>
  );
}
