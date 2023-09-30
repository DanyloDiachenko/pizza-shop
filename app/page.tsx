import { Filters } from "@/components/PageComponents/Filters";
import styles from "./page.module.scss";
import { Main } from "@/components/PageComponents/Main";

const Home = (): JSX.Element => {
    return (
        <main className={styles.main}>
            <Filters />
            <Main />
        </main>
    );
};

export default Home;
