import axios from "axios";
import { getAllProspectPlayers } from "lib/players";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/organisms/Layout";
import PlayerList from "../../components/templates/PlayerList";

interface IPlayerData {
  name: string;
  team: string;
  position: string;
  currentAge: number;
  leftYear: number;
  playerImg: string;
  playerVideo: string;
}

interface IProps {
  players: IPlayerData[];
}

const ProspectPage: NextPage<IProps> = ({ players }) => {
  return (
    <Layout title="Top Players Before FA">
      <Head>
        <title>MLB | Prospects</title>
        <meta name="description" content="MLB Prospects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <PlayerList players={players} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const players = await getAllProspectPlayers();

  return {
    props: {
      players,
    },
  };
}

export default ProspectPage;
