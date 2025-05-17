import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black text-blue-300">
      현재 접속하신 경로는 존재하지 않은 페이지 입니다.
      <Link href={'/'}>
        <p className="text-red-300">Home Page 이동 </p>
      </Link>
    </div>
  );
}
