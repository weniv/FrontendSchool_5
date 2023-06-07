import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

// 회원가입을 진행하는 훅
export const useSignup = () => {
    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 현재 서버와의 통신 상태를 저장합니다.
    const [isPending, setPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null);
        setPending(true);

        // 회원가입이 처리되는 함수
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                if (!user) {
                    throw new Error('회원 가입에 실패했습니다!');
                }

                // 회원의 별명정보를 업데이트합니다.
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        setError(null);
                        setPending(false);
                        dispatch({ type: 'login', payload: user });
                    }).catch((err) => {
                        setError(err.message);
                        setPending(false);
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                setError(err.message);
                setPending(false);
                console.log(err.message);
            });
    }
    return { error, isPending, signup }
}