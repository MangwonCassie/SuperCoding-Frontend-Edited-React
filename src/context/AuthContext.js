import React from 'react';
import { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {

    }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //로그인 상태 확인해주는 로직
    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if(storedUserLoggedInInfo === '1') setIsLoggedIn(true)
        //false는 초기값이라 굳이 쓸 필요 x
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };


    return(
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
        {props.children}
       
      </AuthContext.Provider>
    )
};

export default AuthContext;