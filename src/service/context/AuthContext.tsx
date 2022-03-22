import route from 'next/router';
import { createContext, MouseEventHandler, useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/connect';
import Cookie from 'js-cookie';

interface AuthContextProps {
    email?: string;
    photo?: string;
    loginGoogle?: () => Promise<void>;
    logout?: MouseEventHandler<HTMLParagraphElement>
};

interface User{
    name?: String;
    nickname?: String;
    seniority?: String;
    area?: String;
    comumone?: String;
    comumtwo?: String;
    comumthree?: String;
    description?: String;
    linkedin?: String;
    github?: String;
    youtube?: String;
    instagram?: String;
    photo?: String;
    email?: String;
}

const AuthContext = createContext<AuthContextProps>({});

const provider = new GoogleAuthProvider();

function setCookieIdUser(user: any) {
    Cookie.set('Admin-cookie-MyRocket', user.email, {
        expires: 7,
    });
}

export function AuthProvider(props: any) {
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const token = Cookie.get('Admin-cookie-MyRocket');

    async function loginGoogle() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const userFinal: any = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    id: user.uid,
                };
                setCookieIdUser(userFinal)
                setEmail(userFinal.email)
                setPhoto(userFinal.photo)
                route.push('/register')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    async function logout(){
        Cookie.remove('Admin-cookie-MyRocket');
        route.replace('/login')
    }

    useEffect(() => {
        if (token) {
            console.log('Mudou o token');
            console.log(token);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ loginGoogle, email, photo, logout}}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;