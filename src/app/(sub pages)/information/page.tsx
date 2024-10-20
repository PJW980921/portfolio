import React from 'react';
import Image from 'next/image';
import {
  informationList,
  Skill,
  SkillCategoryType,
  InformationList,
} from '@/app/data';
import Link from 'next/link';
import BlurFade from '@/app/components/ui/blur-fade';

const SkillIcon = ({ src, alt }: Skill) => {
  return (
    <div className="relative group">
      <Image
        src={src}
        alt={alt}
        className="w-[3rem] h-auto transition-opacity duration-300 group-hover:opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[0.7rem]  font-bmEuljiro text-center ">
          {alt.replace('Icon', '')}
        </p>
      </div>
    </div>
  );
};

const SkillCategory = ({
  category,
  skills,
}: {
  category: string;
  skills: Skill[];
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillIcon key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = ({ skills }: { skills: SkillCategoryType }) => (
  <div className="mt-4">
    {Object.entries(skills).map(([category, skillList]) => (
      <SkillCategory key={category} category={category} skills={skillList} />
    ))}
  </div>
);

const InformationPage = ({
  informationList,
}: {
  informationList: InformationList;
}) => {
  const { info, skills } = informationList;

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="font-bmEuljiro text-[38px]  sm:text-[24px] md:text-[32px]">
        Information
      </h3>
      {info.map((person) => (
        <div
          key={person.id}
          className="flex flex-col justify-center  mb-4 font-bmHannaAir"
        >
          <Image
            src={person.profile.src}
            alt={person.profile.alt}
            className="w-[20rem] h-[20rem] rounded-full pb-4"
          />
          <p>👨🏻‍💻 이름: {person.name}</p>
          <p>📞 휴대폰: {person.phone}</p>
          <p>📧 이메일: {person.email}</p>
          <p>
            🐈‍⬛ Github:{' '}
            <Link
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {person.github}
            </Link>
          </p>
        </div>
      ))}
      <SkillsSection skills={skills} />
    </div>
  );
};

const Information = () => {
  return (
    <BlurFade delay={0.25} inView>
      <InformationPage informationList={informationList} />
    </BlurFade>
  );
};

export default Information;
