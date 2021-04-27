import React, {useState} from 'react'
import axios from 'axios'
import './Auth.scss';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TiDelete} from 'react-icons/ti'
import {FiPhoneCall} from 'react-icons/fi'
import styled from 'styled-components'

// import VisibilityToggler from './VisibilityToggler' //will implement later
// import {useHistory} from 'react-router-dom'

const Auth =(props)=>{

const [userInfo, setUserInfo] = useState({
    userId: 0,
    username: '',
    password: '',
    dept_number: 0,
  
})    

const [user_admin, setuser_admin] = useState(false);
const [toggleLogin, setToggleLogin] = useState(false);
const [toggleRegister, setToggleRegister] = useState(false);
const [toggleContactUs, setToggleContactUs] = useState(false);
const [about, setAbout] = useState (false);
const [hambtn, setHamBtn] = useState(false);




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

    const displaySlidingMenu = ()=> {
            setHamBtn(!hambtn)

    }


    const displayLoginForm = ()=> {
        setToggleLogin(true)
        setHamBtn(!hambtn)
        setToggleRegister(false)
        setAbout(false)
        setToggleContactUs(false)
        }


    const displayRegisterForm = ()=> {
        setToggleRegister(true)
        setHamBtn(!hambtn)
        setToggleLogin(false)
        setAbout(false)
        setToggleContactUs(false)

        }
        
    
    const displayAbout = () => {
        setAbout(!about)
        setHamBtn(!hambtn)
        setToggleRegister(false)
        setToggleLogin(false)
        setToggleContactUs(false)
      
    }  

    const displayContactUs =()=>{
        setToggleContactUs(!toggleContactUs)
        setAbout(false)
        setHamBtn(!hambtn)
        setToggleRegister(false)
        setToggleLogin(false)
    }
    
    
    // const phoneIcon = styled()


    return (



        <div className='backgroundAuth'>
            <div className={hambtn ? 'sliding-menu-container-active' : 'sliding-menu-container'}>


                    <button className={hambtn ? 'icon-btn-x' : 'icon-btn-none'}
                            onClick={displaySlidingMenu}>
                    <TiDelete size={28} margin={0} />            
                    </button>


                   <div className='menu-btn-container'>
                    <button className='aboutbtn' 
                            onClick={(e)=>displayAbout(e)}>
                    About
                    </button>
       
                     <button
                    className='authbtn'
                    onClick={(e)=>displayLoginForm(e)}
                    
                    >Login</button>

                    <button
                    className='authbtn'
                    onClick={(e)=>displayRegisterForm(e)}
                    
                    >Register</button>


                    <button
                    className='authbtn'
                    onClick={(e)=>displayContactUs(e)}
                    
                    >Contact Us</button>    

                    </div>
                    </div>
                

     

                    <div className='employeeEngagement'>
                    <p className='increaseempl'>Increase employee engagement with the Feedback Hub! <br></br>
                        </p>

                    
                                    <button className='icon-btn'
                                    onClick={displaySlidingMenu}
                                    
                                    ><GiHamburgerMenu size={28}/></button> 


                                
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
                                {
                                    toggleContactUs ? 
                                    
                                    <StyledForm>
                                        <div className='authContainer'>
                                            <div className='box'>

                                        {/* <img src="https://img.icons8.com/windows/32/000000/phone-disconnected--v1.png"/>  */}
                                                <FiPhoneCall/>
                                                <p className='p-font'>1800-765-2233</p>
                                            </div>

                                            <div className='box'>
                                       {/* <img className='icons' src="https://img.icons8.com/ios-filled/26/000000/email.png"/> */}
                                       {/* <a href="https://icons8.com/icon/8126/email">Email icon by Icons8</a> */}
                                       <p className='p-font'>email@email.com</p>
                                     
                                    </div>
                                        </div>
                                    

                                    </StyledForm>
                                    
                                    : null 
                                }


                   


    </div> 
    
    
    
    )


}

export default connect (null, {updateUser})(Auth)



const StyledForm = styled.div `

.authContainer{

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.7rem;
    z-index: 1;
    width: 80%;
    height: 40vh;
    margin-right: auto;
    margin-left: auto;
}

.box{
    display: flex;
    flex-direction: column;
}

.p-font{
    font-size: 1.0rem;
    color: #4a4e69;
    font-family: Roboto Slab, sans-serif;
}

.input{
    border-radius: 5px;
    border: 2px yellow solid;
}

.icons{
    size: 18px;
    background-color: purple;
    height: 60px;
    width: 100px;
}


@media screen (min-width: 100px) and (max-width: 425px){
width: 50%;

}



`