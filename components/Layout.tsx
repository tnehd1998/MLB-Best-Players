import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { addPlayerToLikePage } from "../lib/players";

interface IProps {
  title: string;
  goBackBtn?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, goBackBtn, children }: IProps) => {
  const router = useRouter();
  const onClickGoBack = () => {
    router.back();
  };

  const onClickLike = async () => {
    console.log("Like", title);
    const data = await addPlayerToLikePage(title);
    console.log(data);
  };

  return (
    <div>
      <header className="bg-white w-full h-24 justify-center text-3xl px-10 font-medium fixed text-gray-700 border-b top-0 flex items-center z-50">
        {goBackBtn && (
          <>
            <button
              onClick={onClickGoBack}
              className="absolute left-4 hover:scale-125 cursor-pointer transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button
              onClick={onClickLike}
              className="absolute right-4 hover:scale-125 cursor-pointer transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </>
        )}
        <span>{title}</span>
      </header>
      <main className="py-28">{children}</main>
      <nav className="bg-white text-gray-700 border-t h-24 fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-evenly text-xs">
        <Link href="/">
          <a className="flex flex-col items-center space-y-2 justify-center hover:scale-125 cursor-pointer transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Top 100</span>
          </a>
        </Link>
        <Link href="/prospect">
          <a className="flex flex-col items-center space-y-2 justify-center hover:scale-125 cursor-pointer transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Prospect</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
