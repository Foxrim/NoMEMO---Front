type NotesNavProps = {
    className: string;
}

export default function NotesNav({ className }: NotesNavProps) {
  return (
    <div className={className}>
      <i className="fa-solid fa-note-sticky"></i>
      <p>Notes</p>
    </div>
  );
}
