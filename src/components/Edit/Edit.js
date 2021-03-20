// import reactDom from "react-dom";
import React, {Component} from 'react';
import {postFB} from '../../redux/fbReducer'
import {updateUser} from '../../redux/authReducer'
import {connect} from 'react-redux'
import './Edit.scss'
import axios from 'axios'


class Edit extends Component {
constructor(props){
    super(props)

    this.state = {
        editing: false,
        userInput: '',
        feedback: [],
        comment: '',
        savedComment: [],
    }
}


componentDidMount(){
    console.log(this.props)


axios.get(`mycomments/${this.props.feedback_id}`)

.then(res=>{

console.log(res.data)
this.setState({savedComment: res.data})}
)

}



//Editing functions ----------------------------

toggleEditMode=()=>{
    this.setState({editing: true})
    // this.handleEditChange(this.props.feedback_id)
}

handleEditChange=(e)=>{
    this.setState({userInput: e.target.value})
   
}

handleSave=(id, userInput)=>{
    axios.put(`/myfeedback/${id}`, {userInput})
    .then(_ => this.props.postFB())
}






//Manager comment functions ---------------------------------

handleCommentInput = (e) => {
    this.setState({comment: e.target.value})
}

addComment = (comment, feedback_id) => {
axios.post(`/managercomment/`, {comment, feedback_id})
.then(res=>{
    this.setState({...this.state.savedComment, savedComment: res.data})
    this.setState({comment: ''})

})
}


render () {
   
// console.log(this.res.data, 'is the data empty?')
console.log(this.state.savedComment, 'this is this.state.savedComment.feedback_id')


    return(
        <div>

                    { this.state.savedComment.map((com)=> {
                      if(com.feedback_id === com.linkcommenttofb_id){
                        return (
                         
                            

                        <div className='commentContainer' key={com.comment_id}>
                        <li className='co'>{com.comment}</li>
    
                        </div> )
                      } else {
                          return null
                      }  
                
                })}


        {this.state.editing ? (

            <div>
            <li>
                <input 
                className='editInput'
                value={this.state.userInput}
                type='text'
                onChange={(e)=>this.handleEditChange(e)}
                
                />

                <button 
                className='btn' 
                onClick={()=> {
                    this.handleSave(this.props.feedback_id, this.state.userInput)
                    this.setState({editing: false})
                    console.log(this.props.feedback_id, 'this is what is passed to the controller function')

                }}>
                SAVE</button>
            </li>


             


            </div>

        )  : (

            this.props.user_admin ? (
                <div>
                    
                         {/* { this.state.savedComment.map((com)=> {

                            return (<div className='commentContainer' key={com.comment_id}>
                                    <li className='co'>{com.comment}</li>
                                
                            </div> )
                        })}
                     */}

                   
                   <br></br>
                   <br></br>


                    <input 
                    className='unInput'
                    value={this.state.comment}
                    type='text'
                    onChange={(e)=> this.handleCommentInput(e)}
                    
                    />
                   
                   
                    <button 
                    className='commentbtn'
                    onClick={()=>this.addComment(this.state.comment, this.props.feedback_id)}
                    
                    
                    >Comment</button>
                </div>


                    
        )
        :

          <div className='btnContainer'>
          
             <button className="btn" id='fblabels' onClick={()=>this.props.deleteFeedback(this.props.feedback_id)}>Delete</button>
             <button className="btn" onClick={()=>this.toggleEditMode()}>Edit</button>
             </div>
        
        ) }
        </div>
    )
}

}

export default connect((s)=>({
    ...s.fbReducer,
    ...s.authReducer
    
    }), {postFB, updateUser}) (Edit)