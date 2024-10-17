import Ripple from '@/app/components/ui/ripple';
import Navigation from './components/navigation';
import RenderModel from './components/RenderModel';
import dynamic from 'next/dynamic';

const PjwCharacter = dynamic(() => import('./components/models'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel className="">
          <PjwCharacter />
        </RenderModel>
        <Ripple />
      </div>
    </div>
  );
}
