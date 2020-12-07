import axios from './lib/axios.js';

console.log('axios', axios);

// demo1：等 2s 后出结果
let result = axios.get('/demo1')

// 看得更清楚一点
console.log('result', result);

result.then(function (response) {
  console.log('this is in index.js', response);
})

// demo2: 请求一个连接，输出结果
axios.get('/demo2').then(response => {
  console.log('demo2 response', response)
})

