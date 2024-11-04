import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PJW PortFolio - Career',
  description: '저(박지원)의 경력사항을 확인 할 수 있는 페이지입니다.',
};
export default function Career() {
  return <div className="text-gray-500">현재 구직중 입니다.</div>;
}
