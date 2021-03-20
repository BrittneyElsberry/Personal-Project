import {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {updateUser} from '../../redux/authReducer'
import {Link, withRouter} from 'react-router-dom'
import './Nav.scss'


const Nav = (props)=> {

 

    return (
        
      
        props.location.pathname !== '/' && 
     

        <div className='nav'>
        <div className='nav-profile-container'>
          <div className='nav-profile-pic' ></div>
          <p>{props.initialState}</p>
        </div>


        <div>
          
          {props.authReducer.user_admin ?

            <div className='nav-links'>
            <Link to="/managerview" ><a className='nav-item'>Manager View</a></Link> 
            <Link to="/deptdash"  ><a className='nav-item'>Department</a></Link>  
            <Link to='/companydash' ><a className='nav-item'>Company</a> </Link>
            <Link to={`/myfeedback/${props.user_id}`}><a className='nav-item'>My Feedback</a></Link>
            <Link to='/' onClick={logout}><a className='nav-item'>Logout</a></Link>
          </div>
            
          
          
          :
          
          <div className='nav-links'>
            <Link to="/deptdash"><a className='nav-item' alt='department dashboard'>Department</a></Link>  
            <Link to='/companydash'><a className='nav-item' alt='my feedback'>Company</a> </Link>
            <Link to={`/myfeedback/${props.authReducer.user_id}`}><a className='nav-item' alt='my feedback' >My Feedback</a></Link>
            <Link to='/' onClick={logout}><a className='nav-item logout' alt='logout'>Logout</a></Link>
          </div>
            
          
          
          }
        </div>
                
          
        </div>
    )



}

const mapStateToProps = (reduxStore) => {
    return reduxStore
}

export default withRouter (connect(mapStateToProps, {updateUser, logout})(Nav))