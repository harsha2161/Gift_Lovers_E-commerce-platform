const isNewWorlOk = true

const promiseOne = new Promise(
    (resolve, reject) => {
        
        setTimeout(
            () => {
                if(isNewWorlOk){
                    //success
                    console.log("data saving is success");
                    const user = {
                        name: "Harsha",
                        age: 22,
                        university: "University of Kelaniya"
                    };

                    resolve(user) // pass one perameter only

                }else{
                    //unsuccess
                    console.log("data saving is unsuccess")
                     const Erroruser = {
                        name: "Error:Harsha",
                        age: 22,
                        university: "error:University of Kelaniya"
                    };
                    reject("bad")                
                }

            },5000
        )
    }
)
promiseOne.then(
    (user) => {
        console.log(user)
        console.log("upload complete")
    }
).catch(
    () => {
         console.log("upload fail")
    }
)