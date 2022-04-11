import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PlayerList from "../../components/PlayerList";
import { getLikePlayers } from "../../lib/like";

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

const LikePage: NextPage = () => {
  const [players, setPlayers] = useState<IPlayerData[]>([]);

  useEffect(() => {
    const playerData = getLikePlayers();
    setPlayers(playerData);
  }, []);

  return (
    <Layout title="My Favorite Players" removeAll={true}>
      <Head>
        <title>MLB | Like</title>
        <meta name="description" content="MLB Players I Like" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <PlayerList players={players} />
      </main>
    </Layout>
  );
};

export default LikePage;
