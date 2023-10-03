import styles from "./tags.module.scss";
import { TagsProps } from "./tags.props";

export const Tags = ({ activeTag, setActiveTag, tags }: TagsProps): JSX.Element => {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <button
                    className={activeTag === tag ? styles.active : ""}
                    key={index}
                    onClick={() => setActiveTag(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};
