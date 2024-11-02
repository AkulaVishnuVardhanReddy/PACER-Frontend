import { Navigate } from "react-router-dom";
import { apiClient } from "./APIClient";

export async function CreateCaseAPICall (formData){
    const auth = sessionStorage.getItem("auth");
    const response = await apiClient.post(
        '/court-cases',
        formData,
        {   
          headers: {
            'Authorization': `Basic ${auth}`, 
            'Content-Type': 'application/json',
          }
        }
    );
    return response;
}

export async function PendingCasesAPICall (){
    const auth = sessionStorage.getItem("auth");
    const response = await apiClient.get(
        '/registrar/court-cases/status/pending',
        {   
          headers: {
            'Authorization': `Basic ${auth}`
          }
        }
    );
    console.log(response);
    return response;
}

export async function ResolvedCasesAPICall (){
    const auth = sessionStorage.getItem("auth");
    const response = await apiClient.get(
        '/registrar/court-cases/status/resolved',
        {   
          headers: {
            'Authorization': `Basic ${auth}`
          }
        }
    );
    console.log(response);
    return response;
}