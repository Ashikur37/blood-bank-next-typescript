import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next"
import { getToken } from "next-auth/jwt"
import { connect } from "../../../connection";
const secret: string = process.env.SECRET?process.env.SECRET:"secret";
   
 //get next auth user
 const handler= async(req:NextApiRequest, res:NextApiResponse) =>{

    const token = await getToken({ req, secret })
    if (!token) {
        return res.status(401).json({ message: "No token" });
        }
    res.json(token);
 }


  
  export default handler;