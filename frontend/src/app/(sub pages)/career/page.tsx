import React from 'react';
import { Metadata } from 'next';
import BlurFade from '@/app/_components/ui/blur-fade';
import CareerList from '@/app/_components/domain/career/CareerList';

export const metadata: Metadata = {
  title: 'PJW PortFolio - Career',
  description: '저(박지원)의 경력사항을 확인 할 수 있는 페이지입니다.',
};

const YEARS = [2026, 2025];

export default function Career() {
  return (
    <div className="flex flex-col gap-48 pb-32 sm:gap-24 translate-y-24">
      {YEARS.map((year, index) => (
        <BlurFade key={year} delay={0.25 + index * 0.1} inView>
          <div className="relative flex flex-col justify-center w-full pt-32 first:pt-10">
            <h1 className="font-bmEuljiro text-[10rem] text-gray-400 absolute -top-48 -left-48 pointer-events-none select-none md:text-[8rem] md:-top-32 sm:text-[5rem] sm:-top-6 sm:left-2">
              {year}
            </h1>

            <div className="absolute left-[-2.5rem] top-0 bottom-[-5rem] w-[1px] bg-gradient-to-b from-orange-400/50 via-orange-400/20 to-transparent sm:hidden" />

            <div className="relative z-10 w-full">
              <BlurFade delay={0.5 + index * 0.1} inView>
                <CareerList year={year} />
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
