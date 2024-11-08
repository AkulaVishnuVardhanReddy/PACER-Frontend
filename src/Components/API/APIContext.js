import { getCurrentDateTime } from "../Services/DateTIme";
import { apiClient } from "./APIClient";
import { getFirstNameByUserName, getUseridByUserName } from "./PublicAPICalls";

export async function Logged(Username, Password) {
    try {
        const response = await apiClient.post(
            '/auth/login',
            {username: Username , password: Password},
            {headers: { 'Content-Type': 'application/json' },credentials: 'include'}
        );
        if (response.status===200) {
            const auth = btoa(`${Username}:${Password}`);
            sessionStorage.setItem("auth",auth);
            sessionStorage.setItem("name",response.data.name);
            sessionStorage.setItem("role",response.data.role);
            const userId = async () => {
                const id = await getUseridByUserName(response.data.name);
                sessionStorage.setItem("userId",id.data);
            };
            const FirstNameId = async () => {
                const firstName = await getFirstNameByUserName(response.data.name);
                sessionStorage.setItem("FirstName",firstName.data);
            };
            userId();
            FirstNameId();
            sessionStorage.setItem("loginTime",getCurrentDateTime());
        }
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
}
