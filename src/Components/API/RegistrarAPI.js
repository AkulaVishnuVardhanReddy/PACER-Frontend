import { postRequest, putRequest } from "./PublicAPICalls";
import { getRequest } from "./PublicAPICalls";


export const CreateCaseAPICall = (formData) => postRequest('/registrar/court-cases', formData);
export const AddAccountAPICall = (formData) => postRequest('/registrar/users', formData);
export const ScheduleCourtCaseAPICall = (formData) => postRequest('/registrar/cases/hearing', formData);
export const PendingCasesAPICall = () => getRequest('/registrar/court-cases/status/pending');
export const ResolvedCasesAPICall = () => getRequest('/registrar/court-cases/status/resolved');
export const loginHistoryAPICall = (userid) => getRequest(`/registrar/login-history/${userid}`);
export const caseAccessHistoryAPICall = (cin) => getRequest(`/registrar/case-history/${cin}`);
export const GetUserDetailsAPICall = (userId) => getRequest(`/registrar/users/${userId}`);
export const UpdateAccountAPICall = (formData,userId) => putRequest(`/registrar/users/${userId}`,formData);
export const GetCourtCaseDetailsAPICall = (id) => getRequest(`/court-cases/${id}`);
export const UpdateCourtCaseAPICall = (formData,id) => putRequest(`registrar/court-cases/${id}`,formData);
