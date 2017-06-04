import axios from 'axios';
import jwtDecode from 'jwt-decode';

axios.defaults.baseURL = 'http://localhost:3001'

const clientAuth = {
  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    console.log("******************** TOKEN from localStorage ***************");
    console.log(token);
    console.log("***********************************");
    return token ? jwtDecode(token) : null
  },

}

export default clientAuth
