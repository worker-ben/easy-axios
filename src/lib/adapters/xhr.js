// 在此发 xhr 请求
// 由于外面的用法，这里必须是一个 Promise
export default function xhr(config) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is in xhr function');
    }, 2000)
  })
}