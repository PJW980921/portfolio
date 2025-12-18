'use client';

import useScreenSize from '@/app/_hooks/useScreenSize';
import { navigationList } from '../../_mock/index';
import NavButton from './NavButton';
const Navigation = () => {
  const angleIncrement = 360 / navigationList.length;
  const screenSize = useScreenSize();

  const isScreenSizeLarge = (screenSize as number) >= 1024;
  const isScreenSizeMedium = (screenSize as number) >= 768;
  return (
    <div className="flex w-full fixed h-screen items-center justify-center z-10">
      <div className="group flex items-center justify-around relative animate-spin-slow hover:pause">
        {navigationList.map((item, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 60;
          const radius = isScreenSizeLarge
            ? 'calc(19vw - 3rem)'
            : isScreenSizeMedium
            ? 'calc(29vw - 3rem)'
            : 'calc(39vw - 3rem)';
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;
          return <NavButton x={x} y={y} key={item.label} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
