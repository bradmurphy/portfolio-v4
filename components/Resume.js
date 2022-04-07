import Link from 'next/link';
import Image from 'next/image';

import {
  resume,
  resume__back__link,
  resume__job__block,
  resume__skills__list,
  resume__profile__block,
  resume__profile__block__logo,
  resume__info__block
} from '../styles/modules/resume.module.sass';

import {
  typography__copy,
  typography__copy__resume,
  resume__headline
} from '../styles/modules/typography.module.sass';

// components
import { ResumeExternalLink, ResumeLink, ResumeDownloadLink } from './Links';

const copyStyles = `${typography__copy} ${typography__copy__resume}`;

const Resume = () => (
  <section id="resume-wrap">
    <div className={resume}>
      <div className={resume__profile__block}>
        <Link href="/" passHref>
          <a className={resume__back__link}>
            <Image src="/images/back.png" alt="Back" height={35} width={35} />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className={resume__profile__block__logo}>
            <Image
              src="/images/logo.png"
              alt="Brad Murphy"
              className={resume__profile__block__logo}
              height={200}
              width={200}
            />
          </a>
        </Link>
        <span className={copyStyles}>Brad Murphy</span>
        <span className={copyStyles}>
          <strong>UX Engineer</strong>
        </span>
        <span className={copyStyles}>(404) 432 - 3796</span>
        <ResumeLink href="/">bradmurphy.dev</ResumeLink>
        <ResumeLink href="mailto:bm.dev84@gmail.com?&amp;subject=BRADMURPHYDEV.COM%20|%20Website%20Inquiry">
          bm.dev84@gmail.com
        </ResumeLink>
        <span className={copyStyles}>Canton, GA 30114</span>
        <ResumeDownloadLink href="/resume.pdf">
          <Image
            src="/images/download.png"
            alt="Download Resume"
            height={45}
            width={40}
          />
        </ResumeDownloadLink>
      </div>
      <div className={resume__info__block}>
        <h1 className={resume__headline}>Summary</h1>
        <p className={copyStyles}>
          Driven programmer with an immediate goal to obtain a challenging and
          rewarding position as a Senior Front-End Developer to further optimize
          my skill set. I specialize in creating great user experiences using
          the latest technologies available to provide innovative, elegant and
          cutting-edge content to the marketing and advertising industry.
        </p>
        <h1 className={resume__headline}>Experience</h1>
        <div className={resume__job__block}>
          <p className={copyStyles}>
            <strong>UX Engineer</strong>
          </p>
          <p className={copyStyles}>
            Blinkk (
            <ResumeExternalLink href="https://blinkk.com">
              blinkk.com
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2021 - Present</em>
          </p>
          <p className={copyStyles}>
            <strong>Clients:</strong> Google, Teachable
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Develop and maintain automation solutions for open source build
              systems and plugins.
            </li>
            <li className={copyStyles}>
              Integrate current internal tool sets and build systems with
              NextJS/ReactJS.
            </li>
            <li className={copyStyles}>
              Refactor and configure current CMS hierarchy to be more
              maintainable for the client; configuring related logic for the
              front end.
            </li>
            <li className={copyStyles}>
              Build, maintain and deploy interactive websites and applications
              to creative and client specifications.
            </li>
            <li className={copyStyles}>
              Develop learning presentations for team-wide education.
            </li>
            <li className={copyStyles}>
              Assist with code reviews, mentoring and onboarding new engineers
              to new and existing projects.
            </li>
            <li className={copyStyles}>
              Executing the standard of maintainability, interactivity,
              accessibility, localization and performance throughout every
              project.
            </li>
            <li className={copyStyles}>
              <strong>Skills/Technologies Utilized:</strong> JavaScript,
              Typescript, HTML5, CSS3, NodeJS, NextJS, ReactJS, WordPress,
              Kintaro, YAML, SASS, GCP
            </li>
          </ul>
        </div>
        <div className={resume__job__block}>
          <p className={copyStyles}>
            <strong>Senior Developer</strong>
          </p>
          <p className={copyStyles}>
            Dynamic Marketing Systems (
            <ResumeExternalLink href="http://discoverdms.com">
              discoverdms.com
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2021 - 2021</em>
          </p>
          <p className={copyStyles}>
            <strong>Clients:</strong> American Airlines, CITI, AT&amp;T,
            Barclays
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Develop and maintain automation solutions for internal asset
              management and storage after identifying time wasted on current
              manual process using AWS Amplify.
            </li>
            <li className={copyStyles}>
              Provide designers and account managers with development expertise
              and assist with UX Design.
            </li>
            <li className={copyStyles}>
              Led internal documentation initiative to create and manage
              development best practices for code style, frameworks, build tools
              and any other development practices.
            </li>
            <li className={copyStyles}>
              Developed HTML Email Automation script to quickly swap out dynamic
              content for multiple emails, utilizing MJML for pixel perfect
              emails across all major email clients.
            </li>
            <li className={copyStyles}>
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, PHP, NodeJS, Webpack, ReactJS, React Native, WordPress,
              MJML, AWS Amplify
            </li>
          </ul>
        </div>
        <div className={resume__job__block}>
          <p className={copyStyles}>
            <strong>Senior Developer</strong>
          </p>
          <p className={copyStyles}>
            Black Airplane (
            <ResumeExternalLink href="http://blackairplane.com">
              blackairplane.com
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2018 - 2021</em>
          </p>
          <p className={copyStyles}>
            <strong>Clients:</strong> Kefi, The Weather Channel, Big Nerd Ranch,
            Coca-Cola, SeatGeek
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Build, maintain and deploy interactive websites and applications
              to creative and client specifications.
            </li>
            <li className={copyStyles}>
              Build and maintain POS Application in React Native for all
              shopping and guest/party admission at Kefi.
            </li>
            <li className={copyStyles}>
              Build and maintain Kiosk Sign In/Sign Up Application in React
              Native to handle guest registration and check-ins.
            </li>
            <li className={copyStyles}>
              Establish code standard guidelines, best practices and project
              workflows.
            </li>
            <li className={copyStyles}>
              Utilizing WordPress’ Headless REST API and Vue for the front end,
              created a modern and flexible Pet Adoption Portal with automatic
              adoption form generation.
            </li>
            <li className={copyStyles}>
              Developed a community fundraising platform for the jewish
              community. Bringing a digital solution forth to help synagogue’s
              hold traditional holiday fundraising events and prayers during the
              COVID-19 Pandemic.
            </li>
            <li className={copyStyles}>
              Developed a community outreach fundraising platform to show
              gratitude during the COVID-19 Pandemic utilizing the Google Maps
              and Places API’s to track messages, location, likes and names.
            </li>
            <li className={copyStyles}>
              Mentor junior engineers and actively create educational material
              for team members to showcase new technology and standards.
            </li>
            <li className={copyStyles}>
              Consistently adapt to emerging technologies both on the back and
              front-end to accommodate a wide variety of clients.
            </li>
            <li className={copyStyles}>
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, PHP, NodeJS, Webpack, AngularJS, Angular, ReactJS, React
              Native, VueJS, WordPress, Laravel
            </li>
          </ul>
        </div>
        <div className={resume__job__block}>
          <p className={copyStyles}>
            <strong>Instructor</strong>
          </p>
          <p className={copyStyles}>
            Creative Circus (
            <ResumeExternalLink href="http://creativecircus.edu">
              creativecircus.edu
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2018 - Present</em>
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Instructor for incoming students, teaching an assortment of
              subjects including: ReactJS, Web Animations, JavaScript, ES6,
              Programming Theory, WebGL, etc.
            </li>
            <li className={copyStyles}>
              Mentor and help with an assortment of projects outside of
              students&apos; class responsibilities.
            </li>
            <li className={copyStyles}>
              Develop and maintain curriculum(s) based on the latest
              technologies and best practices.
            </li>
            <li className={copyStyles}>
              Necessity to have difficult conversations to help students
              performance.
            </li>
            <li className={copyStyles}>
              Contribute as a Creative Circus Alumni and Instructor.
            </li>
          </ul>
        </div>
        <div className={resume__job__block}>
          <p className={copyStyles}>
            <strong>Interface Engineer</strong>
          </p>
          <p className={copyStyles}>
            Hook Studios (
            <ResumeExternalLink href="http://byhook.com">
              byhook.com
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2015 - 2018</em>
          </p>
          <p className={copyStyles}>
            <strong>Clients:</strong> Google, YouTube, Slack, Dropbox
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Developed the official YouTube Rewind Digital Experience (2015 -
              2017) showcasing all of the top YouTube Content Creators. Each
              iteration set a high benchmark which required a step up in digital
              solutions each time. From WebGL 3D Animation to PixiJS and Canvas
              Digital Art Creation, the experience grew more entertaining and
              interactive.
            </li>
            <li className={copyStyles}>
              Developed an internal sprite sheet generator for animators to
              quickly batch animation frames together for their projects.
            </li>
            <li className={copyStyles}>
              Developed a banner generation system using NodeJS. Saving
              thousands of man hours from manually creating individual banner
              builds.
            </li>
            <li className={copyStyles}>
              Developed YouTube Email Automation script to read from Google
              Sheets spreadsheet and quickly build out and send each countries
              top 100 tracks for the week to subscribers.
            </li>
            <li className={copyStyles}>
              Build, maintain and deploy interactive websites and applications
              to creative and client specifications.
            </li>
            <li className={copyStyles}>
              Create and maintain build systems, scaffolds and tools used by
              engineers and designers every day for faster in-house production.
            </li>
            <li className={copyStyles}>
              Help develop learning tools, presentations, documentation and
              other resources for onboarding new engineers and general employee
              education.
            </li>
            <li className={copyStyles}>
              Learn new technologies, absorb documentation quickly and deploy
              clean, efficient, bug-free code to the expected standard.
            </li>
            <li className={copyStyles}>
              <strong>Skills/Technologies Utilized:</strong> JavaScript, HTML5,
              CSS3, Angular, Backbone, React, React Native, Polymer, AEM, AMP,
              GCP, Node, Gulp, Glue, Goro, Kintaro, Closure, Bracket, GSAP, ES6
            </li>
          </ul>
        </div>
        <div className="component-resume__job__block-block component-resume__job__block-block--no-margin">
          <p className={copyStyles}>
            <strong>Front End Developer</strong>
          </p>
          <p className={copyStyles}>
            Artifact Design (
            <ResumeExternalLink href="http://artifactdesign.com">
              artifactdesign.com
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>
            <em>2014 - 2015</em>
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              Worked with a team of 5 people to both wireframe and develop
              responsive websites.
            </li>
            <li className={copyStyles}>
              <strong>Skills/Technologies Utilized:</strong> JavaScript, jQuery,
              GSAP, HTML5, CSS3
            </li>
          </ul>
        </div>
        <h1 className={resume__headline}>Education</h1>
        <div className="component-resume__job__block-block component-resume__job__block-block--no-margin">
          <p className={copyStyles}>
            <strong>The Creative Circus</strong> (
            <ResumeExternalLink href="http://creativecircus.edu">
              creativecircus.edu
            </ResumeExternalLink>
            )
          </p>
          <p className={copyStyles}>Interactive Development</p>
          <p className={copyStyles}>
            <em>2013 - 2015</em>
          </p>
          <ul className={resume__skills__list}>
            <li className={copyStyles}>
              <strong>Courses Include:</strong> Programming, Web Development,
              Interactive Design, Strategy, PHP, jQuery, 4A’s Real-world
              Environment Class, Digital Teams, User Experience, Graphic Design
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
