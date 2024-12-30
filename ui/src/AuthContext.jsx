import { createContext, useContext, useState } from "react";
import { userGetRequest } from "./pages/components/exports";




const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [ user, setUser ] = useState();
    const [ loggedIn, setLoggedIn ] = useState();

    const getUser = async () => {
        const token = localStorage.getItem("token");
        if(!token){
            setLoggedIn(false);
            return
        }
        try {
            const response = await userGetRequest("/getUser", token);
            setUser(response.data);
            setLoggedIn(true);
        } catch (e) {
            console.log("Failed to get user", e);
        }
    };


    const values = {
        user,
        getUser,
        loggedIn
    }

    return <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
}