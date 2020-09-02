import React from 'react';
import SInfo from 'react-native-sensitive-info';


type User = null | { email: string; password: string; };
interface AuthProviderProps {}

export const AuthContext = React.createContext<{
    user: User;
    login: () => void;
    logout: () => void;
}>({
    user: null,
    login: () => {},
    logout: () => {}
});


export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = React.useState<User>();
    
    const login = () => {
      const dummyUser = { email: "hans@gmail.com", password: "HansZimm" };
      SInfo.setItem("token", JSON.stringify(dummyUser), {});
      setUser(dummyUser);
    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout: () => {
                console.log('Logout');
                setUser(null);
                SInfo.deleteItem("token", {});
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}