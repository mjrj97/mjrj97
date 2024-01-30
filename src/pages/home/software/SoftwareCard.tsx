import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SoftwareCardProps {
  title: string;
  imgPath: string;
  description?: string;
  version: string;
  lastUpdate: string;

  readMoreLink?: string;
  windowsLink?: string;
  macOSLink?: string;
}

export default function SoftwareCard(props: SoftwareCardProps) {
  return (
    <div className="card">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <img className="p-4" src={props.imgPath} />
        </div>
        <div className="col-span-9 p-2">
          <h2 className="text-2xl mb-2">{props.title}</h2>
          {props.description && <p className="mb-2">{props.description}</p>}
          <p className="mb-2">
            <b>Version:</b> {props.version}
            <br />
            <b>Sidst opdateret:</b> {props.lastUpdate}
          </p>
          {(props.readMoreLink || props.windowsLink || props.macOSLink) && (
            <div className="inline-flex gap-2 flex-wrap mt-3">
              {props.readMoreLink && (
                <a href={props.readMoreLink} className="button">
                  <FontAwesomeIcon icon={faFileLines} />
                  Læs mere
                </a>
              )}
              {props.windowsLink && (
                <a
                  href={props.windowsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button success"
                >
                  <FontAwesomeIcon icon={faWindows} />
                  Windows
                </a>
              )}
              {props.macOSLink && (
                <a
                  href={props.macOSLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button success"
                >
                  <FontAwesomeIcon icon={faApple} />
                  macOS
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
