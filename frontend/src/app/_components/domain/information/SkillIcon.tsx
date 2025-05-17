import React from 'react';
import Image from 'next/image';
import { Skill } from '@/app/_data';

interface SkillIconProps extends Skill {
  size?: string;
}

const SkillIcon = ({ src, alt, size = '3rem' }: SkillIconProps) => {
  return (
    <div className="relative group flex items-center justify-center md:w-[2.5rem] md:h-auto ">
      <Image
        src={src}
        alt={alt}
        className={`w-[${size}] h-auto transition-opacity duration-300 group-hover:opacity-50`}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[0.7rem] font-bmEuljiro text-center">
          {alt.replace('Icon', '')}
        </p>
      </div>
    </div>
  );
};

export default SkillIcon;
