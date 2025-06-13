import Account from "../../components/Account/Account";
import AddCatNote from "../../components/AddCatNote/AddCatNote";
import AddCategorie from "../../components/AddCategorie/AddCategory";
import AddNote from "../../components/AddNote/AddNote";
import Buttons from "../../components/Buttons/Buttons";
import CategoryOptions from "../../components/CategoryOptions/CategoryOptions";
import DeleteCategory from "../../components/DeleteCategory/DeleteCategory";
import Header from "../../components/Header/Header";
import { useHeader } from "../../components/Header/context/useHeader";
import Notes from "../../components/Notes/Notes";
import UpdateCategory from "../../components/UpdateCategory/UpdateCategory";
import styles from "./Home.module.css";
import { useModal } from "./context/Modal/useModal";
import { useNotes } from "./context/fetchNotes/useNotes";

export default function Home() {
  const { modalAccount } = useHeader();
  const { notes } = useNotes();

  const {
    addNoteModal,
    addCatNote,
    addCategorieModal,
    categoryModal,
    updateCategory,
    deleteCategory,
    handleAddNote,
    handleModalAdd,
    handleAddCategory,
    handleCategorieOption,
    handleUpdateCategory,
    handleDeleteCategory,
  } = useModal();

  return (
    <section className={styles.home}>
      <Header />
      {modalAccount && <Account />}

      {notes.length !== 0 ? (
        <>
          {notes.map((note) => (
            <Notes
              key={note.nameNote}
              isDone={String(note.isDone)}
              backgroundColor={note.categories?.colors?.backgroundColor}
              fontColor={note.categories?.colors?.fontColor}
            >
              {note.nameNote}
            </Notes>
          ))}
        </>
      ) : (
        <Buttons className={styles.addButton} onClick={handleAddNote}>
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      )}
      {addNoteModal && <AddNote handleAddNote={handleAddNote} handleModalAdd={handleModalAdd} />}

      <Buttons className={styles.addButtonSmall} onClick={handleModalAdd}>
        Ajouter
        <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
      </Buttons>
      {addCatNote && (
        <AddCatNote
          handleModalAdd={handleModalAdd}
          handleAddNote={handleAddNote}
          handleAddCategory={handleAddCategory}
        />
      )}
      {addCategorieModal && (
        <AddCategorie handleAddCategory={handleAddCategory} handleModalAdd={handleModalAdd} />
      )}

      <Buttons
        className={styles.moreButtonSmall}
        onClick={handleCategorieOption}
      >
        Plus
        <i className={`fa-solid fa-gear ${styles.addIcon}`}></i>
      </Buttons>
      {categoryModal && (
        <CategoryOptions
          handleCategorieOption={handleCategorieOption}
          handleUpdateCategory={handleUpdateCategory}
          handleDeleteCategory={handleDeleteCategory}
        />
      )}
      {updateCategory && (
        <UpdateCategory handleUpdateCategory={handleUpdateCategory} handleCategorieOption={handleCategorieOption} />
      )}
      {deleteCategory && (
        <DeleteCategory handleDeleteCategory={handleDeleteCategory} handleCategorieOption={handleCategorieOption} />
      )}
    </section>
  );
}
