import { createContext, useReducer, useState } from "react";
import userReduces from "./reduces/user.reduces"
const userContext = createContext({});

const UserProvider = ({ children }) => {
    const [users, dispach] = useReducer(userReduces, []);
    const [userLogin, setUserLogin] = useState({});

    const setLogin = (current) => {
        console.log(current);
        setUserLogin(current)
    }
    const shared = { setLogin, users ,userLogin}
    return (
        <userContext.Provider value={shared}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider
export { userContext }
