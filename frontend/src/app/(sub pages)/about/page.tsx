import Image from 'next/image';
import React from 'react';
import MyImage from '../../../../public/images/my.jpeg';
import BlurFade from '../../_components/ui/blur-fade';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PJW PortFolio - About',
  description: '박지원 자기소개 페이지입니다.',
};
export default function About() {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-8 bg-white translate-y-12">
      <section className="flex justify-center items-center flex-col mb-16 ">
        <BlurFade delay={0.25} inView>
          <div className="flex justify-center items-center flex-col font-bmHannaAir text-[16px] text-center">
            <h3 className="font-bmEuljiro text-[38px] mb-8">About</h3>
            <p className="font-bmHannaAir text-[20px] font-bold text-center pb-8 ">
              안녕하세요 🙌🏻 원활한 소통을 지향하는 개발자 박지원이라고 합니다.
            </p>
            <Image
              src={MyImage}
              alt="CareerHopes image"
              className="w-[20rem] h-[20rem] rounded-full pb-4"
            />
            <div className="flex flex-row gap-2">
            <p>저는 현재 <Link href="/career" target="_blank" className="text-orange-400">SI 기업</Link>에서 개발자로 재직 중 입니다.</p>
            </div>
            소통은 협업에 있어서 무엇보다 중요하다고 생각하고 있습니다.
            <br />
            실무 경험을 통해 몸소 느낀게 있다면 제 단점은 소통 능력이 부족한 것이라고 생각합니다.
            <br />
            이러한 제 단점을 보완하고자 퇴근 후 주도적인 학습과
            <br />
            <div className="flex flex-row gap-2">
            <p>타 직군들과 소통을 하기 위해 여러 <Link href="/projects" target="_blank" className="text-orange-400">협업 프로젝트</Link>에
            참여중입니다.
            </p>
            </div>
            소통 능력을 향상하고 기술역량을 향상하기 위해 꾸준히 노력하고 있습니다.
            <br />
            향후 협업 간 소통에 있어서 유연한 개발자가 되는게 목표입니다.
            <br />
            감사합니다.
          </div>
        </BlurFade>
      </section>
      
    </main>
  );
}
