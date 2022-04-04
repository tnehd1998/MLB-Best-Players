import axios from "axios";

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

export const getAllPlayers = async () => {
  const response = await axios("http://localhost:3000/api/ranking");
  return response.data;
};

const combinedName = (name: string) => {
  return name.split(" ").join("");
};

export const getCertainPlayer = async (playerName: string) => {
  const players = await getAllPlayers();

  const certainPlayer = players.find(
    (player: IPlayerData) =>
      combinedName(player.name) === combinedName(playerName)
  );

  return certainPlayer;

  return;
};
