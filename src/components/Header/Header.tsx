import IconAccount from "./components/IconAccount/IconAccount";
import IconsButtons from "./components/IconsButtons/IconsButtons";
import styles from "./Header.module.css";
import { useHeader } from "./context/useHeader";

export default function Header() {
    const { isListMode, handleListMode, handleModalAccount } = useHeader();

    return (
        <header className={styles.header}>
            <IconAccount onClick={handleModalAccount} />
            <IconsButtons children={<i className="fa-solid fa-magnifying-glass"></i>} />
            <IconsButtons children={isListMode ? <i className="fa-solid fa-list-ul"></i> : <i className="fa-solid fa-table-cells-large"></i>} onClick={handleListMode} />
            <IconsButtons children={<i className="fa-solid fa-filter"></i>} />
            <IconsButtons children={<i className="fa-solid fa-bars"></i>} />
        </header>
    )
}