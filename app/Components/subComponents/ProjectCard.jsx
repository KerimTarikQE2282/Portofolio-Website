import React from 'react';
import { GithubIcon } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

// One project. `imageSide` puts the visual left or right on desktop;
// on phones and tablets the visual always sits on top of the text.
export default function ProjectCard({
  image,
  title,
  description,
  usedTech,
  githubLink,
  ProjectLink,
  category = 'Offensive Security',
  year = '2025',
  terminal,
  imageSide = 'right',
}) {
  const hasGithub = githubLink && githubLink !== '#';
  const hasProject = ProjectLink && ProjectLink !== '#';
  const button =
    'inline-flex items-center gap-3 rounded-lg border border-black bg-black px-5 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black md:text-base';

  return (
    <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className={`relative w-full overflow-hidden rounded-lg ${image ? 'aspect-video' : ''} ${imageSide === 'left' ? 'lg:order-first' : 'lg:order-last'}`}>
        <ProjectVisual image={image} title={title} terminal={terminal} />
      </div>

      <div className="flex flex-col">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider sm:text-sm">{category}</p>
          <span className="h-2 w-2 rounded-full bg-terminal"></span>
          <p className="text-xs font-semibold uppercase tracking-wider sm:text-sm">{year}</p>
        </div>

        <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">{title}</h3>
        <p className="mt-4 text-base md:text-lg">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {usedTech.map((tech) => (
            <li key={tech} className="rounded-full border border-gray-500 px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              {tech}
            </li>
          ))}
        </ul>

        {(hasProject || hasGithub) && (
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
            {hasProject && (
              // Plain <a>: some project links go to the static blog, which isn't a Next route
              <a href={ProjectLink} className={button}>
                View Project →
              </a>
            )}
            {hasGithub && (
              <a href={githubLink} className={button} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" /> Github repo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
