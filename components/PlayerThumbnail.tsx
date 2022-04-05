import Image from "next/image";
import React from "react";

interface IProps {
  playerImg: string;
  name: string;
}

const PlayerThumbnail = ({ playerImg, name }: IProps) => {
  return (
    <div className="rounded-lg border-2 border-black hover:scale-110 cursor-pointer transition-all text-lg">
      <Image
        className="rounded-t-lg"
        src={playerImg}
        width={200}
        height={300}
      />
      <p>{name}</p>
    </div>
  );
};

export default PlayerThumbnail;
