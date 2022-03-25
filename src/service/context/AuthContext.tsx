import route from 'next/router';
import { createContext, MouseEventHandler, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import Client from '../../data/client'
import { auth } from '../../firebase/connect';
import Cookie from 'js-cookie';

interface AuthContextProps {
    email?: string;
    photo?: string;
    user?: User;
    users?: Array<any>;
    loginGoogle?: () => Promise<void>;
    logout?: MouseEventHandler<HTMLParagraphElement>
};

interface User {
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
    gas?: Number;
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
    const [user, setUser] = useState<User>({})
    const [users, setUsers] = useState([])
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
                console.log('errou' + errorMessage);
            });
    }

    async function logout() {
        Cookie.remove('Admin-cookie-MyRocket');
        route.replace('/login')
    }

    async function getAllUsers() {
        try {
            const data = await Client.get('/users/getAllUsers').then((res) => {
                setUsers(res.data)
                return res.data
            })
        } catch (error: any) {
            console.log(error.response)
        }
    }

    async function getUserLogged() {
        const sendUser = {
            emailuser: token
        }
        try {
            const data = await Client.post('/users/checkuser', sendUser).then((res) => {
                setUser(res.data)
                return res.data
            })
        } catch (error: any) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if (token) {
            getUserLogged()
        } else{
            route.push('/login')
        }
    }, [token]);

    useEffect(() => {
        getAllUsers()
    }, []);

    return (
        <AuthContext.Provider value={{ loginGoogle, email, photo, user, users, logout }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;