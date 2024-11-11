import { apiClient } from "./APIClient";


const authHeaders = () => ({
    'Authorization': `Basic ${sessionStorage.getItem("auth")}`,
    'Content-Type': 'application/json'
});

const authHeadersForPhoto = () => ({
  'Authorization': `Basic ${sessionStorage.getItem("auth")}`
});

export const postRequestForPhotoUser = async (url, data) => {
  try {
    const response = await apiClient.post(url, data, { headers: authHeadersForPhoto() });
    return response;
  } catch (error) {
    console.error(`Error in POST request to ${url}:`, error);
    throw error;
  }
};

export const getRequestForPhoto = async (url) => {
  try {
    const response = await apiClient.get(url, { headers: authHeadersForPhoto() });
    return response;
  } catch (error) {
    console.error(`Error in GET request to ${url}:`, error);
    throw error;
  }
};


export const postRequest = async (url, data) => {
    try {
      const response = await apiClient.post(url, data, { headers: authHeaders() });
      return response;
    } catch (error) {
      console.error(`Error in POST request to ${url}:`, error);
      throw error;
    }
  };

  export const putRequest = async (url, data) => {
    try {
      const response = await apiClient.put(url, data, { headers: authHeaders() });
      return response;
    } catch (error) {
      console.error(`Error in PUT request to ${url}:`, error);
      throw error;
    }
  };
  
export const getRequest = async (url) => {
    try {
      const response = await apiClient.get(url, { headers: authHeaders() });
      return response;
    } catch (error) {
      console.error(`Error in GET request to ${url}:`, error);
      throw error;
    }
  };




export const addLoginHistoryAPICall = (data) => postRequest('/login-history', data);
export const addCaseAccessHistoryAPICall = (data) => postRequest('/case-history', data);
export const getUseridByUserName = (username) => getRequest(`/findUserId/${username}`);
export const getFirstNameByUserName = (username) => getRequest(`/findFirstName/${username}`);
export const UserDetailsAPICall = (username) => getRequest(`/user-profile/${username}`);

