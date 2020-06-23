import config from './config'

export default{
  install : function (Vue, options) {
    Vue.prototype.$rkUtil = {

    getWebServiceUrl : function(name) {
      let dev
      let webServiceUrls = {
        loginSystem:'/loginSystem/', //登录
      
      };
      if(process.env.NODE_ENV === 'production'){
         dev  = config.interface.prod ;
      }else{//开发
         dev  = config.interface.dev ;
      }   
      return dev + webServiceUrls[name];
    },
    setLoginUser: function (data) {
      sessionStorage.setItem('user', JSON.stringify(data))
    },
    getLoginUser: function () {
      return JSON.parse(sessionStorage.getItem('user'))
    },
    base64encode : function(str){
      var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";  
      var out, i, len;  
      var c1, c2, c3;  
      len = str.length;  
      i = 0;  
      out = "";  
      while (i < len) {  
          c1 = str.charCodeAt(i++) & 0xff;  
          if (i == len) {  
              out += base64EncodeChars.charAt(c1 >> 2);  
              out += base64EncodeChars.charAt((c1 & 0x3) << 4);  
              out += "==";  
              break;  
          }  
          c2 = str.charCodeAt(i++);  
          if (i == len) {  
              out += base64EncodeChars.charAt(c1 >> 2);  
              out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
              out += base64EncodeChars.charAt((c2 & 0xF) << 2);  
              out += "=";  
              break;  
          }  
          c3 = str.charCodeAt(i++);  
          out += base64EncodeChars.charAt(c1 >> 2);  
          out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));  
          out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));  
          out += base64EncodeChars.charAt(c3 & 0x3F);  
      }  
      return out;        
    },
    hasValInArrayObj: function (arr, key, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] == val)
          return i;
      }
      return -1;
    }
   };
  }
};