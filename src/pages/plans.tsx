import { useEffect } from "react";
import route from "next/router";

import BoxPlans from "../components/BoxPlanUser/index";
import UseAuth from "../service/hook/useAuth";
import styles from '../styles/Plans.module.css';

export default function Plans() {
    const { email, users } = UseAuth();

    // useEffect(() => {
    //     if (email === '') {
    //         route.replace('/login');
    //     }

    //     const checkIfUserExists = users?.map((user) => {
    //         if (user.email === email) {
    //             route.replace('/');
    //         }
    //     })

    // }, [])

    return (
        <>
            <div className={styles.background}>
                <div className={styles.mainBody}>
                    <div className={styles.titleBody}>
                        <h1>Plans</h1>
                    </div>

                    <div className={styles.plansDiv}>
                        <BoxPlans title={'FREE'} price={'$0.00 monthly'}>
                            <p>- Postagens limitadas (15 postagens)</p>
                            <p>- Propagandas de outras marcas (ADS)</p>
                            <p>- Não tem acesso ao chat de texto e voz exclusivo</p>
                            <p>- Pode participar apenas de 1 comunidade</p>
                        </BoxPlans>
                        <BoxPlans title={'PREMIUM'} price={'$1.99 monthly'}>
                            <p>- Posts ilimitados</p>
                            <p>- Sem propagandas</p>
                            <p>- Tem acesso ao chat de voz e de texto exclusivo</p>
                            <p>- Pode participar de até 3 comunidades</p>
                        </BoxPlans>
                    </div>
                </div>
            </div>

        </>
    )
}