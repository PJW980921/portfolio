'use client';
import Link from 'next/link';
import {
  Folder,
  Github,
  Home,
  Instagram,
  Linkedin,
  NotebookText,
  Phone,
  User,
} from 'lucide-react';
import React from 'react';

interface NavButtonProps {
  x: string;
  y: string;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

const getIcon = (icon: string) => {
  switch (icon) {
    case 'home':
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case 'about':
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case 'projects':
      return <Folder className="w-full h-auto" strokeWidth={1.5} />;
    case 'contact':
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case 'github':
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case 'linkedin':
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case 'instagram':
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case 'resume':
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
const NavButton = ({ x, y, label, link, icon, newTab }: NavButtonProps) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x},${y})` }}
    >
      <Link
        href={link}
        target={newTab ? '_blank' : '_self'}
        className="text-foreground rounded-full flex items-center justify-center text-black bg-background/20 border border-black border-solid backdrop-blur-[6px] hover:shadow-xl  hover:shadow-gray-400"
        aria-label={label}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse text-black group-hover:pause">
          {getIcon(icon)}
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
