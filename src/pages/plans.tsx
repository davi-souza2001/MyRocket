import { useEffect } from "react";
import route from "next/router";

import BoxPlans from "../components/BoxPlanUser/index";
import UseAuth from "../service/hook/useAuth";
import styles from '../styles/Plans.module.css';

export default function Plans() {
    const { email, users } = UseAuth();

    useEffect(() => {
        if (email === '') {
            route.replace('/login');
        }

        const checkIfUserExists = users?.map((user) => {
            if (user.email === email) {
                route.replace('/');
            }
        })

    }, [])

    return (
        <>
            <div className={styles.background}>
                <div className={styles.mainBody}>
                    <div className={styles.titleBody}>
                        <h1>Plans</h1>
                    </div>
                    <div className={styles.plansDiv}>
                        <BoxPlans title={'FREE'} price={'$0.00 monthly'}>
                            <p>- Limited posts (15 posts)</p>
                            <p>- ADS for other brands</p>
                            <p>- Does not have access to exclusive text and voice chat</p>
                            <p>- You can only join 1 community</p>
                        </BoxPlans>
                        <BoxPlans title={'PREMIUM'} price={'$1.99 monthly'}>
                            <p>- Unlimited posts</p>
                            <p>- No ADS</p>
                            <p>- Has access to exclusive voice and text chat</p>
                            <p>- Can join up to 3 communities</p>
                        </BoxPlans>
                    </div>
                </div>
            </div>

        </>
    )
}