import { getCurrentDateTime } from "./DateTime";

export const logoutService = () => ({
    "user": { "id": sessionStorage.getItem("userId") },
    "loginTime": sessionStorage.getItem("loginTime"),
    "logoutTime": getCurrentDateTime()
});
