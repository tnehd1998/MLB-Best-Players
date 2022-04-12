import Image from "next/image";
import React from "react";
import PlayerDescription from "./PlayerDescription";

interface IPlayerData {
  name: string;
  team: string;
  position: string;
  SignedAge?: number;
  years?: number;
  period?: string;
  averageValue?: string;
  totalValue?: string;
  currentAge?: number;
  leftYear?: number;
  playerImg: string;
  playerVideo: string;
}

interface IProps {
  player: IPlayerData;
}

const Player = ({ player }: IProps) => {
  return (
    <>
      <div className="mr-4">
        <Image
          src={player.playerImg}
          className="p-12 border border-slate-700 border-solid rounded-xl"
          width={200}
          height={300}
        />
      </div>
      <PlayerDescription player={player} />
    </>
  );
};

export default Player;
