import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface IProps {
  player: string;
}

const PlayerPage: NextPage<IProps> = ({ player }) => {
  return (
    <div>
      <h1>{player}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  let player;
  if (params) {
    player = params.player;
  }

  return {
    props: { player },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default PlayerPage;
