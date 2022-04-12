import { useRouter } from "next/router";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();

  const onClickGoBack = () => {
    router.back();
  };
  return (
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
  );
};

export default GoBackButton;
