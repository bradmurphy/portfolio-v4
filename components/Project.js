import Image from 'next/image';
import {
  project,
  project__inner,
  project__logo
} from '../styles/modules/project.module.sass';
import {
  typography__copy,
  typography__copy__project,
  typography__copy__tech
} from '../styles/modules/typography.module.sass';

// components
import { ProjectLink } from './Links';

const Project = (props) => {
  const { children, date, headline, logo, tech, type, url, width } = props;

  const style = {
    width: `${width}px`,
    background: 'transparent',
    padding: 0,
    boxSizing: 'border-box'
  };

  const textStyles = `${typography__copy} ${typography__copy__project}`;
  const techStyles = `${textStyles} ${typography__copy__tech}`;

  return (
    <article className={project}>
      <a
        href={url}
        target="_blank"
        className={project__logo}
        style={style}
        rel="noopener noreferrer"
      >
        <Image
          src={logo.src}
          alt={headline}
          height={logo.height}
          width={logo.width}
        />
      </a>
      <div className={project__inner}>
        <div>
          <p className={textStyles}>
            <strong>Project:</strong>{' '}
            <ProjectLink href={url} target="_blank">
              {headline}
            </ProjectLink>
          </p>
          <p className={textStyles}>
            <strong>Type:</strong> {type}
          </p>
          <p className={textStyles}>
            <strong>Date:</strong> {date}
          </p>
          <p className={textStyles}>
            <strong>Notes:</strong> {children}
          </p>
        </div>
        <p className={techStyles}>{tech.join(', ')}</p>
      </div>
    </article>
  );
};

export default Project;
