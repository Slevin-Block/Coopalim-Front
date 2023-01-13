import { atom } from "recoil";

export const infoBulleState = atom({
    key: 'infoBulleState',
    default : {open : false, msg : ""},
})