const bcrypt = require('bcryptjs')


module.exports = {

    register: async (req,res) =>{
       
       try{
        const {username, password, dept_number, user_admin} = req.body
        console.log(req.body)
        const db = req.app.get('db')
        const result = await db.find_user_by_username([username])
        const existingUser = result[0]
        console.log(result)

        if(existingUser){
            return res.status(409).send('Username Taken')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const registeredUser = await db.create_user([username, hash, dept_number, user_admin]) //registeredUser is destructured
        const user = registeredUser[0]

        delete user.password
        req.session.user = user

        // req.session.user = {
        //     username: user.username,
        //     id: user.id,
        //     dept_number: user.deptNumber
            

        // }
        return res.status(201).send(req.session.user)

    } catch(err) {
        console.log(err)
    }
        

    },

    login: async(req, res) =>{
        try{
        const {username, password} = req.body
        const db = req.app.get('db')
        const foundUser = await db.find_user_by_username([username])
        const user = foundUser[0]

        if(!user){
            res.status(401).send('User not found. Please register as a new user before logging in')
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)

        if(!isAuthenticated){
            res.status(403).send('Incorrect Password!')
        }

        // req.session.user = {
        //     username: user.username,
        //     id: user.user_id,
        //     deptNumber: user.dept_number
        // }
        delete user.password
        req.session.user = user
        //delete password above req.session 
        //req.session.user = user
        console.log(req.session.user)
        return res.status(200).send(req.session.user)
    }catch(err){
        console.log(err)
    }
    },

    getUser: (req,res) =>{
        const {user} = req.session
        if(user){
            return res.status(200).send(req.session.user)

        }else {
            return res.status(404)
        }
    },

    logout: (req, res)=>{
        req.session.destroy()
        return res.status(200)
        
    }

}