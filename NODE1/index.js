const http=require("http")
const express=require("express")
const app=express()

app.get("/",(req,res)=>{
  return res.send("Hello from home page")
})

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`)
})

app.listen(8000,()=> console.log("server started"))





// const fs=require("fs")
// const url = require("url")

// const myserver=http.createServer((req,res)=>{
//   if(req.url === "/favicon.ico") return res.end()     
//   const log = `${Date.now()}: ${req.url} ${req.method} New Req Received\n`
//   const myurl=url.parse(req.url,true)
//   console.log(myurl)
// fs.appendFile("log.txt",log,(err,data)=>{
//     switch(myurl.pathname){
//       case '/': if (req.method === "GET")  {res.end("Home Page")}
//         break
//         case '/about':
//         const username = myurl.query.myname
//         res.end(`hi ${username}`)
//         case '/signup':
//         if (req.method === "GET")
//             {
//               res.end("this is a signup form")
//             }
//         else if (req.method === "POST"){
//                res.end("success")
//             }
//         break
//         default :res.end("Error 404")
//     }
// })
// })

// myserver.listen(8000,()=>
// {
//     console.log("Server Started")
// })

//http://localhost:8000/about?myname=vasu&userid=1&search=dog