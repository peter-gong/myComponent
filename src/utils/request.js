import { message } from 'antd';

/*
    普通请求
    参数： 1. url,
          2. options:{
              method:'post',
              body:{aa:1}
            }
*/
export default function request(url, options = {}) {
  let ajaxPropmise = new Promise((resolve, reject) => {
    $.ajax({
      type: options.method || 'get',
      url: url,
      success: function (data) {
        debugger;
        resolve(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        debugger;
        reject(textStatus);
      },
    });
  });
  return ajaxPropmise
    .then(data => {
      if (data.result == '401') {
        //message.error("没有权限");
        if (top != window) {
          window.top.location.href = '/';
        }
      }
      return httpload(data);
    })
    .catch(err => {
      message.error('网络错误，请刷新重试！');
      return { data: null };
    });
}
