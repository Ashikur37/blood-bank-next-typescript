import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import { connect } from "../../../connection";
 const handler= async(req:NextApiRequest, res:NextApiResponse) =>{
    //create hash using argon2
    const hash =await argon2.hash(req.body.password);
    //create user
    const { User } = await connect();
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        blood_group: req.body.blood_group,
        hash,
        verified: false,
    });
    //send response
    res.json(user);

  }
  export default handler;