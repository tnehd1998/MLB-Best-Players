import { addPlayerToLikePage } from "./players";

export const addPlayerToLocalStorage = async (title: string) => {
  const currentPlayer = await addPlayerToLikePage(title);
  const existingPlayers = localStorage.getItem("mlb-best-players");
  const parsedExistingPlayers = JSON.parse(existingPlayers || "");

  localStorage.setItem(
    "mlb-best-players",
    JSON.stringify([...parsedExistingPlayers, currentPlayer])
  );
};
