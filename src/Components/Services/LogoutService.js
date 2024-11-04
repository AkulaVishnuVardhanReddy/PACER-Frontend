import { getCurrentDateTime } from "./DateTIme";

export const logoutService = () => {
    const time = sessionStorage.getItem("loginTime");
    const logoutTime = getCurrentDateTime();
    const userId = sessionStorage.getItem("userId");

    return {
        "user": {
            "id": userId 
        },
        "loginTime": time, 
        "logoutTime": logoutTime
    };
};
