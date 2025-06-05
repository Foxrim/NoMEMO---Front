import { useState } from "react";

type EmailProps = {
    email: string;
}

function useUpdatePassword() {
    const [user, setUser] = useState<EmailProps | undefined>(undefined);

    const fetchEmail = async () => {
        const id = localStorage.getItem('user');

        await fetch(`http://localhost:5012/api/v1/users/${id}`)
        .then((response) => response.json())
        .then((data: EmailProps) => setUser(data))
    }
    
    const newPassword = async () => {
        fetchEmail();

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

    return { newPassword };
}

export default useUpdatePassword;