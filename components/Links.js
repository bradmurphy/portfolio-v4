import Link from 'next/link';
import {
  link,
  link__resume__link,
  link__resume__page,
  link__resume__sidebar__link,
  link__company,
  link__submit,
  link__error
} from '../styles/modules/links.module.sass';

const BaseLink = (props) => {
  const { href, children, disabled, hidden, mode, onClick, target } = props;

  const disabledStyle = disabled
    ? {
        cursor: 'none',
        pointerEvents: 'none',
        opacity: '0.75'
      }
    : {};

  let linkContent = null;

  switch (mode) {
    case 'blinkk':
      linkContent = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={[link, link__company]}
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
        <Link href={href} rel="noopener noreferrer">
          <a className={link}>{children}</a>
        </Link>
      );
  }

  return linkContent;
};

export const BlinkkLink = (props) => <BaseLink {...props} mode="blinkk" />;
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
