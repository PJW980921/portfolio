import React from 'react';
import Card from './Card';
import RegisterForm from './RegisterForm';
import { CardList } from '@/app/_data';

const GuestBookList = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 max-h-[50rem] overflow-y-scroll scrollbar-hide w-full relative">
        {CardList.map((item) => (
          <div
            key={item.id}
            className={`
              w-full flex
              ${item.id % 2 === 0 ? 'justify-end' : 'justify-start'}
            `}
          >
            <Card
              id={item.id}
              profile={item.profile}
              nickname={item.nickname}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-[30rem]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default GuestBookList;
