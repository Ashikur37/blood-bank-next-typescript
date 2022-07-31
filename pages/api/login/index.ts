import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import { connect } from "../../../connection";
 const handler= async(req:NextApiRequest, res:NextApiResponse) =>{
   
    const { User } = await connect();
    const user = await User.findOne({email:req.body.email});
    if(user){
    //argon2 verify
    const valid = await argon2.verify(user.hash, req.body.password);
    if(valid){
        res.json(user);
    }
    else{
        res.status(400).json({error:"Invalid Password"});
    }
    }
    else{
        res.status(400).json({error:"User not found"});
    }


  }
  export default handler;