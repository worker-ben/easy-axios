// 在此发 xhr 请求
// 由于外面的用法，这里必须是一个 Promise
export default function xhr(config) {
  return new Promise((resolve, reject) => {
    // 基本逻辑
    // (1. 注意默认值)
    const { data = null, url, method = 'get' } = config;
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send(data);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      console.log('okokok',request.response);
      resolve(request.response)
    }

    // 一些出错情况
    request.onabort = function handleAbort() {
      reject('Request Abort');
    }

    request.onerror = function handleError() {
      reject('NetWork Error');
    }

    request.ontimeout = function handleTimeout() {
      reject('Request Timeout');
    }

  })
}