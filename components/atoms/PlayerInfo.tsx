import React from "react";

interface IProps {
  content: string;
}

const PlayerInfo = ({ content }: IProps) => {
  return <p className="border-b-2 border-b-slate-400">{content}</p>;
};

export default PlayerInfo;
