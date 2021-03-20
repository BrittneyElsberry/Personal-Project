import axios from 'axios'

const initialState = {
   
    feedback: [],
    comment: []
    

}

const POST_FEEDBACK = "POST_FEEDBACK"
const POST_COMMENT = "POST_COMMENT"
const POST_FEEDBACK_MANAGER_VIEW = "POST_FEEDBACK_MANAGER_VIEW"



export const postFB = ()=>{
    let dataFB = axios.get('/myfeedback/:user_id')
    .then(res => res.data)
    
    // let dataComments = axios.get('/mycomments/:user_id')
    // .then((res) =>{ res.data
    // console.log(res.data, 'checking if readcomments is working')
    // })
 
    return{
        type: POST_FEEDBACK,
        payload: dataFB
    }
    
}

// console.log(dataFB, 'reducer checking')


export const postFBManagerView = ()=>{
    let data = axios.get('/myfeedback/:user_id')
    .then(res => res.data)
 
    return{
        type: POST_FEEDBACK_MANAGER_VIEW,
        payload: data
    }
    
}



// export const postComment = ()=>{
//     let data = axios.get(`/managercommentlist/:feedback_id`)
//     .then(res => res.data)
 
//     return{
//         type: POST_COMMENT,
//         payload: data
//     }
    
// }


export default function fbReducer(state=initialState, action){


    switch(action.type){
    case POST_FEEDBACK + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}


    case POST_FEEDBACK_MANAGER_VIEW + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}

    //  case  POST_COMMENT + '_FULFILLED':
    //      console.log(action)
    //      return{...state, comment: action.payload}  


      

default: return state

}
}
 