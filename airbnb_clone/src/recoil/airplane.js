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

export const heartArray = atom({
  key: "heartArray",
  default: [],
});

export const loginOn = atom({
  key: "loginOn",
  default: true,
});
