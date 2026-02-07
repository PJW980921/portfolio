import Ripple from '@/app/_components/ui/ripple';
import Navigation from './_components/navigation';
import RenderModel from './_components/RenderModel';
import dynamic from 'next/dynamic';

const PjwCharacter = dynamic(() => import('./_components/models'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <PjwCharacter />
        </RenderModel>
        <Ripple />
      </div>
    </div>
  );
}
