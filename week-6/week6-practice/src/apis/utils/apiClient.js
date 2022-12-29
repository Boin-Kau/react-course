import axios from 'axios';
const devServerUrl = 'a';
const prodServerUrl = 'b';

export const HttpMethod = {
  DELETE: "delete",
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
};

const apiClient = axios.create({
  baseUrl: process.env.NODE_ENV !== 'production' ? devServerUrl : prodServerUrl
})

export const customApiClient = async (method, url, body, params) => {
  try {
    const result = await apiClient(url, {
      method: method, 
      data: body,
      headers: {
        'X-ACCESS-TOKEN': localStorage.getItem('jwt')
      },
      params: params
    })
    return result; 

  } catch (err) {
    return err; 
  }
}