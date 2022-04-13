import PlayerThumbnail from "components/molecules/PlayerThumbnail";
import React from "react";

interface IPlayerData {
  name: string;
  playerImg: string;
  team?: string;
  position?: string;
  SignedAge?: number;
  years?: number;
  period?: string;
  averageValue?: string;
  totalValue?: string;
  currentAge?: number;
  leftYear?: number;
  playerVideo?: string;
  year?: number;
  league?: string;
}

interface IProps {
  players: IPlayerData[];
}

const RegularThumbnail = ({ players }: IProps) => {
  return (
    <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
      {players?.map((player: IPlayerData, index: number) => (
        <PlayerThumbnail
          key={index}
          playerImg={player.playerImg}
          name={player.name}
        />
      ))}
    </ul>
  );
};

export default RegularThumbnail;
