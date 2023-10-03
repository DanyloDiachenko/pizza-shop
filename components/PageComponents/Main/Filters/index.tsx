import { Tags } from "./Tags";
import styles from "./filters.module.scss";
import { SortBy } from "./SortBy";
import { FiltersProps } from "./filters.props";

export const Filters = ({
    activeTag,
    setActiveTag,
    tags,
    sortVariants,
    activeSortVariant,
    setActiveSortVariant,
}: FiltersProps): JSX.Element => {
    return (
        <section className={`container ${styles.filters}`}>
            <Tags
                activeTag={activeTag}
                setActiveTag={setActiveTag}
                tags={tags}
            />
            <SortBy
                sortVariants={sortVariants}
                activeSortVariant={activeSortVariant}
                setActiveSortVariant={setActiveSortVariant}
            />
        </section>
    );
};
