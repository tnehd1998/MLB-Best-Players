import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist({
  key: "mlb-best-players",
  storage: localStorage,
});

export const likePlayerState = atom<IPlayerData[]>({
  key: "likePlayerState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
