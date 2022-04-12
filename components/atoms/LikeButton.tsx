import React, { Dispatch, SetStateAction } from "react";
import { toggleLikePlayer } from "../../lib/like";

interface IProps {
  title: string;
  isLikedPlayer: boolean;
  setIsLikedPlayer: Dispatch<SetStateAction<boolean>>;
  isLiked: boolean;
}

const LikeButton = ({
  title,
  isLikedPlayer,
  setIsLikedPlayer,
  isLiked,
}: IProps) => {
  const onClickLike = () => {
    toggleLikePlayer(title);
    setIsLikedPlayer(!isLikedPlayer);
  };

  return (
    <>
      {isLiked ? (
        <button
          onClick={onClickLike}
          className="absolute right-4 text-red-600 hover:scale-125 cursor-pointer transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
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
      )}
    </>
  );
};

export default LikeButton;
