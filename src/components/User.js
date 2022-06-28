import React,{useState} from "react";
import Form from "./Form";
import jsonData from '../data.json'
function User(){
    const [userData, setUserData] = useState(jsonData);
  
  const DataRows = userData.map((info) => {
    return (
        <React.Fragment key = {info.id}>
 <div className="box">
       
       <p>Name :{info.name} </p>
       <p>Email id  : {info.email}</p>
       <p>Gender :{info.gender} </p>
       <p>Skills :{info.skills.map(skill => (
 <span>{skill},</span>
))}
</p>

       
       
   </div>
        </React.Fragment>
       
    );
  });
  
  
    const addUser = (data)=>{
                const totalUser = userData.length;
                data.id = totalUser + 1 ;
                const updatedUserData = [...userData];
                updatedUserData.push(data);
                setUserData(updatedUserData);
    };
        return (
           
            <>
             <Form func = {addUser} className = "form"></Form>
                
               <div className="UserData">{DataRows}</div>
            
           
            </>
           
            
        )
}

export default User ;