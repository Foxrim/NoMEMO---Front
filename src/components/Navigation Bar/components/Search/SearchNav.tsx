type SearchNavProps = {
    className: string;
}

export default function SearchNav({ className } : SearchNavProps) {
    return (
        <i className={`fa-solid fa-magnifying-glass ${className}`}></i>
    )
}