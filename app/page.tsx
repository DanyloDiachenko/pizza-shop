import { Filters } from "@/components/PageComponents/Filters";
import styles from "./page.module.scss";

const Home = (): JSX.Element => {
    return (
        <main className={styles.main}>
            <Filters />
        </main>
    );
};

export default Home;
