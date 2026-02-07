import Image from 'next/image';
import Link from 'next/link';
import { careerList } from '../../../_mock';

interface CareerListProps {
  year: number;
}

export default function CareerList({ year }: CareerListProps) {
  const filteredCareers = careerList.map((career) => {
    const projectsInYear = career.projects.filter((project) => {
      const match = project.date.match(/\d{4}/);
      return match && match[0] === year.toString();
    });

    return {
      ...career,
      projects: projectsInYear,
    };
  }).filter(career => career.projects.length > 0);

  if (filteredCareers.length === 0) return null;

  return (
    <div className="flex flex-col gap-24 w-full max-w-6xl mx-auto">
      {filteredCareers.map((career) => (
        <div
          key={career.id}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start group transition-all duration-500"
        >
          <div className="flex flex-col gap-6 min-w-[16rem] w-full lg:w-auto items-center lg:items-start text-center lg:text-left lg:sticky lg:top-32">
            <Link 
              href={career.site} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group/logo flex items-center justify-center w-48 lg:w-56 aspect-[2/1]"
            >
              <Image
                src={career.logo}
                alt={`${career.company} 로고`}
                width={160}
                height={80}
                className="object-contain transition-transform duration-500 group-hover/logo:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50/50 to-transparent rounded-3xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
            </Link>
            
            <div className="flex flex-col gap-2">
              <div className="font-bmHannaPro text-3xl text-gray-900 tracking-tight">{career.company}</div>
              <div className="text-base text-gray-400 font-bmHannaAir">{career.period}</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-16 w-full relative">
            <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-gray-100 via-gray-100 to-transparent" />
            
            <div className="flex flex-col gap-16 lg:pl-16 w-full">
              {career.projects.map((project) => (
                <div key={project.id} className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="flex flex-col gap-4 items-start relative">
                    <div className="hidden lg:block absolute -left-[68px] top-3 w-2.5 h-2.5 rounded-full bg-orange-400 ring-4 ring-orange-50 z-10" />
                    
                    <div className="flex items-center gap-4 flex-wrap w-full justify-between">
                      <div className="flex items-center gap-4 flex-wrap">
                        <h3 className="text-2xl lg:text-3xl font-bmHannaPro text-gray-900 leading-tight">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold tracking-tight uppercase border border-orange-100">
                          {project.tag}
                        </span>
                      </div>
                      
                      {project.link && (
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-bmHannaAir text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 border border-gray-100 px-3 py-1 rounded-lg hover:border-orange-200 bg-gray-50/50"
                        >
                          Visit Project ↗
                        </Link>
                      )}
                    </div>
                    <span className="text-[15px] text-gray-400 font-bmHannaAir tracking-wide">
                      {project.date}
                    </span>
                  </div>
                  
                  <ul className="grid grid-cols-1 gap-4">
                    {project.description.map((desc, i) => (
                      desc && (
                        <li 
                          key={i} 
                          className="text-gray-600 font-bmHannaAir text-[16px] lg:text-[18px] flex items-start gap-4 leading-relaxed group/item transition-all duration-300 hover:translate-x-1"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-200 mt-2.5 group-hover/item:bg-orange-400 transition-colors" />
                          <span className="flex-1 group-hover:text-gray-900 transition-colors">{desc}</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
