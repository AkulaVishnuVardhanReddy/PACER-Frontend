import { apiClient } from "./APIClient";

const authHeaders = () => ({
  'Authorization': `Basic ${sessionStorage.getItem("auth")}`,
  'Content-Type': 'application/json'
});

const postRequest = async (url, data) => {
  try {
    const response = await apiClient.post(url, data, { headers: authHeaders() });
    return response;
  } catch (error) {
    console.error(`Error in POST request to ${url}:`, error);
    throw error;
  }
};

const getRequest = async (url) => {
  try {
    const response = await apiClient.get(url, { headers: authHeaders() });
    return response;
  } catch (error) {
    console.error(`Error in GET request to ${url}:`, error);
    throw error;
  }
};

export const CreateCaseAPICall = (formData) => postRequest('/registrar/court-cases', formData);
export const AddAccountAPICall = (formData) => postRequest('/registrar/users', formData);
export const ScheduleCourtCaseAPICall = (formData) => postRequest('/registrar/cases/hearing', formData);
export const PendingCasesAPICall = () => getRequest('/registrar/court-cases/status/pending');
export const ResolvedCasesAPICall = () => getRequest('/registrar/court-cases/status/resolved');
export const loginHistoryAPICall = (userid) => getRequest(`/registrar/login-history/${userid}`);