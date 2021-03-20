const nodemailer = require('nodemailer')



module.exports = {

    createFB: async (req, res) =>{

        const db = req.app.get('db')
        const {fb, selectCategory} = req.body
        const {user_id, dept_number} = req.session.user
        const date = new Date 

        console.log(req.body)

        if(fb){
            
            const [category] = await db.category([selectCategory])
            const [dept] = await db.department([dept_number])
            const [feedback] = await db.feedback([category.category_id, dept.dept_id, user_id, fb, date])

            
            return res.status(200).send(feedback) 
         

        } else {
            return res.status(403)
        }       
    }, 



    createAnonymous: async (req, res) => {

        const db = req.app.get('db')
        const {fb, selectCategory} = req.body
        const {dept_number} = req.session.user //removed user_id
        const date = new Date
        


        console.log(req.body)

        if(fb){
            
            const [category] = await db.category([selectCategory])
            const [dept] = await db.department([dept_number])
            const [feedback] = await db.anonymous_fb([fb, dept.dept_id, category.category_id, date])

            
            return res.status(200).send(feedback) 
         

        } else {
            return res.status(403)
        }       
    },



    readFB: async  (req, res)=> {

      
        // console.log(req.body, 'is this the params')
        let {user_id} =  req.session.user 
        const db = await req.app.get('db')
        const fbList = await db.readfeedbackandcomments([user_id])
        // console.log(fbList, 'controller data on readFB function')
        // let {feedback_id} = fbList.feedback_id        

        res.status(200).send(fbList)
 
    },


    readComments: async (req, res)=>{
        let {dept_number} = req.session.user
        let {feedback_id} = req.params
        console.log(dept_number)
        const db = await req.app.get('db')
        const [admin] = await db.finduseradmin([dept_number])
        console.log(admin.user_id, 'is this destructering getting 23?')

        const comList = await db.readcomments([admin.user_id, feedback_id])

        console.log(comList, 'this is coming from the comment list')
        res.status(200).send(comList)
  
 
    },

    updateFB: async (req, res) => {
       
        let {userInput} = req.body
        let {id} = req.params
        const db = await req.app.get('db')
        await db.editfeedback([userInput, id])
        res.sendStatus(200)



    },

    deleteFB: async (req, res) =>{
       
       try{
        let feedback_id = req.params.id
       const db = await req.app.get('db')
       await db.deletecomments([feedback_id])
       console.log(req.params.id, 'this is for the deleteFB controller function')
       await db.deletefeedback([feedback_id])
       res.sendStatus(200)

       }
       catch(err) {
           res.status(500).send(err)
           console.log(err)
       }
        

    },


    confirmationEmail: async (req, res)=>{

        try{
            let {username} = req.session.user
            let {fb, selectCategory} = req.body
            let transporter = nodemailer.createTransport({

            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
                // sendMail: true,
                //  port: 465,
            })


            let sending = await transporter.sendMail({
                from: ' "Test Employee" <testnodemailerprojects@gmail.com>',
                to: ' "Test Manager" <testnodemailerprojects@gmail.com>',
                subject: ` ${username} submitted new feedback!`,
                text: `${fb}`,
                html: `

                     <h2>See what your team member had to say</h2>
                     <h3> Feedback Category: ${selectCategory}
                    <p>
                    ${fb}
                    </p>
                     `
                    }, (err) => {
                        if(err){
                            console.log(err)
                            res.sendStatus(500)
                        } else {
                            res.status(200).send(sending)
                        } 
                    })
    
             }
        catch (err){
            console.log(err)
            }
    }
    
}

