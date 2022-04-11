import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import PlayerDescription from "../components/PlayerDescription";
import PlayerVideo from "../components/PlayerVideo";
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
      <PlayerVideo name={player.name} playerVideo={player.playerVideo} />
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
