import axios from "axios";

export async function Logged(Username, Password) {
    console.log("Logged function");
    try {
        const response = await axios.post('http://localhost:8080/auth/login', 
            {
              username: Username, 
              password: Password 
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
            {
                credentials: 'include'
            }
          );
            
        if(response.status===200)
            console.log('Login successful:', response.data);
        return response.status === 200;

        }
    catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}
