import { atom } from "recoil";


export const loginAtom = atom({
    key:"loginState",
    default: false
});

export const menuAtom = atom({
    key:"menuState",
    default:false
});

export const profileAtom = atom({
    key:"profileState",
    default: false
});

