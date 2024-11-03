import { apiClient } from "./APIClient";

export async function Logged(Username, Password) {
    try {
        const response = await apiClient.post(
            '/auth/login',
            {
                username: Username,
                password: Password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Moved inside the main options object
            }
        );

        if (response.status===200) {
            console.log('Login successful:', response.data);
            const auth = btoa(`${Username}:${Password}`);
            sessionStorage.setItem("auth",auth);
            sessionStorage.setItem("name",response.data.name);
            sessionStorage.setItem("role",response.data.role);
            console.log(sessionStorage.getItem("auth"));
            console.log(sessionStorage.getItem("name"));
        }
        
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
}