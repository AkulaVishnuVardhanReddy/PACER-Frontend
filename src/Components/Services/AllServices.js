import { addCaseAccessHistoryAPICall } from "../API/PublicAPICalls";
import { CaseAccessHistoryService } from "./CaseAccessHistoryService";



export const CaseHistory = async(caseId,amount)=>{
    const data= CaseAccessHistoryService(caseId,amount);
    await addCaseAccessHistoryAPICall(data);
}