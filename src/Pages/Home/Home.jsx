import styles from './Home.module.css';
import logo from '../../imgs/logo.png';
import ForkAndKnife from '../../imgs/ForkAndKnife.svg'

export const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
            </div>
            <h1 className={styles.sliderTitle}>Receitas <span style={{fontStyle: "italic"}}>do seu jeito</span></h1>

        </div>
    );
}