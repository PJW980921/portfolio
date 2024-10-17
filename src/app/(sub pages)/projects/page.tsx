import React from 'react';
import { FullPageScroll } from '@/app/components/FullPageScrollLayout';
import BlurFade from '@/app/components/ui/blur-fade';
import { projectList, ProjectType } from '@/app/data';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface LinkProps {
  url: string;
  ariaLabel: string;
  icon: StaticImageData;
  alt: string;
}

interface SkillsProps {
  id: number;
  icon: StaticImageData;
  alt: string;
}

const ProjectLinks = ({ links }: { links: LinkProps[] }) => (
  <div className="flex flex-row gap-3 sm:gap-2 md:gap-3 sm:justify-center sm:items-center">
    <h3 className="flex items-center font-bmEuljiro text-lg sm:text-sm md:text-lg">
      Links
    </h3>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.url}
        aria-label={link.ariaLabel}
        target="_blank"
        className="w-[3.8rem] sm:w-[2rem] md:w-[3.2rem] h-auto hover:scale-125 transition-all"
      >
        <Image src={link.icon} alt={link.alt} />
      </Link>
    ))}
  </div>
);

const TechStack = ({ skills }: { skills: SkillsProps[] }) => (
  <div className="flex flex-row gap-3 sm:gap-2 md:gap-3 pb-4  sm:justify-center sm:items-center">
    <h3 className="flex items-center font-bmEuljiro text-lg sm:text-sm md:text-lg">
      Tech Stack
    </h3>
    {skills.map((skill) => (
      <Image
        key={skill.id}
        src={skill.icon}
        alt={skill.alt}
        className="w-[3.8rem] sm:w-[2rem] md:w-[3.2rem] h-auto"
      />
    ))}
  </div>
);

interface ProjectSectionProps {
  project: ProjectType;
  title: string;
}

const ProjectSection = ({ project, title }: ProjectSectionProps) => (
  <section className="flex flex-col justify-center items-center ">
    <BlurFade delay={0.25} inView className="flex flex-col justify-center">
      <h3 className="font-bmEuljiro text-[38px] sm:text-[24px] md:text-[32px] pb-16 sm:hidden text-center">
        {title}
      </h3>
      <div className="flex w-[82vw] h-auto sm:h-[37.5vh] gap-8 sm:gap-4 md:gap-6 justify-center items-center sm:flex-col">
        <div className="flex w-[50%] sm:w-[70%]  h-auto">
          <Image
            src={project.src}
            alt={project.alt}
            className="w-full h-[30rem] sm:h-auto md:h-[25rem] border-gray-300 border-solid rounded-[5rem] sm:rounded-[2rem] md:rounded-[4rem] border-[0.1rem]"
          />
        </div>
        <div className="flex flex-col justify-center sm:w-full sm:text-center">
          <div className="font-bmHannaAir text-[16px] sm:text-[9px] md:text-[15px] pb-6">
            <p className="font-bmHannaPro text-[1.5rem] sm:text-[0.8rem] md:text-[1.4rem] text-gray-500 mb-4">
              {project.title}
            </p>
            <p className="text-gray-500 mb-4">{project.duration}</p>
            <p className="whitespace-pre-line">{project.description}</p>
          </div>
          <TechStack skills={project.skills} />
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </BlurFade>
  </section>
);

export default function Projects() {
  return (
    <FullPageScroll>
      {projectList.map((project) => (
        <ProjectSection
          key={project.id}
          project={project}
          title={project.name}
        />
      ))}
    </FullPageScroll>
  );
}
