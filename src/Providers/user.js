import { selector } from "recoil";
import { sessionState } from "./session";

export const userState = selector({
    key: 'userState',
    get: ({get}) => {
        const session = get(sessionState)
        return session?.user || null
    },
})