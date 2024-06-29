const fs=require("fs")
const os=require("os")

console.log(os.cpus().length)

//sync=>return kre
// fs.writeFileSync("./test.txt","Hey vasuda")

//async=>return n kre
// fs.writeFile("./test.txt", "Hey vasuda",(err)=>{})
 
    //sync
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)

//async
// fs.readFile("./contacts.txt", "utf-8",(err,result)=>{
//     if(err)
//         {
//             console.log("error found")
//         }
//         else{
//             console.log(result)
//         }
// })

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())

fs.cpSync("./test.txt","./copy.txt")

fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt"))

fs.mkdirSync("docs/a/b",{recursive:true})