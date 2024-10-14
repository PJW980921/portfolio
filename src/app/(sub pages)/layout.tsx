import { ReactNode } from 'react';
import HomeButton from '../components/HomeButton';

interface SubPagesLayoutProps {
  children: ReactNode;
}
export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <HomeButton />
      {children}
    </main>
  );
}
