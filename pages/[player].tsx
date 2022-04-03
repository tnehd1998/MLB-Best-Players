import React from "react";

const PlayerPage = () => {
  return (
    <div className="rounded-lg border-2 border-black hover:scale-110 cursor-pointer transition-all">
      <Image
        className="rounded-t-lg"
        src={player.playerImg}
        width={200}
        height={300}
      />
      <h1>{player.name}</h1>
    </div>
  );
};

export default PlayerPage;
