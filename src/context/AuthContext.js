import React, { createContext, useContext } from "react";
import Axios from 'axios'

const CryptoJS = require("crypto-js");
const EncryptSecret = 'Jknow2022'

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

function reducer(currentState, newState) {
    return { ...currentState, ...newState };
}

function useAuthState() {
    const context = useContext(AuthStateContext);
    if (!context) throw new Error("useAuthState must be used in AuthProvider");

    return context;
}

function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

    return context;
}

const initialState = {
    status: "idle",
    user: null,
    cart: null,
    error: null
};

function AuthProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

function Signin(userPhone, userPwd) {
    return new Promise((resolve, reject) =>
        Axios.post("http://localhost:8000/signin", {
            phone: userPhone,
            password: userPwd,
        }).then((res) => {
            if (res.data.status === 'ok') {
                console.log(res.data);
                const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(res.data.message[0]), EncryptSecret).toString();
                localStorage.setItem('users', JSON.stringify(ciphertext))
                localStorage.setItem('accessToken', res.data.token)
                localStorage.setItem('cart', res.data.cart)
                if (res.data.message[0].dream1 !== null) {
                    localStorage.setItem('popup', false)
                } else {
                    localStorage.setItem('popup', true)
                }
                return resolve(res.data);
            } else {
                return reject(res.data.message);
            }
        })
    )

}

async function Login(dispatch, username, password) {
    try {
        dispatch({ status: "pending" });
        const user = await Signin(username, password);
        dispatch({
            status: "loggedIn",
            user: user.message[0],
            cart: user.cart,
            error: null
        });
        return 'success'
    } catch (error) {
        dispatch({ status: "rejected", error });
    }
}

function logOut(dispatch) {
    dispatch(initialState);
    window.location = '/'
}

export { AuthProvider, useAuthState, useAuthDispatch, Login, logOut };
