import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React from "react";
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
}

interface IProps {
  player: IPlayerData;
}

const PlayerPage: NextPage<IProps> = ({ player }) => {
  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <h1>{player.team}</h1>
      <h1>{player.years}</h1>
      <h1>{player.SignedAge}</h1>
      <h1>{player.averageValue}</h1>
      <h1>{player.totalValue}</h1>
      <h1>{player.period}</h1>
      <h1>{player.position}</h1>
      <Image src={player.playerImg} width={200} height={300} />
    </div>
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
