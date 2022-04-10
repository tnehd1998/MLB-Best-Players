import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import PlayerThumbnail from "../../components/PlayerThumbnail";
import { combinedName, getAwardWinnerPlayer } from "../../lib/players";

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
  award?: string;
  awardedYear?: number;
  league?: string;
}

interface IProps {
  MVPPlayers: IPlayerData[];
  CYYoungPlayers: IPlayerData[];
  ROYPlayers: IPlayerData[];
}

const WinnerPage = ({ MVPPlayers, CYYoungPlayers, ROYPlayers }: IProps) => {
  return (
    <Layout title="Winners">
      <Head>
        <title>MLB | Winners</title>
        <meta name="description" content="MLB Winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <h1>MVP</h1>
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {MVPPlayers?.map((player: IPlayerData, index: number) => (
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
        <h1>CY Young Award</h1>
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {CYYoungPlayers?.map((player: IPlayerData, index: number) => (
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
        <h1>Rookie of the Year</h1>
        <ul className="grid gap-4 grid-cols-4 grid-rows-3 text-center">
          {ROYPlayers?.map((player: IPlayerData, index: number) => (
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

export async function getStaticProps() {
  const MVPPlayers = await getAwardWinnerPlayer("MVP");
  const CYYoungPlayers = await getAwardWinnerPlayer("CY");
  const ROYPlayers = await getAwardWinnerPlayer("ROY");

  return {
    props: {
      MVPPlayers,
      CYYoungPlayers,
      ROYPlayers,
    },
  };
}

export default WinnerPage;
