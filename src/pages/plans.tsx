import BoxPlans from "../components/BoxPlanUser/index";
import styles from '../styles/Plans.module.css'

export default function Plans() {
    return (
        <>
            {/* <Header /> */}
            <div className={styles.background}>
                <div className={styles.mainBody}>
                    <div className={styles.titleBody}>
                        <h1>Plans</h1>
                    </div>

                    <div className={styles.plansDiv}>
                        <BoxPlans title={'FREE'} price={'$0.00 monthly'} benefit={'a'}/>
                        
                        <BoxPlans title={'PREMIUM'} price={'$1.99 monthly'} benefit={'a'}/>
                    </div>
                </div>
            </div>

        </>
    )
}