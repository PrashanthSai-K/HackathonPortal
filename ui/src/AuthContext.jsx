import { createContext, useContext, useEffect, useState } from "react";
import { userGetRequest } from "./pages/components/exports";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
  
    const getUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoggedIn(false);
        setLoading(false);
        return;
      }
      try {
        const response = await userGetRequest("/getUser", token);
        setUser(response.data);
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
        console.error("Failed to get user", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getUser();
    }, []);
  
    if (loading) {
      return (
        <div className=" h-screen w-full flex items-center justify-center">
            <i className="pi pi-spin pi-spinner text-4xl"></i>
        </div>
      ) // Optional: Add a loading spinner or placeholder
    }

  // async () => {
  //     const token = localStorage.getItem("token");
  //     if(!token){
  //         setLoggedIn(false);
  //         return
  //     }
  //     try {
  //         setLoggedIn(true);
  //         const response = await userGetRequest("/getUser", token);
  //         setUser(response.data);
  //         setLoggedIn(true);
  //         return response.data;
  //     } catch (e) {
  //         setLoggedIn(false);
  //         console.log("Failed to get user", e);
  //     }
  // };

  const values = {
    user,
    getUser,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
