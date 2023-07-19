const fs=require("fs");

//create file
fs.writeFileSync("nodejs_architechture.txt","Node.js is a platform that utilizes javascript and is primarily employed for developing web application that are hioghly focused on input/output opreations, including but not limited to chat applications and multimedia streaming websites. the plateform is constructed using google chorome's V8 javascript engine. a web application is a type of softwere that executes ona server and is displayed by a client's browser that obtain all the application's resourses over the internet.");


//append file content
fs.appendFileSync("nodejs_architechture.txt","To manage several concurrent clients, Node.js employs a “Single Threaded Event Loop” design. The JavaScript event-based model and the JavaScript callback mechanism are employed in the Node.js Processing Model. It employs two fundamental concepts:Asynchronous modelNon-blocking of I/O operationsThese features enhance the scalability, performance, and throughput of Node.js web applications.");


//read file
const buf_data=fs.readFileSync("nodejs_architechture.txt");
console.log(buf_data.toString());

delete file
const filePath="C:/Users/Arnab/OneDrive/Pictures/Documents/Desktop/nodejs assignment/nodejs_architechture.txt"

fs.unlink(filePath,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("deleted successfully");
})
