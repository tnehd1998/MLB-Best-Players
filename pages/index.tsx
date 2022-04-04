import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PlayerThumbnail from "../components/PlayerThumbnail";

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
    <div>
      <Head>
        <title>MLB | Top 100</title>
        <meta name="description" content="MLB Top100 FA Players" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <h1>MLB Top 100 FA Players</h1>
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {players?.map((player: IPlayerData, index: number) => (
            <Link key={index} href={`/${player.name}`}>
              <a>
                <PlayerThumbnail
                  playerImg={player.playerImg}
                  name={player.name}
                />
              </a>
            </Link>
          ))}
        </ul>
      </main>
    </div>
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
