import React,{useState} from 'react' ;

function Form(props)
{
    const [name, setName] = useState('');
    const[email,setEmail] = useState('')
    const[website,setWebsite] = useState('')
    const[skills,setSkills] = useState([])
  const [gender, setGender] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeWebsite= (event) => {
    setWebsite(event.target.value);
  };
  const changeSkills = (event) => {
        skills.push(event.target.value);
        setSkills(skills);
      
    
  };
  
  const clearState = () => {
    setName('');
    setGender('');
    setEmail('')
    setWebsite('');
    setSkills([])
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        const val = {
            name,
            email,
            gender,
            skills,
           
          };
          props.func(val);
          clearState();
     }
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
            <label className='label'>Name</label>
            <input type = "text" placeholder='Enter your name' id = "name" name = "name" onChange={changeName} value = {name}></input>
            </div>
            <div>
            <label className='label'>Email Id</label>
            <input type = "email" placeholder='Enter your email' id = "email" name = "email" onChange={changeEmail} value = {email}></input>
            </div>
            <div>
            <label className='label'>Website</label>
            <input type = "text" placeholder = "website name" id = "website" name = "website" onChange= {changeWebsite} value = {website}></input>
            </div>
           <div>
           <label className='label'>Gender</label>
            <input type = "radio" name = "gender" value = "male" onClick = {changeGender}></input><span className='gender'>Male</span>
            <input type = "radio" name = "gender" value = "female" onClick={changeGender}></input><span className='gender' >Female</span>
           </div>
            <div>
            <label className='label'>Skills</label>
            <input type="checkbox" id="java" name="java" value="Java" onChange ={changeSkills}></input>
            <label htmlFor="java" className='label'> Java</label>
            <input type="checkbox" id="html" name="html" value="html" onChange ={changeSkills}></input>
            <label htmlFor="html" className='label'>HTML</label>
            <input type="checkbox" id="css" name="css" value="css" onChange={changeSkills}></input>
            <label htmlFor="css" className='label'> CSS</label>
            </div>
           <div>
           <button type="submit"id = "submitbtn" >Enroll Students</button>
            <input type = "reset" value = "Clear" id = "resetbtn"></input>
           </div>
           
        </form>
    )
}
export default Form 