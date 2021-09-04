import firebase from "firebase/app";

export const getUserById = async (uid: string) => {
    const result = await firebase.firestore().collection('users').where('userId', '==', uid).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
    }));

    return user[0];
}