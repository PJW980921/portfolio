import { FullPageScroll } from '@/app/components/FullPageScrollLayout';
import BlurFade from '@/app/components/ui/blur-fade';

export default function Projects() {
  return (
    <FullPageScroll>
      <section className="flex flex-col justify-center items-center">
        <BlurFade
          delay={0.25}
          inView
          className="flex flex-col justify-center items-center"
        >
          <h3 className="font-bmEuljiro text-[38px] pb-20">Projects</h3>
          <h3 className="font-bmEuljiro text-[28px]">PJW WEB PortFolio</h3>
        </BlurFade>
      </section>
      <section className="flex flex-col justify-center items-center">
        <BlurFade delay={0.25} inView>
          <h3 className="font-bmEuljiro text-[38px]">EmotionalCore</h3>
        </BlurFade>
      </section>
      <section className="flex flex-col justify-center items-center gap-8   ">
        <BlurFade delay={0.25} inView>
          <h3 className="font-bmEuljiro text-[38px]">Taskify</h3>
        </BlurFade>
      </section>
    </FullPageScroll>
  );
}
