module.exports = {
    chartData1: async (req, res)=> {
        const db = req.app.get('db')
        let category1 = 1
        const cat1 = await db.readchart([category1])

        return res.status(200).send(cat1)

    },


    chartData2: async (req, res)=> {
        const db = req.app.get('db')
        let category2 = 2
        const cat2 = await db.readchart([category2])
        return res.status(200).send(cat2)

    },

    chartData3: async (req, res)=> {
        const db = req.app.get('db')
        let category3 = 3
        const cat3 = await db.readchart([category3])
        return res.status(200).send(cat3)

    },

    chartData4: async (req, res)=> {
        const db = req.app.get('db')
        let category4 = 4
        const cat4 = await db.readchart([category4])
        console.log(cat4, 'this is the data in the controller function for category4')
        return res.status(200).send(cat4)

    },

    commentData1: async(req, res) => {

        const db = req.app.get('db')
        let com1 = 1
        const comment1 = await db.commentchart([com1])
        console.log(comment1, 'commentData1 controller function?')
        return res.status(200).send(comment1)


    },
    commentData2: async(req, res) => {

        const db = req.app.get('db')
        let com2 = 2
        const comment2 = await db.commentchart([com2])
        return res.status(200).send(comment2)


    },
    commentData3: async(req, res) => {

        const db = req.app.get('db')
        let com3 = 3
        const comment3 = await db.commentchart([com3])
        return res.status(200).send(comment3)


    },
    commentData4: async(req, res) => {

        const db = req.app.get('db')
        let com4 = 4
        const comment4 = await db.commentchart([com4])
        return res.status(200).send(comment4)


    },

}