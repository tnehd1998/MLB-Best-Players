import React, { Dispatch, SetStateAction } from "react";
import GoBackButton from "./GoBackButton";
import LikeButton from "./LikeButton";
import RemoveAllButton from "./RemoveAllButton";

interface IProps {
  goBackBtn?: boolean;
  isLikedPlayer: boolean;
  title: string;
  setIsLikedPlayer: Dispatch<SetStateAction<boolean>>;
  removeAll?: boolean;
}

const LayoutHeader = ({
  goBackBtn,
  isLikedPlayer,
  title,
  setIsLikedPlayer,
  removeAll,
}: IProps) => {
  return (
    <header className="bg-white w-full h-24 justify-center px-10 font-medium fixed text-gray-700 border-b top-0 flex items-center z-50 text-xl tablet:text-3xl">
      {goBackBtn && (
        <>
          <GoBackButton />
          {isLikedPlayer ? (
            <LikeButton
              title={title}
              isLikedPlayer={isLikedPlayer}
              setIsLikedPlayer={setIsLikedPlayer}
              isLiked={true}
            />
          ) : (
            <LikeButton
              title={title}
              isLikedPlayer={isLikedPlayer}
              setIsLikedPlayer={setIsLikedPlayer}
              isLiked={false}
            />
          )}
        </>
      )}
      <span>{title}</span>
      {removeAll && <RemoveAllButton />}
    </header>
  );
};

export default LayoutHeader;
