import Image from "next/image";
import React from "react";
import PlayerDescription from "./PlayerDescription";
import PlayerInfo from "./PlayerInfo";

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
  const salaryPerGame = (money: string) => {
    const moneyToNumber = Number(money.replace(/[^0-9.-]+/g, ""));
    const perGame = Math.round(moneyToNumber / 162);

    return "$" + perGame.toLocaleString();
  };

  return (
    <main className="flex justify-center mx-3 p-2 rounded-lg text-sm tablet:text-xl">
      <div className="mr-4">
        <Image
          src={player.playerImg}
          className="p-12 border border-slate-700 border-solid rounded-xl"
          width={200}
          height={300}
        />
      </div>
      <PlayerDescription player={player} />
    </main>
  );
};

export default Player;
