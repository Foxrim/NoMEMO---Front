import { useState } from "react";
import { useNavigate } from "react-router";


function useNewPasswordHook() {    
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
    const navigate = useNavigate();
    
    const newPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const token = sessionStorage.getItem('resetToken');
        
        try {
            if (password !== confirmPassword) {
                return;
            }
            
            const data = await fetch('http://localhost:5012/api/v1/password/updatePassword', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password, token })
            })
            
            if (data.ok) {
                navigate('/login');
            }
        } catch {
            console.error('Mot de passe invalide');
        }
    }

    return { newPassword, setConfirmPassword, setPassword, password, confirmPassword};
}

export default useNewPasswordHook;