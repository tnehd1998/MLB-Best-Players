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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const combinedName = (name: string) => {
  return name.split(" ").join("");
};

export const getAllTopPlayers = async () => {
  const response = await axios(`${baseUrl}/ranking`);

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
  const response = await axios(`${baseUrl}/prospect`);
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

export const getAwardWinnerPlayer = async (award: string) => {
  const response = await axios(`${baseUrl}/winner/${award}`);
  return response.data;
};

export const getAllPlayerPath = async () => {
  const allTopPlayers = await getAllTopPlayers();
  const allProspectPlayers = await getAllProspectPlayers();

  const allTopPlayersPath = allTopPlayers.map((player: IPlayerData) => {
    return { params: { player: combinedName(player.name).toString() } };
  });
  const allProspectPlayersPath = allProspectPlayers.map(
    (player: IPlayerData) => {
      return { params: { player: combinedName(player.name).toString() } };
    }
  );

  return [...allTopPlayersPath, ...allProspectPlayersPath];
};
