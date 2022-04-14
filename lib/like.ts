import { addPlayerToLikePage } from "./players";

interface IPlayerData {
  name: string;
  team: string;
  position: string;
  SignedAge?: number;
  years?: number;
  period?: string;
  averageValue?: string;
  totalValue?: string;
  currentAge?: number;
  leftYear?: number;
  playerImg: string;
  playerVideo: string;
}

const addLikePlayer = async (title: string) => {
  const currentPlayer = await addPlayerToLikePage(title);
  const existingPlayers = localStorage.getItem("mlb-best-players");

  if (!existingPlayers) {
    return localStorage.setItem(
      "mlb-best-players",
      JSON.stringify([currentPlayer])
    );
  }

  const parsedExistingPlayers = JSON.parse(existingPlayers || "");

  return localStorage.setItem(
    "mlb-best-players",
    JSON.stringify([...parsedExistingPlayers, currentPlayer])
  );
};

const deleteLikePlayer = (playerName: string) => {
  const existingPlayers = localStorage.getItem("mlb-best-players");
  const parsedExistingPlayers = JSON.parse(existingPlayers || "");

  const filteredPlayers = parsedExistingPlayers.filter(
    (player: IPlayerData) => player.name !== playerName
  );

  return localStorage.setItem(
    "mlb-best-players",
    JSON.stringify([...filteredPlayers])
  );
};

export const isLikePlayer = (playerName: string) => {
  const existingPlayers = localStorage.getItem("mlb-best-players");

  if (!existingPlayers) {
    return;
  }

  const parsedExistingPlayers = JSON.parse(existingPlayers || "");

  const existingPlayer = parsedExistingPlayers.find(
    (player: IPlayerData) => player.name === playerName
  );

  return existingPlayer ? true : false;
};

export const toggleLikePlayer = (title: string) => {
  return isLikePlayer(title) ? deleteLikePlayer(title) : addLikePlayer(title);
};

export const getLikePlayers = () => {
  const existingPlayers = localStorage.getItem("mlb-best-players");

  if (!existingPlayers) {
    return;
  }

  const parsedExistingPlayers = JSON.parse(existingPlayers || "");

  return parsedExistingPlayers;
};

export const deleteAllLikePlayers = () => {
  localStorage.setItem("mlb-best-players", JSON.stringify([]));
  return location.reload();
};
