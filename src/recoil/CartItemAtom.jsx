import { atom } from "recoil";

/**
 * atom은 상태의 최소단위이다.
 * atom에는 기본적으로 두가지 속성을 적어줘야한다. -> key, default
 * key는 atom의 이름이다. -> 주의할 점은 전역적으로 유일한 값이어야한다.
 * default는 초기값이다.
 */
export const CartItemAom = atom({
  key: "CartItemAtom",
  default: [],
});
