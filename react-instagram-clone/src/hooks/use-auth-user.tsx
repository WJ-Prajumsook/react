import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import FirebaseContext from "../context/firebase-context";
import Firebase from 'firebase/app';

export const useAuthUser = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser') || '{}'));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const response = firebase.auth().onAuthStateChanged((authUser: Firebase.User) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => response();
    }, [firebase]);

    return { user };
}