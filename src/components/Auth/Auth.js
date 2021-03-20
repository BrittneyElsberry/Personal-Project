import React, {useState} from 'react'
import axios from 'axios'
import './Auth.scss';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'
// import VisibilityToggler from './VisibilityToggler' //will implement later
// import {useHistory} from 'react-router-dom'

const Auth =(props)=>{

const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: '',
    password: '',
    dept_number: 0,
  
})    

const [user_admin, setuser_admin] = useState(false)
const [toggleLogin, setToggleLogin] = useState(false)
const [toggleRegister, setToggleRegister] = useState(false)
const [about, setAbout] = useState (false)




    const register = ()=>{

    axios.post('/auth/register', {...userInfo, user_admin})
    .then(res=>{
        props.updateUser(res.data)
        // setUserInfo(res.data) leaving this component so don't need to update local state
        props.history.push('/deptdash')
    }).catch(err=> alert(err))

}

    const login = ()=> {
    axios.post('/auth/login', userInfo)
    .then(user => {
        props.updateUser(user.data)
        // setUserInfo(user.data) 
        props.history.push( props.location.state ? props.location.state.from : '/deptdash')
    })

    }


    const displayLoginForm = ()=> {
    setToggleLogin(true)
    setToggleRegister(false)
    setAbout(false)
    }


    const displayRegisterForm = ()=> {
        setToggleRegister(true)
        setToggleLogin(false)
        setAbout(false)

        }
        
    
    const displayAbout = () => {
        setAbout(!about)
        setToggleRegister(false)
        setToggleLogin(false)
      
    }    


    return (



    <div className='backgroundAuth'>

                    <div className='employeeEngagement'>
                    <p className='increaseempl'>Increase employee engagement with the Feedback Hub! <br></br>
                        </p>
                    <button className='aboutbtn' onClick={(e)=>displayAbout(e)}>About</button>
                       
                    
                            {/* <button className='aboutbtn' onClick={(e)=>displayAbout(e)}>About</button> */}

                                {/* <div className='flexauthbtn'> */}
                                     <button
                                    className='authbtn'
                                    onClick={(e)=>displayLoginForm(e)}

                                    >Login</button>

                                    <button
                                    className='authbtn'
                                    onClick={(e)=>displayRegisterForm(e)}

                                    >Register</button>

                                {/* </div> */}
                                
                    </div>


        
                    { about ? 
                            <div className="aboutus">
                                <p>
                                    <li className='border'> Submit and track your feedback history with a personal feedback page.</li>
                                    <br></br>
                                    <br></br>
                                    <li className='border'> Collaborate with leadership through the manager comments feature</li>
                                    <br></br>
                                    <br></br>
                                    {/* <li className='border'>Have a great idea for an internal process or product improvement? Submit your idea and track implementation progress</li>
                                    <br></br>
                                    <br></br> */}
                                    <li className='border'>Submit anonymous feedback that will be tracked by your department with no other identifying data</li>
                                    <br></br>
                                    <br></br>
                                    <li className='border'> At Feedback hub, we believe that every employee has a voice and companies are more productive when employee engagement is high.</li>
                                    <br></br>
                                    <br></br>
                                    <li className='border'> We understand the importance of transparency and accountability from leadership</li>
                                    
                                   
                                </p>
                                <div className='sideview'>

                                </div>

                            </div> 
                            
                        : 
                        null 
                        
                    }
        
     

               

        
        



        <div className='authandinfocontainer'>




                        { toggleLogin ? (

                                <div className='authContainer'>
                                <div className='authInputFieldContainer'>
                                <p className='labelText'>Username:</p><br></br> 
                                    
                                    <input 
                                    type='text'
                                    className='unInput'
                                    value={userInfo.username}
                                    onChange={(e)=>setUserInfo({...userInfo, username: e.target.value})}

                                    />
                                    
                                    <br></br>

                                    <p className='labelText'>Password:</p><br></br> 
                                        
                                        <input 
                                        type='password'
                                        className='passInput'
                                        value={userInfo.password}
                                        onChange={(e)=>setUserInfo({...userInfo, password: e.target.value}
                                            
                                        
                                        )
                                        
                        }
                                        />
                        
                                       
                        <br></br>


                        
                        
            


                        <br></br>

                                  
                                    <button className='smallloginbtn'onClick={login}>Login</button>

                                  

                                    <br></br>

                                    <br></br>


                                    </div> 
                                    </div> 
                                    )
                                    :
                                    <div>


                                    </div>

                     }


                                { toggleRegister ? 


                                <div className='authContainer'>
                                <div className='authInputFieldContainer'>
                                <p className='labelText'>Username:</p><br></br> 
                                    
                                    <input 
                                    type='text'
                                    className='unInput'
                                    value={userInfo.username}
                                    onChange={(e)=>setUserInfo({...userInfo, username: e.target.value})}

                                />
                                <br></br>

                                <p className='labelText'>Password:</p><br></br> 
                                    
                                    <input 
                                    type='password'
                                    className='passInput'
                                    value={userInfo.password}
                                    onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
                                
                                />
                                <br></br>

                                <p className='labelText'>Are you a Manager? :</p> 
                                    
                                    <input 
                                    type="checkbox" 
                                    className="adminCheckbox" 
                                    checked={user_admin}
                                    onChange={(e)=>{setuser_admin(e.target.checked)}} /> 
                                
                                
                                <br></br>
                                <p className='labelText'>Department Number:</p><br></br> 
                                
                                    <input 
                                    type='text'
                                    className='deptInput'
                                    value={userInfo.dept_number}
                                    onChange={(e)=>setUserInfo({...userInfo, dept_number: e.target.value})}
                                
                                />

                                <br></br>

                              
                                <button className='smallregisterbtn' onClick={register}>Register</button>
                            

                                <br></br>


                                </div> 
                                </div> 

                                : 

                                <div></div>



                                }


                                   

               

                          


        </div>


                   


    </div> 
    
    
    
    )


}

export default connect (null, {updateUser})(Auth)