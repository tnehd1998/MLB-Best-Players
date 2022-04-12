import React from "react";
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

const PlayerDescription = ({ player }: IProps) => {
  const salaryPerGame = (money: string) => {
    const moneyToNumber = Number(money.replace(/[^0-9.-]+/g, ""));
    const perGame = Math.round(moneyToNumber / 162);

    return "$" + perGame.toLocaleString();
  };

  return (
    <div className="text-left flex flex-col justify-evenly">
      <PlayerInfo content={`이름 : ${player.name}`} />
      <PlayerInfo content={`소속 팀 : ${player.team}`} />
      <PlayerInfo content={`포지션 : ${player.position}`} />
      {player.SignedAge ? (
        <>
          <PlayerInfo content={`계약 당시 나이 : ${player.SignedAge}`} />
          <PlayerInfo content={`계약 기간 : ${player.years}`} />
          <PlayerInfo content={`계약 년도 : ${player.period}`} />
          <PlayerInfo content={`연평균 금액 : ${player.averageValue}`} />
          <PlayerInfo content={`계약 금액 : ${player.totalValue}`} />
          <PlayerInfo
            content={`한 경기당 금액 : ${salaryPerGame(player.averageValue!)}`}
          />
        </>
      ) : (
        <>
          <PlayerInfo content={`현재 나이 : ${player.currentAge}`} />
          <PlayerInfo content={`FA까지 남은 기간 : ${player.leftYear}년`} />
        </>
      )}
    </div>
  );
};

export default PlayerDescription;
