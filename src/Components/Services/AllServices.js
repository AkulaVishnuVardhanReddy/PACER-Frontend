import { useNavigate } from "react-router-dom";
import { addCaseAccessHistoryAPICall } from "../API/PublicAPICalls";
import { CaseAccessHistoryService } from "./CaseAccessHistoryService";

const role = sessionStorage.getItem("role")?.split("_")[1].toLowerCase();


export const CaseHistory = async(caseId,amount)=>{
    const data= CaseAccessHistoryService(caseId,amount);
    await addCaseAccessHistoryAPICall(data);
}

export const HandleRowClick =(caseId)=>{
    const navigate=useNavigate();
    if(role==="lawyer")
      navigate(`/${role}/payments/${caseId}`);
    else{
      CaseHistory(caseId,0);
      navigate(`/${role}/case-details/${caseId}`);
    }
  }