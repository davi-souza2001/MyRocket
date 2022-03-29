import { useState } from "react";

import Client from '../data/client'

import { BoxUser } from "../components/BoxUser";
import { Header } from "../components/Header";

import styles from '../styles/Search.module.css'

export default function Search() {
    const [howSearch, setHowSearch] = useState('NickName')
    const [search, setSearch] = useState('')
    const [foundUsers, setFoundUsers] = useState([])
    const [error, setError] = useState('')

    // function handleCapsSearch(sentence: string) {
    //     const searchUpperCase= sentence.charAt(0).toUpperCase() + sentence.slice(1);
    //     setSearch(searchUpperCase)
    // }

    function handleChangeHowToSearch() {
        if (howSearch === 'NickName') {
            setHowSearch('Community')
            setSearch('')
        }
        if (howSearch === 'Community') {
            setHowSearch('NickName')
            setSearch('')
        }
    }

    async function handleFoundUsersByComum(e: any) {
        e.preventDefault()
        setError('')
        setFoundUsers([])
        // handleCapsSearch(search)
        const sendData = {
            comum: search
        }
        try {
            const data = await Client.post('/users/searchuserByComum', sendData).then((res) => {
                setFoundUsers(res.data.userFoundComum)
                return res.data
            })
        } catch (error: any) {
            setError(error.response.data.error)
            console.log(error.response.data.error)
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
                {howSearch === 'NickName' ? (
                    <form onSubmit={handleFoundUsersByComum}>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button type="submit">Search</button>
                    </form>
                ) : <h1>alo</h1>}
                {error != '' && (
                    <div className={styles.contentTitleError}>
                        <h2>{error}</h2>
                    </div>
                )}
                <div className={styles.contentResponseUser}>
                    {foundUsers && foundUsers?.map((user: any) => {
                        return (
                            <div className={styles.contentBoxUser} key={user._id}>
                                <BoxUser area={user.area} name={user.name} description={user.description}
                                    photo={user?.photo}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}