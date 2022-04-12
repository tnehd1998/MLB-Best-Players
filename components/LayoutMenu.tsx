import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  routingPath: string;
  menuType: string;
  children: React.ReactNode;
}

const LayoutMenu = ({ routingPath, menuType, children }: IProps) => {
  const router = useRouter();

  return (
    <Link href={routingPath}>
      {router.pathname === routingPath ? (
        <a className="flex flex-col items-center space-y-2 justify-center text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {children}
          </svg>
          <span>{menuType}</span>
        </a>
      ) : (
        <a className="flex flex-col items-center space-y-2 justify-center hover:scale-125 cursor-pointer transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {children}
          </svg>
          <span>{menuType}</span>
        </a>
      )}
    </Link>
  );
};

export default LayoutMenu;
