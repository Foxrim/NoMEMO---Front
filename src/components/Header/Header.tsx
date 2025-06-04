import IconAccount from "./components/IconAccount/IconAccount";
import IconsButtons from "./components/IconsButtons/IconsButtons";
import styles from "./Header.module.css";

export default function Header() {

    return (
        <header className={styles.header}>
            <IconAccount />
            <IconsButtons children={<i className="fa-solid fa-magnifying-glass"></i>} />
            <IconsButtons children={<i className="fa-solid fa-list-ul"></i>} />
            <IconsButtons children={<i className="fa-solid fa-filter"></i>} />
            <IconsButtons children={<i className="fa-solid fa-bars"></i>} />

        </header>
    )
}