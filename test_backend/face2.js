function getAllProducts(dbPassword, connectionSpeed){
    
    const promiss = new Promise(
        (resolve,reject) => {
            if(connectionSpeed >= 10){
                if(dbPassword == "kamal"){
                    resolve({
                        name : "sunil",
                        age : 48,
                    })
                }else{
                    reject({
                        message : "password is incurrect"
                    })
                }
            }else{
                reject({
                    message : "connecting speed is very low"
                })
            }
           
        }
    )
    return promiss;
}
async function getData(){
    try{
        const cheking = await getAllProducts("kgamal", 50)
        console.log(cheking);
        console.log("code is successfull");
    }catch(err){
        console.log(err)
    }
    
}

getData()
// getAllProducts("kamal", "10").then(
//     (data) =>{
//         console.log(data)
//     }
// ).catch(
//     (data) => {
//         console.log(data);
//     }
// )


