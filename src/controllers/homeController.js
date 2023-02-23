import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req,res) => { 
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
            
    } catch (error) {
        console.log(error)
    }
}

let getUser = (req,res) => {
    return res.render('bodyUser.ejs')
}

let postUser = async(req,res) => {
    let message = await CRUDservice.createNewUser(req.body)
    return res.send('done!')

}

let displayUser = async (req,res) => {
    let data = await CRUDservice.getAllUser()
    console.log('-------------------------------')
    console.log(data)
    console.log('---------------------------')
    return res.render('displayUser.ejs', {
        dataTable:data
    })
}

let getEditCrud = async (req,res) => {
    let userId =req.query.id;
    if(userId){
        let userData = await CRUDservice.getUserInfoId(userId)
        return res.render('editCrud.ejs',{user:userData})

    }
 
}


let putCrud = async (req,res) => {
    let data = req.body
    let allUser = await CRUDservice.updateUserData(data)

    return res.render('displayUser.ejs', {
        dataTable:allUser
    })
}


let deleteCrud  = async(req,res) => {
    let id = req.query.id;
    if(id){
        await CRUDservice.deleteUser(id)
        return res.send('ok done')
    }else{
        return res.send('not fount')

    }
}

module.exports = {
    getHomePage:getHomePage,
    getUser:getUser,
    postUser:postUser,
    displayUser:displayUser,
    getEditCrud:getEditCrud,
    putCrud:putCrud,
    deleteCrud:deleteCrud
};