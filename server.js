const http = require('http');
const app =  require('./app');
const { PORT } = require('/config/config')

const server =  http.createServer();

server.listen(PORT, () => {
    console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`)
})