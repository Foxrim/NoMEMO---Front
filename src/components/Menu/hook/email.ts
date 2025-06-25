import { useState } from "react";

function useEmail() {
    const [response, setResponse] = useState<string>('');

    const fetchUpdateEmail = async () => {
        try {
            const res = await fetch ('http://localhost:5012/api/v1/email/changeEmail', {
                credentials: "include"
            });

            const data = await res.json();
            setResponse(data.message);
        } catch (err) {
            console.error('Une erreur est survenue : ', err);
        }
    }

    return { fetchUpdateEmail, response };
}

export default useEmail;