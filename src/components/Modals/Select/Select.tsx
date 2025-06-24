import styles from "./Select.module.css";

type Select = {
    className?: string;
    children: React.ReactNode;
}

export default function Select({className, children} : Select) {
    return (
        <div className={styles.select}>
            {/* position de du select par className */}
            <div className={`${styles.selectOption} ${className}`}>
                {/* balise p à utiliser */}
                {children}
            </div>
        </div>
    )
}