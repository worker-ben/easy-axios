import dispatchRequest from './dispatchRequest.js'

export default class Axois {
  // 构造函数
  constructor() {

  }
  // 所有的请求，都可以抽象为 request
  // 发get请求
  get(config) {
    return this.request({
      ...config,
      method: 'GET',
    })
  }

  // 发post请求
  post(config) {
    return this.request({
      ...config,
      method: 'POST',
    })
  }

  // 统一发请求
  request(config) {
    // 只能做一些骚操作来判断参数
    // 如果传进来的是 url
    if (typeof config === 'string') {
      // 第二个参数作为 config （1. 参数传递的问题）
      config = arguments[1] || {};
      // 将 url 设置正确
      config.url = arguments[0];
    }

    // 判断请求类型 （2. 假如我传的是 'PAST' 请求呢？怎么校验？）
    if (config.method) {
      // 统一大小写
      config.method = config.method.toLowerCase();
    } else {
      // 没有的话，默认为 get
      config.method = 'get';
    }

    // 把 config 传进去
    let promise = Promise.resolve(config);

    // (3. Promise 的链式调用问题，要从定义去理解，不要从实现去理解)
    promise = promise.then(dispatchRequest, undefined);

    return promise;

  }

}