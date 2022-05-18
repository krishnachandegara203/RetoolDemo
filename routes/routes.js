// const { json } = require('express')
const express = require('express')
const userModel = require('../models/userSchema')
const router = express.Router()

router.get('/getUser', async(req,res) =>{
    try{
        const getUser = await userModel.find({});
        res.status(200).json(getUser)
    }catch(err){
        res.json(err)
    }
})
router.get('/getUser/:name', async(req,res) =>{
    try{
        const userName = req.params.name;
        const getUser = await userModel.find({name :userName});
        console.log(getUser);
        if(getUser === 0){
            return res.json({data:"User not found"})
        }
        return res.json(getUser)
    }catch(err) {
        res.json(err);
    }
})
//Add User
router.post('/addUser',async(req, res) => {
    try {
        const addUser = new userModel(req.body)
        const saveUser = await addUser.save()
        res.status(200).json(saveUser)
    } catch(err) {
        res.json(err);
    }
})
// Update user by id
router.put('/updateUser/:id',async(req, res)=>{
    try{
        const updateUser = await userModel.findByIdAndUpdate(req.params.id,req.body);
        if(updateUser === 0){
            return res.json({data:"User not found"})
        }
        return res.json({updateUser})
    }catch(err) {
        res.json(err);
    }
})
// Delete User by id
router.delete('/deleteUser/:id', async(req,res) =>{
    try{
        const userId = req.params.id;
        const deleteUser = await userModel.findByIdAndDelete(userId);
        if(deleteUser === 0){
            return res.json({data:"User not found"})
        }
        return res.json({data:"Delete Successully"})
    }catch(err) {
        res.json(err);
    }
})

module.exports = router

// // router.get('/', (req,res) => {
// //    User.find((err,data) => {
// //        if(err) console.log(err);
// //        res.json(data)
// //      })
// // })
// router.get('/', async(req,res) =>{
//     try{
//         const getUser = await User.find({});
//         res.status(200).json(getUser)
//     }catch(err){
//         res.json(err)
//     }
// })
// router.get('/:id', (req,res) => {
//     User.findById(req.params.id ,(err,data) => {
//         if(err) console.log(err);
//         res.json(data)
//       })
//  })
// //  router.get('/getUser/:name', (req,res) => {
// //     User.findOne(req.params.name ,(err,data) => {
// //         if(err) console.log(err);
// //         res.json(data)
// //       })
// //  })
// // router.get('/getUser/:name', async(req,res) =>{
// //     try{
// //         const userName = req.params.name;
// //         const getUser = await User.findOne({name :userName});
// //         console.log(getUser);
// //         if(getUser === 0){
// //             return res.json({data:"User not found"})
// //         }
// //         return res.json({data:getUser})
// //     }catch(err) {
// //         res.json(err);
// //     }
// // })

// router.get('/getUser/:name', async(req,res) =>{
//     try{
//         const userName = req.params.name;
//         const getUser = await User.find({name :userName});
//         console.log(getUser);
//         if(getUser === 0){
//             return res.json({data:"User not found"})
//         }
//         return res.json(getUser)
//     }catch(err) {
//         res.json(err);
//     }
// })



// router.post('/',(req,res) => {
//     const user =new User(req.body)
//     console.log(user);
//     user.save((err,data)=> {
//          if(err) console.log(err);
//          res.json(data)
//     })    
// })
// router.put('/:id',(req,res) =>{
//     User.findOneAndUpdate({
//         _id:req.params.id
//     },req.body,{
//         new : true
//     },(err,data) =>{
//         if(err) console.log(err);
//         res.json(data)
//     })
// })
// router.delete('/:id',(req,res) =>{
//     User.findByIdAndDelete(req.params.id , (err,data) =>{
//         if(err) console.log(err);
//         res.json(data)
//     })
// })
