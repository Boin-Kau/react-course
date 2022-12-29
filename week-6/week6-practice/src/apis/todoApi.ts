import axios from 'axios';

/**
 * 
 * API 1.11
 */
export const getTodoByID = (id : number) => {
  return axios.get(process.env.REACT_APP_BASE_URL + `/todos/${id}`); 
}



