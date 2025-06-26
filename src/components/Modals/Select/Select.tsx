import styles from "./Select.module.css";

type Select = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    classNameSelect?: string;
}

export default function Select({className, children, onClick, classNameSelect} : Select) {
    return (
        <div className={`${styles.select} ${classNameSelect}`} onClick={onClick}>
            {/* position de du select par className */}
            <div className={`${styles.selectOption} ${className}`}>
                {/* balise p à utiliser */}
                {children}
            </div>
        </div>
    )
}