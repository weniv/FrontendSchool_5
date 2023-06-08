import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { signOut } from 'firebase/auth'
import { appAuth } from "../firebase/config"

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(appAuth).then(() => {
            // Sign-out successful.
            dispatch({ type: "logout" });
            setError(null);
            setIsPending(false);
        }).catch((error) => {
            // An error happened.
            setError(error.message);
            setIsPending(false);
            console.log(error.message);
        });
    }

    return { error, isPending, logout }
}