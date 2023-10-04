import styles from "./page.module.scss";
import { Main } from "@/components/PageComponents/Main";

const Home = (): JSX.Element => {
    return (
        <main className={styles.main}>
            <Main />
        </main>
    ); 
};

export default Home;
