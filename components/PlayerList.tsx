import React, { Dispatch, SetStateAction } from "react";
import PlayerThumbnail from "./PlayerThumbnail";

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
  winnerState?: number;
  winnerSetState?: Dispatch<SetStateAction<number>>;
}

const PlayerList = ({ players, winnerState, winnerSetState }: IProps) => {
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
    <>
      {winnerState && winnerSetState ? (
        <div className="flex justify-center items-center border-b-[1px] p-10">
          <button
            className="hover:scale-125 cursor-pointer transition-all mr-4"
            onClick={() => onClickDecrease(winnerState, winnerSetState)}
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
                    awardType="MVP"
                  />
                )
              );
            })}
          </ul>
          <button
            className="hover:scale-125 cursor-pointer transition-all ml-4"
            onClick={() => onClickIncrease(winnerState, winnerSetState)}
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      ) : (
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {players?.map((player: IPlayerData, index: number) => (
            <PlayerThumbnail
              key={index}
              playerImg={player.playerImg}
              name={player.name}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PlayerList;
