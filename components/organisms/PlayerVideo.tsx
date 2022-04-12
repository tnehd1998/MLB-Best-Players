import React from "react";

interface IProps {
  name: string;
  playerVideo: string;
}

const PlayerVideo = ({ name, playerVideo }: IProps) => {
  return (
    <main>
      <div className="flex flex-col justify-center text-center py-5 text-sm tablet:text-xl">
        <p>{name}는 얼마나 잘하는 선수일까?</p>
      </div>
      <div className="flex justify-center align-middle">
        <iframe src={playerVideo} width="440" height="300" allowFullScreen />
      </div>
    </main>
  );
};

export default PlayerVideo;
