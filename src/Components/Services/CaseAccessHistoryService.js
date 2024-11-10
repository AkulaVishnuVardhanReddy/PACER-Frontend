import { getCurrentTime } from "./DateTIme";

export const CaseAccessHistoryService = (cin,amount) => {
    const time = getCurrentTime();
    const userId = sessionStorage.getItem("userId");

    return {
        "user": {
            "id": userId 
        },
        "courtCase": {
            "cin": cin 
        },
        "accessTime": time, 
        "charge": amount
    };
};
