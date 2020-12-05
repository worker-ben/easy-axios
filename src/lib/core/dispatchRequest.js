import defaults from '../defaults.js'

export default function dispatchRequest(config) {

  // data 的处理逻辑

  // header 的处理逻辑

  // 获取请求适配器，默认就是 xhr 
  var adapter = config.adapter || defaults.adapter;

  // （1. 注意 then/catch 向外吐数据的用法 ）
  // （2. 我只能靠代码的语法猜测，adapter 是一个 Promise ）
  return adapter(config).then(response => {
    // 处理 response
    // 此时的返回，就是一个普通的数据
    console.log('dispatchRequest', response)
    return response;
  }).catch(reasons => {
    // 此时的返回，是一个 reject 的 Promise
    return Promise.reject(reasons);
  });

}