import { createContext } from "react";

export const AuthenticationContext = createContext({
    userLoggedIn: false,
    userData: null
});
