import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {updateUser} from '../../redux/authReducer'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {TiDelete} from 'react-icons/ti'
import './Nav.scss'


const Nav = (props)=> {

  const [hambtn, setHamBtn] = useState(false)
 
  const displaySlidingMenu = ()=>{
    setHamBtn(!hambtn)
  }

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
             <button className='ham-nav-btn'
                     onClick={displaySlidingMenu}
             
             >
            <GiHamburgerMenu color='white' size={28}/>  
            </button> 


              <div className={hambtn ? 'sliding-menu-container-active' : 'sliding-menu-container'}>

              <button className={hambtn ? 'icon-btn-x' : 'icon-btn-none'}
                            onClick={displaySlidingMenu}>
                    <TiDelete size={28} margin={0} />            
                    </button>
            <Link to="/managerview" ><a className='nav-item'>Manager View</a></Link> 
            <Link to="/deptdash"  ><a className='nav-item'>Department</a></Link>  
            <Link to='/companydash' ><a className='nav-item'>Company</a> </Link>
            <Link to={`/myfeedback/${props.user_id}`}><a className='nav-item'>My Feedback</a></Link>
            <Link to='/' onClick={logout}><a className='nav-item'>Logout</a></Link>
          </div>
          </div>
            
          
          
          :

          <div className='nav-links'>

            <button className='ham-nav-btn'
                    onClick={displaySlidingMenu}
            
            >
            <GiHamburgerMenu color='white' size={28} className='nav-ham-btn'/> 
            </button>

            
            <div className={hambtn ? 'sliding-menu-container-active' : 'sliding-menu-container'}>

            <button className={hambtn ? 'icon-btn-x' : 'icon-btn-none'}
                            onClick={displaySlidingMenu}>
                    <TiDelete size={28} margin={0} />            
            </button>

            <Link to="/deptdash"
                  onClick={displaySlidingMenu}
            ><a className='nav-item' alt='department dashboard'>Department</a></Link>  
            
            <Link to='/companydash'
                  onClik={displaySlidingMenu}

            ><a className='nav-item' alt='my feedback'>Company</a> </Link>
            
            <Link to={`/myfeedback/${props.authReducer.user_id}`} 
                  onClick={displaySlidingMenu}
            
            ><a className='nav-item' alt='my feedback' >My Feedback</a></Link>
            <Link to='/' onClick={logout}><a className='nav-item logout' alt='logout'>Logout</a></Link>
          </div>
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