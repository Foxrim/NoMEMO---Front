import { useState } from "react";

type EmailProps = {
    email: string;
}

function useUpdatePassword() {
    const [user, setUser] = useState<EmailProps | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchEmail = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5012/api/v1/users/find-me`, {
                credentials: "include",
            });
            if (res.ok) {
                const data: EmailProps = await res.json();
                setUser(data);
            } else {
                setUser(undefined);
            }            
        } catch {
            setUser(undefined);
        } finally {
            setLoading(false);
        }
    }
    
    const newPassword = async () => {
        await fetchEmail();

        if (!user?.email) {
            console.error("Email non trouvé");
            return;
        }

        try {
            await fetch("http://localhost:5012/api/v1/password/forgotPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: user.email })
            });

            setUser(undefined);
        } catch {
            console.error("Email non reconnue");
        }
    };

    return { newPassword, loading };
}

export default useUpdatePassword;