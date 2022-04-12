import React, { Dispatch, SetStateAction } from "react";
import PlayerThumbnail from "./PlayerThumbnail";
import WinnerButton from "./WinnerButton";

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
  const onClickDecrease = (
    state: number,
    setState: Dispatch<SetStateAction<number>>
  ) => {
    if (state === 2017) {
      return;
    }
    return setState((year: number) => year - 1);
  };

  const onClickIncrease = (
    state: number,
    setState: Dispatch<SetStateAction<number>>
  ) => {
    if (state === 2021) {
      return;
    }
    return setState((year: number) => year + 1);
  };

  return (
    <div className="flex justify-center items-center border-b-[1px] p-10">
      <WinnerButton
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
      <WinnerButton
        buttonType="increment"
        winnerState={winnerState}
        winnerSetState={winnerSetState}
      />
    </div>
  );
};

export default WinnerThumbnail;
