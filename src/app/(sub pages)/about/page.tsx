import Image from 'next/image';
import React from 'react';
import CareerHopes from '../../../../public/images/박지원 고등학교 진로희망사항.png';
import BlurFade from '../../components/ui/blur-fade';
export default function About() {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-8 bg-white translate-y-12">
      <section className="flex justify-center items-center flex-col ">
        <BlurFade delay={0.25} inView>
          <h3 className="font-bmHannaPro text-[42px] text-black ">어바웃 미</h3>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className=" font-bmHannaAir text-[16px] text-center mb-32 ">
            <p className="font-bmHannaAir text-[20px] font-bold text-center pb-8 ">
              안녕하세요, 프론트엔드 개발자 박지원입니다.
            </p>
            <Image
              src={CareerHopes}
              alt="CareerHopes image"
              className="w-full h-auto"
            />
            저는 초등학생 때 <em>VisualBasic</em>이라는 프로그래밍 툴로
            <br />
            여러 포털 사이트를 접속할 수 있는 프로그램을 개발한 경험이 있습니다.
            <br />
            개발한 프로그램을 친구들에게 공유하고 직접 사용해보고
            <br />
            프로그래밍에 흥미를 느꼈습니다.
            <br />
            학창시절 진로희망을 프로그래머로 기재 할 만큼 개발자가 되고자
            <br />
            개발 관련 직무를 찾아보게 되었고, 프론트엔드 분야를 접하게
            되었습니다.
            <br />
            프론트엔드는 기술 역량을 발휘하여 제 생각대로 웹 페이지를 구성할 수
            있는 점에
            <br />
            매료되어 프론트엔드 관련 학원을 찾아보게 되었습니다.
            <br />
            현재는 프론트엔드 부트캠프 수료 후
            <br />
            주도적인 학습 및 프로젝트 개발과 취업준비를 병행 하고있습니다.
          </div>
        </BlurFade>
      </section>
      <section className="mb-32">
        <BlurFade delay={0.25 * 3} inView>
          <div className="max-w-[780px] font-bmHannaAir text-[16px] text-center ">
            <p className="font-bmHannaAir text-[20px] font-bold text-center pb-8 ">
              저는 이렇게 개발을 진행하고 있습니다
            </p>
            <b>클린코드가 무엇인지 알고있으며, 클린코드를 지향하고 있습니다.</b>
            <br />
            명확한 변수, 함수명을 명명하고 단일 책임 원칙 등 클린코드의 개념에
            대해
            <br />
            인지한 상태로 개발에 임하고있습니다.
            <br />
            <b>유연한 개발자가 되고자 여러 협업프로젝트에 참여하고 있습니다.</b>
            <br />
            기술역량 및 소통능력 향상을 위해 주도적인 학습과 협업 프로젝트에
            참여중입니다.
            <br />
            <b>개발을하면서 체계적인 프로젝트 관리를 선호하고 있습니다.</b>
            <br />
            Github에서 제공하는 issue , PR Template 및 Project Board를
            <br />
            적절히 활용하면서 체계적인 프로젝트 관리를 하고있습니다.
            <br />
          </div>
        </BlurFade>
      </section>
      <section>
        <BlurFade delay={0.25 * 3} inView>
          <div className="max-w-[780px] font-bmHannaAir text-[16px] text-center ">
            <p className="font-bmHannaAir text-[20px] font-bold text-center pb-8 ">
              향후 이러한 개발자가 되고싶습니다
            </p>
            <b>누군가의 멘토 개발자가 되고싶습니다</b>
            <br />
            실무 경험을 기반으로 근거 있는 개발자가 되고
            <br />
            현재 저와 같은 신입 개발자에게 조금이나마 도움이 되고자 하는 멘토가
            되고싶습니다.
            <br />
            저는 고민상담을 좋아합니다, 군대 현역 생활 당시 중대에서
            <br />
            또래상담병이라는 업무를 맡았던 경험이 있습니다.
            <br />
            고민을 경청하고 해결방안을 모색하는 과정에서 뿌듯함을 느꼈습니다.
            <br />
            이 과정을 통해 의사소통능력 향상에 도움이 된다고 생각합니다.
            <br />
            개발자로서 소프트 스킬 중 의사소통능력 향상이 되는 일이라면
            <br />
            무엇이든 도전하고 경험하고 싶습니다.
            <br />
            <br />
            <br />
            감사합니다.
            <br />
            <br />
            <br />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
