import { getRequest } from "./PublicAPICalls";

export const CaseIdAPICall = (id) => getRequest(`/court-cases/${id}`);
export const CourtNameAPICall = (name) => getRequest(`/court-cases/court/${name}`);
export const AccusedNameAPICall = (name) => getRequest(`/court-cases/defendent/${name}`);
export const ArrestingOfficerAPICall = (name) => getRequest(`/court-cases/arresting-officer/${name}`);
export const CaseTypeAPICall = (type) => getRequest(`/court-cases/crime-type/${type}`);
export const HearingDateAPICall = (date) => getRequest(`/court-cases/crime-date/${date}`);
export const JudgeNameAPICall = (name) => getRequest(`/court-cases/judge/${name}`);
export const KeywordSearchAPICall = (keyword) => getRequest(`/case-history/keyword/${keyword}`);
export const LawyerNameAPICall = (name) => getRequest(`/court-cases/lawyer/${name}`);
export const PublicProsecutorAPICall = (name) => getRequest(`/court-cases/public-prosecutor/${name}`);