const express=require('express')
const users =require('./data.json')
const fs=require('fs')
const app=express()
const port=8000;

app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log("hello from middlware 1")
    //req.username="vasu"  it can be accessible anywhere
    fs.appendFile(
        "log.txt",
        `/n${Date.now()}:${req.ip} ${req.method} ${req.path}`,
        (err,data)=>{
            next()
        }
    )
    // next()
})

app.get("/users", (req, res) => {
    const html=`
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("") }
    </ul>
    `
    return res.send(html)
})

app.get("/api/users",(req,res)=>{
    res.setHeader('x-myname','vasu')

    return res.json(users)
})

app.route("/api/users/:id").get( (req, res) => {
    const id=Number(req.params.id)
    const user =users.find((user)=>user.id === id)
    if(!user) {
        res.status(404).json({error:"user not found"})
    }
    return res.json(user)
}).delete((req, res) => {

    return res.json({ status: "pending" })
}).patch((req, res) => {
   
    return res.json({ status: "pending" })
})

app.post("/api/users",(req, res) => {
    
const body=req.body;

if(!body || !body.first_name || !body.email ||body.last_name || body.gender || body.job_title)
    {
        return res.status(400).json({msg:'all field are required'})
    }
users.push({...body,id: users.length+1})
fs.writeFile("./data.json" ,JSON.stringify(users),(err,data)=>{
    return res.status(201).json({status:"success",id:users.length})
});
    
});

app.listen(port,()=>{
    console.log("server started")
})


