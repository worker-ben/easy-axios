const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 托管整个 src 即可,加个前缀
app.use('/static', express.static('../src'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 返回这个 html 文件
app.get('/', (req, res) => {
  res.sendFile('/Users/bytedance/Desktop/easy-axios/server/index.html');
})

// demo1 服务端
app.get('/demo1', (req, res) => {
  res.json({
    msg: `hello demo1`
  })
})

// demo2 服务端
app.get('/demo2', (req, res) => {
  res.json({
    msg: `hello demo2`
  })
})

const port = process.env.PORT || 3000
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})