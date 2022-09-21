import axios from "axios";
const config = {
  baseUrl: 'http://seaho5599.dothome.co.kr/page-miniblog'
}
function fetchReadPhp(){
  return axios.get(`${config.baseUrl}/read.php`)
}
function fetchwritePhp(){
  return axios.get(`${config.baseUrl}/write.php?`)
}
function fetchReadPhp(){
  return axios.get(`${config.baseUrl}/delete.php`)
}
function fetchReadPhp(){
  return axios.get(`${config.baseUrl}`)
}

export{fetchReadPhp,fetchwritePhp}