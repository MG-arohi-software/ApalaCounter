// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://apalabajar.shop:4000/api',// Change this to your API base URL
//   withCredentials: true, // Include credentials in requests 
//   //process.env.REACT_APP_BASE_URL ||
// }); 

// export default axiosInstance;
 
 
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.111.237.106:4000/api',// Change this to your API base URL
  withCredentials: true, // Include credentials in requests 
  //process.env.REACT_APP_BASE_URL ||
}); 

export default axiosInstance;
