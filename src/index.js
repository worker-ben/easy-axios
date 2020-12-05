import axios from './lib/axios.js';

console.log('axios',axios);

// demo1：等 2s 后出结果
let result = axios.get('/123456')

// 看得更清楚一点
console.log('result',result);

result.then(function (response) {
  console.log('this is in index.js', response);
})

