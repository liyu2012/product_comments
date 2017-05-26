import * as http from 'http'
const server = http.createServer((req, res) => {
    res.end('hello,world')
}).listen(9999)
console.log('data server is runing at port 9999')