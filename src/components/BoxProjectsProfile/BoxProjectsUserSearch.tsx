import { useEffect, useState } from 'react';
import route from "next/router";
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';

import styles from './BoxProjectsProfile.module.css';

interface getReposUserGitHubProps{
    nickname?: String;
}

export function BoxProjectsUserSearch(props: getReposUserGitHubProps) {
const [repos, setRepos] = useState([]);

    async function getReposUserGitHub(){
        try {
            const reposUserByGitHub = axios.get(`https://api.github.com/users/${props.nickname}/repos`)
            .then((repos) => {
                setRepos(repos.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getReposUserGitHub();
    }, [props.nickname])

    return (
        <div className={styles.contentGeral}>
            {repos && repos?.map((repo: any) => {
                return (
                    <div className={styles.contentBoxProject} key={repo.id}>
                        <AiFillGithub />
                        <p onClick={() => route.push(repo.html_url)}>{repo.name}</p>
                    </div>
                )
            })}
        </div>
    )
}