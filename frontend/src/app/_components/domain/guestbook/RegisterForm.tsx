import React from 'react';
import BlurFade from '../../ui/blur-fade';

const RegisterForm = () => {
  return (
    <BlurFade delay={1} inView>
      <form className="flex flex-row justify-center items-center gap-3  w-[30rem] p-10 ">
        <div>
          <div className="flex flex-row gap-3">
            <div>
              <label htmlFor="nickname">닉네임</label>
              <input
                type="text"
                id="nickname"
                className="border-solid border-[0.1rem] rounded-[0.4rem] border-gray-100 w-[8rem]"
              />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                className="border-solid border-[0.1rem] rounded-[0.4rem] border-gray-100 w-[9rem]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <label htmlFor="content">내용</label>
            <input
              name="content"
              id="content"
              className="border-solid border-[0.1rem] border-gray-100 rounded-[0.4rem] w-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-28">
          <button
            type="button"
            className="flex justify-center items-center size-full border-solid border-[0.1rem] rounded-[0.4rem] bg-gray-300 text-white"
          >
            등록
          </button>
        </div>
      </form>
    </BlurFade>
  );
};

export default RegisterForm;
