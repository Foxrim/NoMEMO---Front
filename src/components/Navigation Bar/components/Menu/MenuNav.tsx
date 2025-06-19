type MenuNavProps = {
    className: string;
    onClick: () => void;
}

export default function MenuNav({ className, onClick }: MenuNavProps) {
  return (
    <>
      <i onClick={onClick} className={`fa-solid fa-bars ${className}`}></i>
    </>
  );
}
