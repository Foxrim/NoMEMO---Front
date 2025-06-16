type CategoriesNavProps = {
    className: string;
}

export default function CategoriesNav({ className } : CategoriesNavProps) {
  return (
    <div className={className}>
      <i className="fa-solid fa-layer-group"></i>
      <p>Catégories</p>
    </div>
  );
}
