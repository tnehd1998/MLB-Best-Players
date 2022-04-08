import { atom } from "recoil";

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

export const likePlayerState = atom<IPlayerData[]>({
  key: "likePlayerState",
  default: [],
});
