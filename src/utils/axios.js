import axios from 'axios'
// 创建一个axios实例
const service = axios.create({
  // headers: {
  //   'content-type': 'application/json;charset=UTF-8',
  //   'token': 'one'
  // },
  baseURL: 'http://127.0.0.1:8000',//TODO:For your configuration
  withCredentials: true,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置token
  // config.headers['token'] = 'token';
  //config.headers['X-Token'] = 'xxxxxxxxxxxxxxxxxxx';
  return config;
}, error => {
  return Promise.reject(error);
});

service.interceptors.response.use(response => {
  const res = response.data;
  if(res.code === 20000){

  }
  else if (res.code===20020) {

  }else{
  }
  return response;
}, error => {

  return Promise.reject(error); 
})

export default service
