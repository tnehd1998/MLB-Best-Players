import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import PlayerDescription from "../components/PlayerDescription";
import { getCertainProspectPlayer, getCertainTopPlayer } from "../lib/players";

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

const PlayerPage: NextPage<IProps> = ({ player }) => {
  const salaryPerGame = (money: string) => {
    const moneyToNumber = Number(money.replace(/[^0-9.-]+/g, ""));
    const perGame = Math.round(moneyToNumber / 162);

    return "$" + perGame.toLocaleString();
  };

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={player.name} goBackBtn={true}>
      <Head>
        <title>MLB | {player.name}</title>
        <meta name="description" content={`Information about ${player.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PlayerDescription player={player} />
      <main>
        <div className="flex flex-col justify-center text-center py-5 text-sm tablet:text-xl">
          <p>{player.name}는 얼마나 잘하는 선수일까?</p>
        </div>
        <div className="flex justify-center align-middle">
          <iframe
            src={player.playerVideo}
            width="440"
            height="300"
            allowFullScreen
          />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (params) {
    const playerName = params.player as string;
    const player =
      (await getCertainTopPlayer(playerName)) ??
      (await getCertainProspectPlayer(playerName));
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
