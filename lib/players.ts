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

export const getCertainPlayer = async (
  playerName: string | string[] | undefined
) => {
  const players = await getAllPlayers();
  const certainPlayer = players.find(
    (player: IPlayerData) => player.name === playerName
  );

  return certainPlayer;
};
