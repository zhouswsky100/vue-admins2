import axios from 'axios'
import qs from 'qs';
export default {
    install(Vue,options)
    {
        // 参数 请求路径  需要登录 类型 id
      Vue.prototype.getHttpPost= function(param,url,needToken,type){  
        console.log(param)
        let token =  needToken == true?   sessionStorage.token_type +' '+sessionStorage.access_token : ''
        return new Promise((resolve, reject) => {
          axios({
                url: this.$rkUtil.getWebServiceUrl(url),
                method: type,
                data :qs.stringify(param),
               // data:param
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' ,
                    'Authorization':token
                }
              })
              .then((res) => {
                resolve(res.data);
              })
              .catch(function (error) {
                reject(error);
              });
          
       });
      };
    }
  }
  