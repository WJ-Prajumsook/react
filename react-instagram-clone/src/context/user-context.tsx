import { createContext } from "react";
import firebase from "firebase/app";

const UserContext = createContext<firebase.User | null>(null);

export default UserContext;