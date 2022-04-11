import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import PlayerList from "../../components/PlayerList";

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
        <title>MLB | Prospect</title>
        <meta name="description" content="MLB Prospect Players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <PlayerList players={players} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await axios("http://localhost:3000/api/prospect");
  const players = response.data;

  return {
    props: {
      players,
    },
  };
}

export default ProspectPage;
