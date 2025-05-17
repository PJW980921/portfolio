import React from 'react';
import { Metadata } from 'next';
import BlurFade from '@/app/_components/ui/blur-fade';
import CareerList from '@/app/_components/domain/career/CareerList';

export const metadata: Metadata = {
  title: 'PJW PortFolio - Career',
  description: '저(박지원)의 경력사항을 확인 할 수 있는 페이지입니다.',
};
export default function Career() {
  return (
    <BlurFade delay={0.25} inView>
      <div className="relative flex flex-col justify-center w-full">
        <h1 className="font-bmEuljiro  text-[6rem] translate-x-[-8rem] translate-y-[-10rem] sm:text-[3rem]  sm:translate-x-[36%] sm:translate-y-0">
          2025
        </h1>
        <div className="absolute left-[-2rem] top-[-1rem]  w-[0.3rem]  bg-orange-400 animate-growLine origin-top sm:hidden" />
        <BlurFade delay={0.9} inView>
          <CareerList />
        </BlurFade>
      </div>
    </BlurFade>
  );
}
