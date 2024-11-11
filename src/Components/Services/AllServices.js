import { addCaseAccessHistoryAPICall } from "../API/PublicAPICalls";
import { CaseAccessHistoryService } from "./CaseAccessHistoryService";
import {
    FaUserPlus,
    FaGavel,
    FaFolderOpen,
    FaCheckCircle,
    FaCalendarAlt,
    FaPlusSquare,
    FaRegEdit,
    FaHistory,
    FaClipboardList,
  } from "react-icons/fa";
  import { FaSearch, FaIdBadge, FaBuilding, FaCalendarDay, FaBalanceScale, FaUserShield, FaUserTie, FaUniversity, FaUser  } from "react-icons/fa";



export const CaseHistory = async(caseId,amount)=>{
    const data= CaseAccessHistoryService(caseId,amount);
    await addCaseAccessHistoryAPICall(data);
}


export const registrarMenuItems = [
    { to: "add-account", icon: <FaUserPlus />, label: "Add Accounts" }, // FaUserPlus is good for adding accounts
    { to: "create-court-case", icon: <FaPlusSquare />, label: "Add Case" }, // FaPlusSquare for adding a case
    { to: "schedule-court-case", icon: <FaCalendarAlt />, label: "Schedule Case" }, // FaCalendarAlt for scheduling
    { to: "update-user", icon: <FaRegEdit />, label: "Update User" }, // FaRegEdit for updating user details
    { to: "update-case", icon: <FaClipboardList />, label: "Update Case" }, // FaRegEdit for updating a case
    { to: "login-history", icon: <FaHistory />, label: "Login History" }, // FaHistory for login history
    { to: "case-history", icon: <FaGavel />, label: "Case History" }, // FaGavel for case history
    { to: "pending-court-cases", icon: <FaFolderOpen />, label: "Pending Cases" }, // FaFolderOpen for pending cases
    { to: "resolved-court-cases", icon: <FaCheckCircle />, label: "Resolved Cases" }, // FaCheckCircle for resolved cases
];

export const lawyerMenuItems = [
    { to: "case-id", icon: <FaIdBadge />, label: "Case ID" },
    { to: "court-name", icon: <FaBuilding />, label: "Court Name" },
    { to: "hearing-date", icon: <FaCalendarDay />, label: "Hearing Date" },
    { to: "keyword-search", icon: <FaSearch />, label: "Keyword Search" },
    { to: "case-type", icon: <FaBalanceScale />, label: "Case Type" },
    { to: "arresting-officer", icon: <FaUserShield />, label: "Arresting Officer" },
    { to: "lawyer-name", icon: <FaUserTie />, label: "Lawyer" },
    { to: "public-prosecutor", icon: <FaUniversity />, label: "Public Prosecutor" },
    { to: "accused-name", icon: <FaUser />, label: "Accused Name" },
    { to: "judge-name", icon: <FaGavel />, label: "Judge Name" },
];