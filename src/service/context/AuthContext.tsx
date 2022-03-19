import route from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    auth,
    database,
    ref,
    get,
    set,
    child,
    onValue,
} from '../../firebase/connect';
import Cookie from 'js-cookie';

interface AuthContextProps {
    loading?: boolean;
    email?: string;
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
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const token = Cookie.get('Admin-cookie-MyRocket');

    async function loginGoogle() {
        setLoading(true);
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const userFinal: any = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    id: user.uid,
                };
                console.log(userFinal)
                setLoading(false);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoading(false);
            });
    }

    useEffect(() => {
        if (token) {
            console.log('Mudou o token');
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ loginGoogle, loading, email}}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;