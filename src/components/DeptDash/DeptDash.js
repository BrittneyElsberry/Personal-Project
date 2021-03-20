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
        console.log(res.data, 'this is category_id 1 data')
        })
        .catch(err=> console.log(err))


        axios.get(`/chart2`)
        .then( res=> {
            
        setCategory2(res.data)
        console.log(res.data, 'this is category_id 2 data')
        })
        .catch(err=> console.log(err))


        axios.get(`/chart3`)
        .then( res=> {
            
        setCategory3(res.data)
        console.log(res.data, 'this is category_id 3 data')
        })
        .catch(err=> console.log(err))


        axios.get(`/chart4`)
        .then( res=> {
            
        setCategory4(res.data)
        console.log(res.data, 'this is category_id 4 data')
        })
        .catch(err=> console.log(err))
      
      

        axios.get(`/comment1`)
        .then( res=> {
            
        setComment1(res.data)
        console.log(res.data, 'this is comment1 data. YOU WORKING OR WHAT?')
        })
        .catch(err=> console.log(err))

        axios.get(`/comment2`)
        .then( res=> {
            
        setComment2(res.data)
        console.log(res.data, 'this is comment2 data. YOU WORKING OR WHAT?')
        })
        .catch(err=> console.log(err))

        axios.get(`/comment3`)
        .then( res=> {
            
        setComment3(res.data)
        console.log(res.data, 'this is comment3 data. YOU WORKING OR WHAT?')
        })
        .catch(err=> console.log(err))

        axios.get(`/comment4`)
        .then( res=> {
            
        setComment4(res.data)
        console.log(res.data, 'this is comment4 data. YOU WORKING OR WHAT?')
        })
        .catch(err=> console.log(err))
    

    }, [])





    console.log(category1, 'is the data correct in state?')

return(

    <div className='deptDashContainer'>
  
    <div className='fiscalYearContainer'>
    <h2 className='fiscalYear'>Fiscal Year 2021</h2>
    <br></br>
    <select className='qtrContainer'>
    <option>Q1</option>
    <option>Q2</option>
    <option>Q3</option>
    <option>Q4</option>

    </select>
    </div>

    <div className='chart'>
       {/* <Bar height={'30%'}
           width={'30%'}  */}

           <Bar
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
            }
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
       
    //     options={{
    //        responsive: true,
    //        scales: {
    //            yAxes: [{
    //                ticks: {
    //                    autoSkip: true,
    //                    maxTicksLimit: 10,
    //                    beginAtZero: true
    //                }, 
    //                gridLines: {
    //                    display: false,
    //                    stacked: true
    //                }
    //            }],
    //            xAxes: [{
    //                gridLines: false,
    //                stacked: true
    //            }]
    //        }
    //    }} 
       
       /> 

    {/* <Line data={resChartData} options={{
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    }, 
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: false
                }]
            }
        }} />  */}



    </div>


    </div>



)
       
}



export default connect((s)=> s) (DeptDash) 
//put redux state onto our props 

