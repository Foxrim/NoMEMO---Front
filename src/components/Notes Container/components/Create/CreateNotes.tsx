import FormModal from "../../../Modals/Form Modal/FormModal";
import Options from "../../../Options/Options";

export default function CreateNotes() {
    return (
        <FormModal>
            <input type="text" name="" id="" />
            <hr />
            <textarea name="" id=""></textarea>
            <hr />
            <Options nameOption="Catégorie" optionChoose="Aucune" />
            <Options nameOption="Status" optionChoose="Aucun" />
            <hr />
            <input type="text" />
        </FormModal>
    )
}