import Buttons from "../../../Buttons/Buttons";
import TextInput from "../../../Inputs/Text/TextInput";
import styles from "../../Account.module.css";

type PseudoAccountProps = {
    isUpdatePseudo: boolean;
    handleChangePseudo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    updatePseudo: () => void;
    tempPseudo: string;
    inputRef: React.Ref<HTMLInputElement> | undefined;
}

export default function PseudoAccount({ isUpdatePseudo, handleChangePseudo, updatePseudo, tempPseudo, inputRef }: PseudoAccountProps) {
    return (
        <>
        {isUpdatePseudo ? (
            <TextInput
            ref={inputRef}
            className={`${styles.pseudoAccount} ${styles.pseudoAccountUpdate}`}
            value={tempPseudo}
            onChange={handleChangePseudo}
            name="pseudo"
            spellCheck={false}
            />
        ) : (
            <TextInput
            className={styles.pseudoAccount}
            value={tempPseudo}
            readOnly
            />
        )}
        {isUpdatePseudo && (
            <Buttons
            className={styles.pseudoValidateAccount}
            children={"Valider la modification"}
            onClick={updatePseudo}
            type="submit"
            />
        )}
        </>
    )
}