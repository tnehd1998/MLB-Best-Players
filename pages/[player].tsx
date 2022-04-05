import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import { getCertainPlayer } from "../lib/players";

interface IPlayerData {
  name: string;
  team: string;
  years: number;
  SignedAge: number;
  averageValue: string;
  totalValue: string;
  period: string;
  position: string;
  playerImg: string;
  playerVideo: string;
}

interface IProps {
  player: IPlayerData;
}

const PlayerPage: NextPage<IProps> = ({ player }) => {
  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={player.name} goBackBtn={true}>
      <div className="flex justify-evenly mx-3 p-2 rounded-lg">
        <Image
          src={player.playerImg}
          className="p-12 border border-slate-700 border-solid rounded-xl"
          width={200}
          height={300}
        />
        <div className="text-left  text-xl flex flex-col justify-evenly">
          <p className="border-b-2 border-b-slate-400">이름 : {player.name}</p>
          <p className="border-b-2 border-b-slate-400">
            소속 팀 : {player.team}
          </p>
          <p className="border-b-2 border-b-slate-400">
            포지션 : {player.position}
          </p>
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
            총 계약 금액 : {player.totalValue}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center py-5 ">
        <h1>{player.name} 얼마나 잘하길래?</h1>
        <h1>TMI : 치킨 한마리 === $15</h1>
      </div>
      <div className="flex justify-center content-center">
        <iframe src={player.playerVideo} width="600" height="360" />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (params) {
    const playerName = params.player as string;
    const player = await getCertainPlayer(playerName);
    return {
      props: { player },
    };
  }

  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default PlayerPage;