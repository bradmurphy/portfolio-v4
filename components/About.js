import Image from 'next/image';
import {
  about,
  header,
  media__avatar,
  company
} from '../styles/modules/about.module.sass';
import {
  title__headline,
  typography__copy
} from '../styles/modules/typography.module.sass';

// components
import { BlinkkLink } from './Links';

const About = (props) => {
  const { name, title, logo, avatar, work } = props;

  const lightVariant = { variant: 'light' };

  return (
    <section className={about}>
      <div className={header}>
        <Image
          src={logo.src}
          alt={logo.alt}
          height={logo.height}
          width={logo.width}
        />
        <h1 className={title__headline}>
          {name}
          <br /> <strong>{title}</strong>
        </h1>
      </div>
      <div className={media__avatar}>
        <Image
          src={avatar.src}
          alt={name}
          height={avatar.height}
          width={avatar.width}
        />
      </div>
      <p className={typography__copy} {...lightVariant}>
        I always find writing about myself to be a rather difficult task.
        However -- this is my portfolio, so I suppose I should say a few things.
      </p>
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className={company}
      >
        <Image
          src={work.src}
          alt={work.alt}
          height={work.height}
          width={work.width}
        />
      </a>
      <p className={typography__copy} {...lightVariant}>
        I currently reside in Canton, Georgia and work for{' '}
        <BlinkkLink href={work.link}>{work.alt}</BlinkkLink> with an amazing
        worldwide team.
      </p>
      <p className={typography__copy} {...lightVariant}>
        Aside from programming, I tend to divide my time between enjoying good
        food and cocktails with friends or hanging out with my miniature
        schnauzers, Atlas & Siva.
      </p>
      <p className={typography__copy} {...lightVariant}>
        When we&apos;re not roaming the city, you can usually find us crashed
        out on the couch watching the next binge-worthy show on Netflix. And of
        course, last but not least -- jamming out to some good tunes.
      </p>
      <p className={typography__copy} {...lightVariant}>
        This is where I keep select digital creations that I find fun (and still
        exist), unique and/or interesting. Feel free to explore at your leisure.
      </p>
    </section>
  );
};

export default About;
