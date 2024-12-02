const jasonServer = require('json-server')
const userServer = jasonServer.create()
const router = jasonServer.router('db.json')
const middleware = jasonServer.defaults()
const port = 4000 || process.env.port


userServer.use(middleware)
userServer.use(router)


userServer.listen(port,()=>{
    console.log(`server is running on port ${port}.`);
    
})