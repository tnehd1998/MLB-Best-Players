import Image from "next/image";
import React from "react";

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

  if (!player) {
    return <div>Loading...</div>;
  }

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
      <div className="text-left flex flex-col justify-evenly">
        <p className="border-b-2 border-b-slate-400">이름 : {player.name}</p>
        <p className="border-b-2 border-b-slate-400">소속 팀 : {player.team}</p>
        <p className="border-b-2 border-b-slate-400">
          포지션 : {player.position}
        </p>
        {player.SignedAge ? (
          <>
            <p className="border-b-2 border-b-slate-400">
              계약 당시 나이 : {player.SignedAge}
            </p>
            <p className="border-b-2 border-b-slate-400">
              계약 기간 : {player.years}
            </p>
            <p className="border-b-2 border-b-slate-400">
              계약 년도 : {player.period}
            </p>
            <p className="border-b-2 border-b-slate-400">
              연평균 금액 : {player.averageValue}
            </p>
            <p className="border-b-2 border-b-slate-400">
              계약 금액 : {player.totalValue}
            </p>
            {player.averageValue && (
              <p className="border-b-2 border-b-slate-400">
                한 경기당 금액 : {salaryPerGame(player.averageValue)}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="border-b-2 border-b-slate-400">
              현재 나이 : {player.currentAge}
            </p>
            <p className="border-b-2 border-b-slate-400">
              FA까지 남은 기간 : {player.leftYear}년
            </p>
          </>
        )}
      </div>
    </main>
  );
};

export default PlayerDescription;
