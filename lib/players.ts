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

export const combinedName = (name: string) => {
  return name.split(" ").join("");
};

export const getAllTopPlayers = async () => {
  const response = await axios("http://localhost:3000/api/ranking");
  return response.data;
};

export const getCertainTopPlayer = async (playerName: string) => {
  const players = await getAllTopPlayers();

  const certainPlayer = players.find(
    (player: IPlayerData) =>
      combinedName(player.name) === combinedName(playerName)
  );

  return certainPlayer;
};

export const getAllProspectPlayers = async () => {
  const response = await axios("http://localhost:3000/api/prospect");
  return response.data;
};

export const getCertainProspectPlayer = async (playerName: string) => {
  const players = await getAllProspectPlayers();

  const certainPlayer = players.find(
    (player: IPlayerData) =>
      combinedName(player.name) === combinedName(playerName)
  );

  return certainPlayer;
};

export const addPlayerToLikePage = async (playerName: string) => {
  const convertedName = combinedName(playerName);
  const playerData =
    (await getCertainTopPlayer(convertedName)) ??
    (await getCertainProspectPlayer(convertedName));

  return playerData;
};

export const getAwardWinnerPlayer = async (playerType: string) => {
  const response = await axios(
    `http://localhost:3000/api/winner/${playerType}`
  );
  return response.data;
};
