import React from 'react';
import SkillIcon from './SkillIcon';
import { StaticImageData } from 'next/image';

interface SkillsProps {
  id: number;
  icon: StaticImageData;
  alt: string;
}

interface TechStackProps {
  skills: SkillsProps[];
  className?: string;
  iconSize?: string;
}

const TechStack = ({
  skills,
  className = '',
  iconSize = '3rem',
}: TechStackProps) => (
  <div
    className={`flex flex-row flex-wrap gap-3 sm:gap-2 md:gap-3 pb-4 sm:justify-center sm:items-center ${className}`}
  >
    <h3 className="flex items-center font-bmEuljiro text-lg sm:text-sm md:text-lg">
      Tech Stack
    </h3>
    {skills.map((skill) => (
      <SkillIcon
        key={skill.id}
        src={skill.icon}
        alt={skill.alt}
        size={iconSize}
        id={skill.id}
      />
    ))}
  </div>
);

export default TechStack;
