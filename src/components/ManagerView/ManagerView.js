import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './ManagerView.scss';



// const BASE_URL = 'https://dummyapi.io/data/api/'
// const APP_ID = '60392ea1b2517899d47d9dc9'

const ManagerView = (props)=>{


const [directory, setDirectory] = useState([])

useEffect(()=>{

    axios.get(`/managerview/myteam`)
    .then((res)=> {
        setDirectory(res.data) //key learning
        console.log(res.data)
    
    }
        
//saving to state, passing into the key value we want to override on state
//functional components don't need to override anything so you just set it directly.
// axios.get(`${BASE_URL}user`, {headers: {'app-id': APP_ID}})
// .then((res)=> {setDirectory(res.data.data)
//     console.log(res.data.data)

).catch(err=> console.log(err))

}, [])

console.log(directory)
console.log('this is the directory')





return(

    <div className='managerviewContainer'>
        
        
   
    <div className='teamListContainer' >
    <h1 className='myteam'>My Team</h1>
    <br></br>
  
        {  directory && directory.map((empList)=> {
            return <Link to={`/myfeedback/${empList.user_id}`}>
            <div key={empList.user_id} ><li className='teamList' > {empList.username}</li></div>  </Link>
                                                    })  
        } 

    </div>
        
      








        {/* {directory.map((employeeD)=>{
            return <Link to={`/myfeedback/`}> <div key={employeeD.id}><h2>{employeeD.firstName} {employeeD.lastName}<br></br></h2></div></Link>
        })} */}
  
    
    
    </div>

)

}

export default ManagerView