'use client';
import { ReactNode, useEffect } from 'react';
import HomeButton from '../_components/HomeButton';
import ChannelService from '../_lib/ChannelService';

interface SubPagesLayoutProps {
  children: ReactNode;
}

export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  useEffect(() => {
    ChannelService.loadScript();

    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY as string,
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-16">
      <HomeButton />
      {children}
    </main>
  );
}
