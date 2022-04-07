// components
import Project from "./Project";

import { work } from "../styles/modules/work.module.sass";
import { work__headline } from "../styles/modules/typography.module.sass";

const Work = ({ projects }) => (
  <section className={work}>
    <h2 className={work__headline}>
      {`//`} <strong>Work</strong>
    </h2>
    {projects.map((project, key) => (
      <Project {...project} key={key}>
        {project.copy}
      </Project>
    ))}
  </section>
);

export default Work;
