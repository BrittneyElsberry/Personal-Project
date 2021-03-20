import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'
import './CompDash.scss';
// import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'


const CompDash = (props)=>{


    // if(!props.user){
    //     return <Redirect to='/'/>
    // }   

return(

    <div className='compDashContainer'>
    <h2 className='fiscalYear'>Fiscal Year 2021</h2>
    <select className='qtrContainer'>
    <option>Q1</option>
    <option>Q2</option>
    <option>Q3</option>
    <option>Q4</option>

    </select>

    </div>
)

}

const mapStateToProps = (reduxState) => {
    return reduxState.authReducer
}

export default connect(mapStateToProps, {updateUser})(CompDash)