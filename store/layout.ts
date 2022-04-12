import { atom } from "recoil";

export const isLikedPlayerState = atom<boolean>({
  key: "isLikedPlayerState",
  default: false,
});
