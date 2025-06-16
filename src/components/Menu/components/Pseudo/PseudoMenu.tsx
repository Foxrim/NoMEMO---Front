type PseudoMenuProps = {
    className: string;
}

export default function PseudoMenu({ className } : PseudoMenuProps) {
  return (
    <div className={className}>
      <h3>Pseudo</h3>
      <div>
        <input type="text" name="" id="" />
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  );
}
