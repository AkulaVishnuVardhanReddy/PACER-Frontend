import { getCurrentTime } from "./DateTime";

export const CaseAccessHistoryService = (cin, amount) => ({
  user: { id: sessionStorage.getItem("userId") },
  courtCase: { cin },
  accessTime: getCurrentTime(),
  charge: amount
});
