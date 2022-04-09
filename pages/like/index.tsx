import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import PlayerThumbnail from "../../components/PlayerThumbnail";
import { getLikePlayers } from "../../lib/like";
import { combinedName } from "../../lib/players";

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

const LikePage = () => {
  const [likePlayers, setLikePlayers] = useState<IPlayerData[]>([]);

  useEffect(() => {
    const players = getLikePlayers();
    setLikePlayers(players);
  }, []);

  return (
    <Layout title="My Favorite Players">
      <Head>
        <title>MLB | Like</title>
        <meta name="description" content="MLB Players I Like" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {likePlayers?.map((player: IPlayerData, index: number) => (
            <Link key={index} href={`/${combinedName(player.name)}`}>
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
    </Layout>
  );
};

export default LikePage;
