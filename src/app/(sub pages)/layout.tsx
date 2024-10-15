'use client';
import { ReactNode, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import ChannelService from '../lib/ChannelService';

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
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <HomeButton />
      {children}
    </main>
  );
}
