import { atom } from "recoil";

export const likedMusicsState = atom({
  key: "likedMusicsState",
  default: [],
});

export const searchClickedState = atom({
  key: "searchClicked",
  default: false,
});
