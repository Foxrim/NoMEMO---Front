import FormModal from "../../../Modals/Form Modal/FormModal";
import Options from "../../../Options/Options";
import TextArea from "../../../TextArea/TextArea";
import styles from "./CreateNotes.module.css";

export default function CreateNotes() {
    return (
        <FormModal className={styles.createNotes}>
            <input type="text" name="" id="" />
            <hr />
            <TextArea placeholder={"Comment à taper"} />
            <hr />
            <Options nameOption="Catégorie" optionChoose="Aucune" />
            <Options nameOption="Status" optionChoose="Aucun" />
            <hr />
            <input type="text" />
        </FormModal>
    )
}