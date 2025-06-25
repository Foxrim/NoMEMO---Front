import FormInput from "../../../Form Input/FormInput";
import FormModal from "../../../Modals/Form Modal/FormModal";
import Options from "../../../Options/Options";
import TextArea from "../../../TextArea/TextArea";
import styles from "./CreateNotes.module.css";

export default function CreateNotes() {
    return (
        <FormModal className={styles.createNotes}>
            <FormInput placeholder="Titre"/>
            <hr />
            <TextArea placeholder={"Comment à taper"} />
            <hr />
            <Options className={styles.categorieCreateNotes} nameOption="Catégorie" optionChoose="Aucune" />
            <Options className={styles.statusCreateNotes} nameOption="Status" optionChoose="Aucun" />
            <hr />
            <FormInput placeholder="Lien" className={styles.linkInput} icon="fa-regular fa-copy"/>
        </FormModal>
    )
}