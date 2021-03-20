module.exports = {
    retrieveTeam: async (req, res)=>{
        const {dept_number} = req.session.user

        const db = req.app.get('db')
        const team = await db.retrieveteam([dept_number])
        res.status(200).send(team)

    },

    retrieveIndividualFB: async (req, res)=> {

        let {user_id} = req.params
        console.log( req.params, 'is this passign back what it should')
        const db = await req.app.get('db')
        const indfbList = await db.readfeedbackandcomments([user_id])
        console.log(indfbList, 'controller are you working?')
        res.status(200).send(indfbList)
    },


    addComment: async (req, res)=>{
        //copied over from createFB function // need to modify still

        const db = req.app.get('db')
        const {comment, feedback_id} = req.body //need to pass back feedback_id
        const {user_id} = req.session.user
        const date = new Date 

        console.log(req.body, 'this is what is coming off of the body in the controller function')

        if(comment){
            
            const savedComment = await db.comments([comment, feedback_id, user_id, date, feedback_id])
        
            return res.status(200).send(savedComment) 
         

        } else {
            return res.status(403)
        }       



    },

    // retrieveComments: async (req, res)=> {
    //     // let {user_id} = req.session.user 
    //     let {feedback_id} = req.body
    //     console.log(req.body, 'is this right?')
    //     const db = await req.app.get('db')
    //     const commentList = await db.readcomments([feedback_id])
    //     // console.log(fbList, 'controller')
    //     res.status(200).send(commentList)
    // }


}