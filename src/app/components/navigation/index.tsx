'use client';
import { navigationList } from '../../data/index';
import NavButton from './NavButton';
const Navigation = () => {
  const angleIncrement = 360 / navigationList.length;

  return (
    <div className="flex w-full fixed h-screen items-center justify-center">
      <div className="flex items-center justify-around  relative animate-spin-slow hover:pause">
        {navigationList.map((item, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 60;
          const radius = 'calc(19vw - 3rem)';
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;
          return <NavButton x={x} y={y} key={item.label} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
