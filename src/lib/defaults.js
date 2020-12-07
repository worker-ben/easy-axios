import xhrAdapter from './adapters/xhr.js';

function getDefaultAdapter() {
  let adapter;
  // == 'function'
  // 其实就是判断浏览器环境
  if (typeof XMLHttpRequest !== 'undefined') {
    adapter = xhrAdapter;
  } else if (typeof process !== 'undefined'
    && Object.prototype.toString.call(process) === '[object process]') {
    // 判断 Node.js 环境
    // For node use HTTP adapter
  }
  return adapter;
}

export default {
  // (1. 注意这种高端导出)
  adapter: getDefaultAdapter(),
}