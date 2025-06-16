type MenuNavProps = {
    className: string;
}

export default function MenuNav({ className }: MenuNavProps) {
  return (
    <>
      <i className={`fa-solid fa-bars ${className}`}></i>
    </>
  );
}
