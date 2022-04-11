import Image from "next/image";
import React from "react";

interface IProps {
  playerImg: string;
  name: string;
  year?: number;
  league?: string;
  awardType?: string;
}

const PlayerThumbnail = ({
  playerImg,
  name,
  year,
  league,
  awardType,
}: IProps) => {
  return (
    <div className="h-50 rounded-lg border-2 border-black hover:scale-110 cursor-pointer transition-all">
      {year && (
        <p className="border-b-2 border-black">
          {year} {league} {awardType}
        </p>
      )}
      <Image
        className={!year ? "rounded-t-lg" : ""}
        src={playerImg}
        width={200}
        height={320}
      />
      <p className="border-black h-10 text-center text-sm font-light leading-5 tablet:text-lg">
        {name}
      </p>
    </div>
  );
};

export default PlayerThumbnail;
