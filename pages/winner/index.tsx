import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import PlayerList from "../../components/PlayerList";
import { getAwardWinnerPlayer } from "../../lib/players";

interface IPlayerData {
  name: string;
  year: number;
  league: string;
  playerImg: string;
}

interface IProps {
  MVPPlayers: IPlayerData[];
  CYYoungPlayers: IPlayerData[];
  ROYPlayers: IPlayerData[];
}

const WinnerPage: NextPage<IProps> = ({
  MVPPlayers,
  CYYoungPlayers,
  ROYPlayers,
}) => {
  const [mvpYear, setMvpYear] = useState(2017);
  const [cyYoungYear, setCyYoungYearYear] = useState(2017);
  const [royYear, setRoyYear] = useState(2017);

  return (
    <Layout title="Award Winners">
      <Head>
        <title>MLB | Winners</title>
        <meta name="description" content="MLB Winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <PlayerList
          players={MVPPlayers}
          winnerState={mvpYear}
          winnerSetState={setMvpYear}
        />
        <PlayerList
          players={CYYoungPlayers}
          winnerState={cyYoungYear}
          winnerSetState={setCyYoungYearYear}
        />
        <PlayerList
          players={ROYPlayers}
          winnerState={royYear}
          winnerSetState={setRoyYear}
        />
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
