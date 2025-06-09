import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router";

export default function AuthConnection() {
    const [loading, setLoading] = useState<boolean>(true);
    const [authentificated, setAuthentificated] = useState<boolean>(false);

    useEffect(() => {
        fetch('http://localhost:5012/api/v1/auth/verify', {
            credentials: "include"
        })
        .then(res => {
            if (res.ok) {
                setAuthentificated(true);
            } else {
                setAuthentificated(false);
            }
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Chargement...</p>;

    return (
        authentificated ? <Outlet/> : <Navigate to="/login" replace/>
    )
}