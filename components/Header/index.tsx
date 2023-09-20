import Link from "next/link";

import styles from "./header.module.scss";
import { Search } from "./Search";
import { PriceBusket } from "./PriceBusket";

export const Header = (): JSX.Element => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.logoText}>
                <Link href="/">
                    <img
                        src="/logo.png"
                        loading="eager"
                        alt="logotype"
                        width={74}
                        height={50}
                    />
                </Link>
                <div>
                    <h1>PIZZA SHOP</h1>
                    <p>the tastiest pizza in the world</p>
                </div>
            </div>
            <Search />
            <PriceBusket />
        </header>
    );
};
