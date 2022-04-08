// components
import Project from './Project';

import { work, work__grid } from '../styles/modules/work.module.sass';
import { work__headline } from '../styles/modules/typography.module.sass';

const Work = ({ projects }) => (
  <section className={work}>
    <h2 className={work__headline}>
      {`//`} <strong>Work</strong>
    </h2>
    <div className={work__grid}>
      {projects.map((project, key) => (
        <Project {...project} key={key}>
          {project.copy}
        </Project>
      ))}
    </div>
  </section>
);

export default Work;
