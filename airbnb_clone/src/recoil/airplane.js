import { atom } from "recoil";

export const guestNum = atom({
  key: "guestNum",
  default: 1,
});

export const guestChildNum = atom({
  key: "guestChildNum",
  default: 0,
});

export const onTrue = atom({
  key: "onTrue",
  default: true,
});