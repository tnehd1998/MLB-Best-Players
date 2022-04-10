import Head from "next/head";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import Layout from "../../components/Layout";
import PlayerThumbnail from "../../components/PlayerThumbnail";
import { combinedName, getAwardWinnerPlayer } from "../../lib/players";

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

const WinnerPage = ({ MVPPlayers, CYYoungPlayers, ROYPlayers }: IProps) => {
  const [mvpYear, setMvpYear] = useState(2017);
  const [cyYoungYear, setcyYoungYearYear] = useState(2017);
  const [royYear, setRoyYear] = useState(2017);

  const onClickDecrease = (
    state: number,
    setState: Dispatch<SetStateAction<number>>
  ) => {
    if (state === 2017) {
      return;
    }
    return setState((year: number) => year - 1);
  };

  const onClickIncrease = (
    state: number,
    setState: Dispatch<SetStateAction<number>>
  ) => {
    if (state === 2021) {
      return;
    }
    return setState((year: number) => year + 1);
  };

  return (
    <Layout title="Award Winners">
      <Head>
        <title>MLB | Winners</title>
        <meta name="description" content="MLB Winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickDecrease(mvpYear, setMvpYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <ul className="grid gap-4 grid-cols-2 text-center px-16 py-4">
            {MVPPlayers?.map((player: IPlayerData, index: number) => {
              return (
                player.year === mvpYear && (
                  <Link key={index} href={`/${combinedName(player.name)}`}>
                    <a>
                      <PlayerThumbnail
                        playerImg={player.playerImg}
                        name={player.name}
                        year={player.year}
                        league={player.league}
                        awardType="MVP"
                      />
                    </a>
                  </Link>
                )
              );
            })}
          </ul>
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickIncrease(mvpYear, setMvpYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickDecrease(cyYoungYear, setcyYoungYearYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <ul className="grid gap-4 grid-cols-2 text-center px-16 py-4">
            {CYYoungPlayers?.map((player: IPlayerData, index: number) => {
              {
                return (
                  player.year === cyYoungYear && (
                    <Link key={index} href={`/${combinedName(player.name)}`}>
                      <a>
                        <PlayerThumbnail
                          playerImg={player.playerImg}
                          name={player.name}
                          year={player.year}
                          league={player.league}
                          awardType="Cy Young"
                        />
                      </a>
                    </Link>
                  )
                );
              }
            })}
          </ul>
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickIncrease(cyYoungYear, setcyYoungYearYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickDecrease(royYear, setRoyYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <ul className="grid gap-4 grid-cols-2 text-center px-16 py-4">
            {ROYPlayers?.map((player: IPlayerData, index: number) => {
              return (
                player.year === royYear && (
                  <Link key={index} href={`/${combinedName(player.name)}`}>
                    <a>
                      <PlayerThumbnail
                        playerImg={player.playerImg}
                        name={player.name}
                        year={player.year}
                        league={player.league}
                        awardType="ROY"
                      />
                    </a>
                  </Link>
                )
              );
            })}
          </ul>
          <button
            className="hover:scale-125 cursor-pointer transition-all"
            onClick={() => onClickIncrease(royYear, setRoyYear)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
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
