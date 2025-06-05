import { useState } from "react";

type EmailProps = {
    email: string;
}

function useUpdatePassword() {
    const [email, setEmail] = useState();

    const fetchEmail = async () => {
        const id = localStorage.getItem('user');

        await fetch(`http://localhost:5012/api/v1/users/${id}`)
        .then((response) => response.json())
        .then((data: EmailProps) => setEmail(data))
    }
    
    const newPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        fetchEmail();

        if (!email) {
            console.error("Email non trouvé");
            return;
        }

        try {
            await fetch("http://localhost:5012/api/v1/password/forgotPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
        } catch {
            console.error("Email non reconnue");
        }
    };

    return newPassword;
}

export default useUpdatePassword;