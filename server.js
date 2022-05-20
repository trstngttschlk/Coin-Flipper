// import required library to start server
const http = require('http')
// import file system library
const fs = require('fs')

// set port for server
const port = 5000
// create new server
const server = http.createServer(function(req,res){
    // tell server to load html
    // 200 is a good status code | everything went well
    // second parameter tells server it is html
    res.writeHead(200, {'Content-Type': 'text/html'})
    // read file | if goes right data, if error
    fs.readFile('public/index.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            // indicates all info from index.html
            res.write(data)
        }
        res.end()
    })
})
// start server at port
server.listen(port, function(error) {
    if (error){
        console.log('Something went wrong', error)
    } else {
        console.log(`Server is listening on port ${port}`)
    }
})