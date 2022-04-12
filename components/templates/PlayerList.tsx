import React, { Dispatch, SetStateAction } from "react";
import RegularThumbnail from "../organisms/RegularThumbnail";
import WinnerThumbnail from "../organisms/WinnerThumbnail";

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
  winnerTitle?: string;
}

const PlayerList = ({
  players,
  winnerState,
  winnerSetState,
  winnerTitle,
}: IProps) => {
  return (
    <>
      {winnerState && winnerSetState && winnerTitle ? (
        <WinnerThumbnail
          players={players}
          winnerState={winnerState}
          winnerSetState={winnerSetState}
          winnerTitle={winnerTitle}
        />
      ) : (
        <RegularThumbnail players={players} />
      )}
    </>
  );
};

export default PlayerList;
