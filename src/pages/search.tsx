import { useState } from "react";
import Router from 'next/router';

import Client from '../data/client';

import { BoxUser } from "../components/BoxUser";
import { Header } from "../components/Header";

import Image from 'next/image';
import searchingImage from '../../public/img/search_image.svg';

import styles from '../styles/Search.module.css';

interface userBox {
    area: string,
    name: string,
    description: string,
    photo?: string,
    nickname: string
}

export default function Search() {
    const [howSearch, setHowSearch] = useState('Community');
    const [search, setSearch] = useState('');
    const [foundUsers, setFoundUsers] = useState([]);
    const [userNickName, setUserNickName] = useState<userBox>({ area: '', name: '', description: '', nickname: '' });
    const [error, setError] = useState('');

    function handleChangeHowToSearch() {
        if (howSearch === 'NickName') {
            setHowSearch('Community');
            setSearch('');
            setFoundUsers([]);
            setUserNickName({ area: '', name: '', description: '', nickname: '' });
        }
        if (howSearch === 'Community') {
            setHowSearch('NickName');
            setSearch('');
            setFoundUsers([]);
            setUserNickName({ area: '', name: '', description: '', nickname: '' });
        }
    }

    async function handleFoundUsersByComum(e: any) {
        e.preventDefault();
        setError('');
        setFoundUsers([]);
        // handleCapsSearch(search)
        const sendData = {
            comum: search
        }
        try {
            const data = await Client.post('/users/searchuserByComum', sendData).then((res) => {
                setFoundUsers(res.data.userFoundComum);
                return res.data
            })
        } catch (error: any) {
            setError(error.response.data.error);
            console.log(error.response.data.error)
        }
    }

    async function handleFoundUsersByNickName(e: any) {
        e.preventDefault();
        setError('');
        setFoundUsers([]);
        const sendData = {
            usersearch: search
        };

        try {
            const data = await Client.post('/users/searchuserByNickName', sendData).then((res) => {
                setUserNickName(res.data);
                return res.data
            })
        } catch (error: any) {
            setError(error.response.data.error);
            console.log(error.response.data.error)
        }
    }

    function handleRenderImage() {
        if (foundUsers.length === 0 && userNickName.nickname === '') {
            return (
                <div className={styles.searchingImage}>
                    <Image width={200} height={200} src={searchingImage} alt='Searching Image' />
                </div>
            )
        }
    }

    return (
        <>
            <Header />
            <div className={styles.contentTitle}>
                <h2>Choose which modality you want to find other devs!</h2>
            </div>
            <div className={styles.contentSelectHowToSearch}>
                <button onClick={handleChangeHowToSearch}>{howSearch}</button>
            </div>
            <div className={styles.contentSearch}>
                {howSearch === 'Community' ? (
                    <form onSubmit={handleFoundUsersByComum}>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button type="submit">Search</button>
                    </form>
                ) :
                    (
                        <form onSubmit={handleFoundUsersByNickName}>
                            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                            <button type="submit">Search</button>
                        </form>
                    )
                }
                {error != '' && (
                    <div className={styles.contentTitleError}>
                        <h2>{error}</h2>
                    </div>
                )}
                {/* {foundUsers.length === 0 && (
                    <div className={styles.searchingImage}>
                        <Image width={200} height={200} src={searchingImage} alt='Searching Image' />
                    </div>
                )} */}
                {handleRenderImage()}
                <div className={styles.contentResponseUser}>
                    {foundUsers && foundUsers?.map((user: any) => {
                        return (
                            <div className={styles.contentBoxUser} key={user._id}>
                                <BoxUser area={user.area} name={user.name} description={user.description}
                                    photo={user?.photo} onClick={() => Router.push(`/profile/${user.nickname}`)} />
                            </div>
                        )
                    })}

                    {userNickName.area != '' && (
                        <BoxUser area={userNickName.area} name={userNickName.name} description={userNickName.description}
                            photo={userNickName?.photo} onClick={() => Router.push(`/profile/${userNickName.nickname}`)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}