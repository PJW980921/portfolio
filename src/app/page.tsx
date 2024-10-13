import { PjwCharacter } from './components/models';
import Navigation from './components/navigation';
import RenderModel from './components/RenderModel';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel className="">
          <PjwCharacter />
        </RenderModel>
      </div>
    </div>
  );
}
