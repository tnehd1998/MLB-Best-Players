import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import PlayerList from "../components/PlayerList";

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
  players: IPlayerData[];
}

const Home: NextPage<IProps> = ({ players }) => {
  return (
    <Layout title="MLB Top 100 FA Players">
      <Head>
        <title>MLB | Top 100</title>
        <meta name="description" content="MLB Top100 FA Players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <PlayerList players={players} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await axios("http://localhost:3000/api/ranking");
  const players = response.data;

  return {
    props: {
      players,
    },
  };
}

export default Home;
