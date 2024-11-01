import {apiClient} from './APIClient'

export const ExecuteBasicAuthenticationService=(token)=>
    apiClient.post('/login')