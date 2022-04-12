import React, { Dispatch, SetStateAction } from "react";
import PlayerThumbnail from "../molecules/PlayerThumbnail";
import ToggleYearButton from "../atoms/ToggleYearButton";

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
  winnerState: number;
  winnerSetState: Dispatch<SetStateAction<number>>;
  winnerTitle: string;
}

const WinnerThumbnail = ({
  players,
  winnerState,
  winnerSetState,
  winnerTitle,
}: IProps) => {
  return (
    <div className="flex justify-center items-center border-b-[1px] p-10">
      <ToggleYearButton
        buttonType="decrement"
        winnerState={winnerState}
        winnerSetState={winnerSetState}
      />
      <ul className="grid gap-4 grid-cols-2 text-center">
        {players?.map((player: IPlayerData, index: number) => {
          return (
            player.year === winnerState && (
              <PlayerThumbnail
                key={index}
                playerImg={player.playerImg}
                name={player.name}
                year={player.year}
                league={player.league}
                awardType={winnerTitle}
              />
            )
          );
        })}
      </ul>
      <ToggleYearButton
        buttonType="increment"
        winnerState={winnerState}
        winnerSetState={winnerSetState}
      />
    </div>
  );
};

export default WinnerThumbnail;
