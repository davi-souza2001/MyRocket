import route from "next/router";

import styles from '../BoxPlanUser/BoxPlanUser.module.css';

type BoxPlans = {
    title: String,
    price: String,
    children: any
};

export default function BoxPlanUser(props: BoxPlans) {
    return (
        <>
            <div className={styles.plan}>
                <div className={styles.titlePlan}>
                    <h2>{props.title}</h2>
                    <p>{props.price}</p>
                </div>

                <div className={styles.contentPlan}>
                    <h3>Benefits</h3>

                    <div className={styles.benefitsDiv}>
                        {props.children}
                    </div>
                </div>

                <div className={styles.buttonDiv}>
                    <button onClick={() => route.push('/')}>Select</button>
                </div>
            </div>
        </>
    )
}