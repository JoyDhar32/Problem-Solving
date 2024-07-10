const sleep = async()=>{
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000);
    });
}
let t = Date.now();
sleep(1000).then(()=>{console.log(Date.now()-t)});