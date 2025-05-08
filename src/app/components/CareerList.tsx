import Image from "next/image";
import Link from "next/link";
import { careerList } from "../data";

export default function CareerList() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      {careerList.map((career) => (
        <div
          key={career.id}
          className="flex gap-8 items-start md:flex-col md:justify-center md:items-center"
        >
          <div className="flex flex-col gap-2 min-w-[14rem] justify-center items-center">
            <Link href={career.site} target="_blank" rel="noopener noreferrer">
              <Image
                src={career.logo}
                alt={`${career.company} 로고`}
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            <div className="font-bmHannaPro text-xl">{career.company}</div>
            <div className="text-sm text-gray-600">{career.period}</div>
            <div className="px-3 py-1 rounded-full bg-black text-white w-fit text-sm font-semibold">
              {career.tag}
            </div>
          </div>

          <ul className="flex flex-col gap-2 text-base font-bmHannaAir">
            <Link
              href="https://www.csi.go.kr/cmq/main.do"
              target="_blank"
              className="font-bmHannaAir hover:font-semibold flex justify-center"
            >
              {career.subtitle}
            </Link>
            {career.description.map((desc, idx) => (
              <li
                key={idx}
                className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-orange-400 before:rounded-full before:animate-pulseGlow"
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
