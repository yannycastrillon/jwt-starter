import axios from 'axios';
import jwtDecode from 'jwt-decode';

axios.defaults.baseURL = 'http://localhost:3001'

const clientAuth = {
  // checks localStorage if there is token store.
  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    console.log("******************** TOKEN from localStorage ***************");
    console.log(token);
    console.log("***********************************");
    return token ? jwtDecode(token) : null
  },

  // GET --- API Call to all users
  getAllUsers: () => {
    const url = "/api/users";
    axios.get(url).then( res => {
      console.log(res);
      let users = res.data
    }).catch(err => {
      console.log(err);
    })
  },

  // POST --- API call to create a new User.
  signUp: userInfo => {
    return axios({
      url:'api/users',
      method:'POST',
      data: userInfo,
    })
  },

  logIn: credentials => {
    return axios({
      url: '/api/users/login',
      method: 'POST',
      data: credentials,
    })
    .then( res => {
      console.log(res.data);
      let token = res.data.token;
      if(token) {
        localStorage.setItem('token',token);
        console.log("********* OBJ Local Storage *********");
        console.log( localStorage);
        console.log("********* Local Storage*********");
        // Attaches the current JWT TOKEN to the Header
        axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token')
        // Decodes token return the User object with all of the data.
        console.log("Decoded Token: "+jwtDecode(token));
        return jwtDecode(token);
      }else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
    })
  },

  logOut: () => {
    return new Promise( resolve => {
      localStorage.clear();
      delete axios.defaults.headers.common["x-access-token"];
      resolve({msg:"Bye. Logout Successfuly"})
    })
  }
}

export default clientAuth
