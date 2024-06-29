const fs=require("fs")

//sync=>return kre
// fs.writeFileSync("./test.txt","Hey vasuda")

//async=>return n kre
// fs.writeFile("./test.txt", "Hey vasuda",(err)=>{})
 
    //sync
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)

//async
fs.readFile("./contacts.txt", "utf-8",(err,result)=>{
    if(err)
        {
            console.log("error found")
        }
        else{
            console.log(result)
        }
})