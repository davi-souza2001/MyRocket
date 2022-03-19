import route from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/connect';
import Cookie from 'js-cookie';

interface AuthContextProps {
    email?: string;
    photo?: string;
    loginGoogle?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({});

const provider = new GoogleAuthProvider();

function setCookieIdUser(user: any) {
    Cookie.set('Admin-cookie-MyRocket', user.id, {
        expires: 7,
    });
    route.push('/');
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
                setEmail(userFinal.email)
                setPhoto(userFinal.photo)
                route.push('/register')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    useEffect(() => {
        if (token) {
            console.log('Mudou o token');
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ loginGoogle, email, photo}}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;