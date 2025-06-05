import Buttons from "../Buttons/Buttons";
import IconsButtons from "../Header/components/IconsButtons/IconsButtons";
import styles from "./Account.module.css";
import { useHeader } from "../Header/context/useHeader";
import TextInput from "../Inputs/Text/TextInput";
import { useHandleLogout } from "./hook/logout";

export default function Account() {
    const { user } = useHeader();
    const pseudo = localStorage.getItem('userName')

    return (
    <div className={styles.account}>
        <i className="fa-solid fa-xmark"></i>
        <h2>Compte</h2>
        <IconsButtons children={<i className="fa-solid fa-pen-to-square"></i>} />
        <TextInput value={user ? user?.pseudo : pseudo ?? ""} readOnly/>
        <Buttons children={"Modifier l'email"} />
        <Buttons children={"Modifier le mot de passe"} />
        <Buttons children={"Déconnection"} onClick={useHandleLogout} />
        <a href="">Supprimer le compte</a>
    </div>
)
}