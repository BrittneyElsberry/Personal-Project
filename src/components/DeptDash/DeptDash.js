import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './DeptDash.scss';
import {connect} from 'react-redux'
// import {updateUser} from '../../redux/authReducer'

import {Bar} from 'react-chartjs-2'


const DeptDash = (props)=>{

    const [deptName, setDeptName] = useState('')
    const [catChartData, setCatChartData] = useState({})
    const [resChartData, setResChartData] = useState({})
    const [category1, setCategory1] = useState({})
    const [category2, setCategory2] = useState({})
    const [category3, setCategory3] = useState({})
    const [category4, setCategory4] = useState({})
    const [comment1, setComment1] = useState({})
    const [comment2, setComment2] = useState({})
    const [comment3, setComment3] = useState({})
    const [comment4, setComment4] = useState({})

      

    
    useEffect(()=>{

        // stackedBar()
        axios.get(`/chart1`)
        .then( res=> {
            
        setCategory1(res.data)
   
        })
        .catch(err=> console.log(err))


        axios.get(`/chart2`)
        .then( res=> {
            
        setCategory2(res.data)
  
        })
        .catch(err=> console.log(err))


        axios.get(`/chart3`)
        .then( res=> {
            
        setCategory3(res.data)
     
        })
        .catch(err=> console.log(err))


        axios.get(`/chart4`)
        .then( res=> {
            
        setCategory4(res.data)
  
        })
        .catch(err=> console.log(err))
      
      

        axios.get(`/comment1`)
        .then( res=> {
            
        setComment1(res.data)
    
        })
        .catch(err=> console.log(err))

        axios.get(`/comment2`)
        .then( res=> {
            
        setComment2(res.data)
     
        })
        .catch(err=> console.log(err))

        axios.get(`/comment3`)
        .then( res=> {
            
        setComment3(res.data)
     
        })
        .catch(err=> console.log(err))

        axios.get(`/comment4`)
        .then( res=> {
            
        setComment4(res.data)

        })
        .catch(err=> console.log(err))
    

    }, [])





  

return(

    <div className='deptDashContainer'>
  
    <div className='fiscalYearContainer'>
        <div className='fiscal-year'>
        <h1>Fiscal Year</h1>
    <select className='fy-dropdown' placeholder='Fiscal Year'>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
        <option value='2017'>2017</option>
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
        <option value='2014'>2014</option>
    
    
    </select>
    </div>

    <div className='fiscal-qtr'>
    <h1>Fiscal Quarter</h1>
    <select className='qtrContainer'>
    <option value='Q1'>Q1</option>
    <option value='Q2'>Q2</option>
    <option value='Q3'>Q3</option>
    <option vlaue='Q4'>Q4</option>

    </select>
    </div>
    </div>

    <div className='chart-container'>
      

           <Bar
           className='chart'
           data={{
         
         options: {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            responsive: true,

        },

        labels: ['Internal Process', 'Product', 'Leadership', 'Customer Experience'],
        datasets: [{
            label: 'Department Feedback by Category',
            data: [category1.length, category2.length, category3.length, category4.length],
            backgroundColor: ['#9a8c98', '#9a8c98', '#9a8c98', '#9a8c98' ],
            borderWidth: 2

        },   
        {
            label: 'Manager Response Rate',
            data: [comment1.length, comment2.length, comment3.length, comment4.length],
            backgroundColor: ['#4a4e69', '#4a4e69', '#4a4e69', '#4a4e69'],
            borderWidth: 2

        }
    
    ]
    }}
       
   
       
       /> 





    </div>


    </div>



)
       
}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

