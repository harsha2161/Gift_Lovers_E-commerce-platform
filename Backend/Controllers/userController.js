import user from "../models/users.js"
import bcript from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export function createUser (req, res) {
    // වෙනත් හෑශින් ක්‍රමයක්. සම්පූර්න කර නැත.
    //dcript password hashing with manual solting
    // const salt = crypto.randomBytes(16).toString('hex');
    // const toHashing = password  + salt;

    // const hashedpassword = crypto.createHash('sha256').update(toHashing).digest('hex');

    //argon2i password hashing
    // const hashPassword = argon2i.hash(req.body.password, {
    //     type: argon2i.argon2id,
    //     memoryCost : 2 ** 16,
    //     timeCost : 3,
    //     parallelism : 1,
    // });
    
    
    const password = req.body.password
   
    const hashedpassword = bcript.hashSync(password, 10);

        if(req.body.role == "admin"){
            if(req.user != null){  // " ලොග් වෙලා ඉන්නව නම් අනිවාරෙන් ටෝකෙන් එකෙන් යූසර් ගෙ විස්තර අරන් එකනව, ඒකෙ රෝල් එක ඇඩ්මින් නම් එකවුන් එක හදන්න දෙනව log wenakota witharai tiken ekk hambawenne"
                if(req.user.role != "admin"){

                res.status(403).json({
                    message : "you are not authorized to create admin account. place login first"
                })
                return // "කෝඩ් එක මෙතනින් නතර වෙනව, නැත්තන් රෙස්පොන්ස් එක යවන ඇඩ්මින් එකවුන්ට් එක ගැදෙනව"
                }
            }else{

                res.status(403).json({
                    message : "you are not authorized to create admin account. place login first"
                })
                return
            }
        }

    const User = new user(
        {
        firstName : req.body.firstName,
        lastName  :req.body.lastName,
        email : req.body.email,
        img : req.body.img,
        password : hashedpassword,
        role : req.body.role,
        }

       // req.body
    )
    User.save().then(
        () => {
            console.log(User);
            res.json({
                message : "user create successfully",
                 
            })
        }
    ).catch(
        (error) =>{ 
           res.json({
                message : "user create fales"
           })
        })
}


export function loginUser(req,res){

    const email = req.body.email
    const password = req.body.password
   

    user.findOne({email : email}).then(
        (user) => { 
          if(user == null){
            res.status(401).json(
                {
                    message : " invalid email address"
                }
            )
          }else{
            // bcript password cheking
            
            const isPasswordCorrect = bcript.compareSync(password, user.password)
            //console.log(isPasswordCorrect)
            if(isPasswordCorrect){
                
                
                const token = jwt.sign(
                    {
                        email : user.email,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        role : user.role,
                        img : user.img,
                    },
                    process.env.JWT_KEY   // encript user detials with this password and set token
                )
                res.json({

                    message : "logn is sucessfull",
                    token : token,
                    type : user.role
                })

            }else{
                res.status(401).json({
                    message : "invalid password"

                })
            }
        }
   
    })
}

export async function veiwUsers(req,res){
    try{
        const users = await user.find()
        res.json(users)
    }catch(err){
        res.json(
            {
                message : "user show is fails",
                error : err,
            }
        )
    }
    
}


export function isAdmin(req){
       if(req.user == null){    
            return false

    }else if (req.user.role != "admin"){
            return false
    }
    else{
            return true
    }
}




   

