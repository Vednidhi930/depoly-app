import jwt from "jsonwebtoken";

function TokenGenerated(email,name){
    return jwt.sign({email,name},process.env.JWT_SECRECT) 
   
}

export default TokenGenerated