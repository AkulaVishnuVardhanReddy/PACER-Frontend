import { apiClient } from "./APIClient";

export async function CreateCaseAPICall (formData){
    const auth = sessionStorage.getItem("auth");
    const response = await apiClient.post(
        '/court-cases',
        formData,
        {
          headers: {
            'Authorization': `Basic ${auth}`,  // Updated key
            'Content-Type': 'application/json',
          }
        }
    );
    return response;
}
