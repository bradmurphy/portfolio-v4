import Link from 'next/link';
import {
  link,
  link__resume__link,
  link__resume__page,
  link__resume__sidebar__link,
  link__company
} from '../styles/modules/links.module.sass';

const BaseLink = (props) => {
  const { href, children, mode, target } = props;

  let linkContent = null;

  switch (mode) {
    case 'company':
      linkContent = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} ${link__company}`}
        >
          {children}
        </a>
      );
      break;
    case 'view-resume':
      linkContent = (
        <Link href={href}>
          <a className={`${link} ${link__resume__link}`}>{children}</a>
        </Link>
      );
      break;
    case 'resume-download':
      linkContent = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} ${link__resume__page}`}
        >
          {children}
        </a>
      );
      break;
    case 'resume':
      linkContent = (
        <Link href={href}>
          <a className={`${link} ${link__resume__sidebar__link}`}>{children}</a>
        </Link>
      );
      break;
    case 'resume-external':
      linkContent = (
        <a
          href={href}
          className={`${link} ${link__resume__sidebar__link}`}
          target="__blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
      break;
    default:
      linkContent = (
        <a
          href={href}
          target={target}
          className={link}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
  }

  return linkContent;
};

export const BlinkkLink = (props) => <BaseLink {...props} mode="company" />;
export const ProjectLink = (props) => <BaseLink {...props} />;
export const ViewResumeLink = (props) => (
  <BaseLink {...props} mode="view-resume" />
);
export const ResumeDownloadLink = (props) => (
  <BaseLink {...props} mode="resume-download" />
);
export const ResumeExternalLink = (props) => (
  <BaseLink {...props} mode="resume-external" />
);
export const ResumeLink = (props) => <BaseLink {...props} mode="resume" />;
