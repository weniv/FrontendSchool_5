import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(appFireStore, transaction),
            (snapshot) => {
                let result = [];

                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            }
        )

        return () => {
            unsubscribe();
        }
    }, []);

    return { documents, error }
}