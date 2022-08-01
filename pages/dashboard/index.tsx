import type { GetServerSideProps, NextPage } from 'next'
import axios from '../../utils/axios';

const Dashboard:NextPage=()=>{

    return(
        <div>
          
        </div>
    )
}
//server side props
export const getServerSideProps:GetServerSideProps=async (context)=>{
    try{
        let res= await axios.post("/api/profile");
    console.log(res.data);
}
catch(err:any){
//   console.log(err)
  console.log(err.response.data.message);
}
    return{
        props:{
            name:'Dashboard'
        }
    }
}
export default Dashboard;