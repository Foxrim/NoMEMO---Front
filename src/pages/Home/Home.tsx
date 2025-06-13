import Account from "../../components/Modals/Account/Account";
import AddCatNote from "../../components/Modals/AddCatNote/AddCatNote";
import AddCategorie from "../../components/Modals/AddCategorie/AddCategory";
import AddNote from "../../components/Modals/AddNote/AddNote";
import Buttons from "../../components/Buttons/Buttons";
import CategoryOptions from "../../components/Modals/CategoryOptions/CategoryOptions";
import DeleteCategory from "../../components/Modals/DeleteCategory/DeleteCategory";
import Header from "../../components/Header/Header";
import { useHeader } from "../../components/Header/context/useHeader";
import Notes from "../../components/Notes/Notes";
import UpdateCategory from "../../components/Modals/UpdateCategory/UpdateCategory";
import styles from "./Home.module.css";
import { useModal } from "./context/Modal/useModal";
import { useNotes } from "./context/fetchNotes/useNotes";
import UpdateNote from "../../components/Modals/UpdateNote/UpdateNote";
import React from "react";

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
    updateNote,
    handleAddNote,
    handleModalAdd,
    handleAddCategory,
    handleCategorieOption,
    handleUpdateCategory,
    handleDeleteCategory,
    handleUpdateNoteOpen,
    handleUpdateNoteClose,
    selectedNoteId
  } = useModal();

  return (
    <section className={styles.home}>
      <Header />
      {modalAccount && <Account />}

      {notes.length !== 0 ? (
        <>
          {notes.map((note) => (
            <React.Fragment key={note.id}>
              <Notes
                key={note.nameNote}
                isDone={note.isDone}
                noteId={note.id}
                backgroundColor={note.categories?.colors?.backgroundColor}
                fontColor={note.categories?.colors?.fontColor}
                onClick={handleUpdateNoteOpen}
              >
                {note.nameNote}
              </Notes>

              {updateNote && selectedNoteId === note.id && (
                <UpdateNote
                  handleUpdateNoteClose={handleUpdateNoteClose}
                  noteId={note.id}
                  nameNoteProps={note.nameNote}
                  isDoneProps={note.isDone}
                  commentProps={note.comment}
                  categoryIdProps={note.categoryId}
                  linkProps={note.link}
                />
              )}
            </React.Fragment>
          ))}
        </>
      ) : (
        <Buttons className={styles.addButton} onClick={handleAddNote}>
          Ajouter
          <i className={`fa-solid fa-plus ${styles.addIcon}`}></i>
        </Buttons>
      )}
      {addNoteModal && (
        <AddNote
          handleAddNote={handleAddNote}
          handleModalAdd={handleModalAdd}
        />
      )}

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
        <AddCategorie
          handleAddCategory={handleAddCategory}
          handleModalAdd={handleModalAdd}
        />
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
        <UpdateCategory
          handleUpdateCategory={handleUpdateCategory}
          handleCategorieOption={handleCategorieOption}
        />
      )}
      {deleteCategory && (
        <DeleteCategory
          handleDeleteCategory={handleDeleteCategory}
          handleCategorieOption={handleCategorieOption}
        />
      )}
    </section>
  );
}
