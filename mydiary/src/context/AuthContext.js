import { createContext, useReducer, useEffect } from "react";
import { appAuth } from "../firebase/config";

// context 객체를 생성합니다.
const AuthContext = createContext();

// react 에서 children 컴포넌트 태그의 사이에 위치한 내용을 가르킵니다.
const AuthContextProvider = ({ children }) => {

    const authReducer = (state, action) => {
        switch (action.type) {
            case 'login':
                return { ...state, user: action.payload }
            case 'logout':
                return { ...state, user: null }
            case 'isAuthReady':
                return { ...state, user: action.payload, isAuthReady: true }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false
    });

    useEffect(() => {

        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: "isAuthReady", payload: user })
        });

        return () => {
            unsubscribe();
        }

    }, [])

    console.log('context : ', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }