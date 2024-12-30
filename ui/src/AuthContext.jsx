import { createContext, useContext, useState } from "react";
import { userGetRequest } from "./pages/components/exports";




const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState();

    const getUser = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await userGetRequest("/getUser", token);
            setUser(response.data);
        } catch (e) {
            console.log("Failed to get user", e);
        }
    };


    const values = {
        user,
        getUser
    }

    return <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
}