import Head from 'next/head';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function HomePage(props) {
  const { aboutProps, workProps, contactProps } = props;

  return (
    <>
      <Head>
        <title>Brad Murphy | UX Engineer</title>
      </Head>

      <main id="wrap">
        <About {...aboutProps} />
        <Work projects={workProps} />
        <Contact {...contactProps} />
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      aboutProps: {
        avatar: {
          alt: 'Brad Murphy',
          height: 476,
          src: '/images/avatar.jpg',
          width: 560
        },
        work: {
          alt: 'Blinkk',
          height: 100,
          link: 'https://blinkk.com/',
          src: '/images/logo-blinkk.jpeg',
          width: 100
        },
        logo: {
          alt: `Brad Murphy's Logo`,
          height: 120,
          src: '/images/logo.png',
          width: 120
        },
        name: 'Brad Murphy',
        title: 'UX Engineer'
      },
      workProps: [
        {
          logo: {
            height: 46,
            src: '/images/logo-google.png',
            width: 135
          },
          headline: 'Google Maps Platform',
          type: 'Website',
          url: 'https://mapsplatform.google.com/',
          date: 'October 2021',
          copy: `Create real world and real time experiences for your customers with dynamic maps, routes &amp; places APIs from Google Maps Platform’s location solutions.`,
          tech: ['HTML5', 'Nunjucks', 'CSS3', 'SASS', 'TypeScript']
        },
        {
          logo: {
            height: 38,
            src: '/images/logo-teachable.svg',
            width: 220
          },
          headline: 'Teachable Blog',
          type: 'Website',
          url: 'https://teachable.com/blog',
          date: 'April 2021',
          copy: `Read the latest Teachable blog posts on marketing tips, interviews, money news, online course info, and more for entrepreneurs and creators.`,
          tech: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'WordPress', 'PHP']
        },
        {
          logo: {
            height: 78,
            src: '/images/logo-netflix.png',
            width: 185
          },
          headline: 'Fuller My House',
          type: 'Website',
          url: 'http://fh.bradmurphydev.com/',
          date: 'February 2020',
          copy: `Create and share your own Fuller House family logo with FullerMyHouse.`,
          tech: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React']
        },
        {
          logo: {
            height: 49,
            src: '/images/logo-sg.png',
            width: 230
          },
          headline: 'Sabrina Girvan',
          type: 'Website',
          url: 'http://sabrinagirvan.com',
          date: 'August 2019',
          copy: `Inspiring people to live healthy & happy every day.`,
          tech: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React', 'PHP']
        },
        {
          logo: {
            height: 80,
            src: '/images/logo-hook.png',
            width: 160
          },
          headline: 'Stitches',
          type: 'Web App',
          url: 'http://hookerz.github.io/stitches',
          date: 'March 2016',
          copy: `A Web App for quickly creating sprite sheets.`,
          tech: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Polymer', 'GSAP']
        }
      ],
      contactProps: {
        reachOut: 'Reach out anytime for coffee or conversation.',
        emailDetails: {
          link: 'mailto:brad@bradmurphy.dev?&subject=BRADMURPHY.DEV | Website Inquiry',
          address: 'brad@bradmurphy.dev'
        },
        social: [
          {
            alt: 'GitHub',
            height: 42,
            link: 'https://github.com/bradmurphy',
            logo: '/images/github.png',
            width: 42
          },
          {
            alt: 'LinkedIn',
            height: 42,
            link: 'https://www.linkedin.com/in/bmdev/',
            logo: '/images/linkedin.png',
            width: 42
          }
        ],
        resume: {
          link: '/resume/',
          text: 'View Resume'
        }
      }
    }
  };
}
