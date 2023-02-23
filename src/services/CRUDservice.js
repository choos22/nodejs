import bcrypt from'bcryptjs';
import db from '../models';
const salt = bcrypt.genSaltSync(10);



let createNewUser = async (data) => {
    return new Promise( async (resolve,reject) => {
        try {
            const hashPasswordFronBcrypt = await hashUserPassword(data.password)
            //gửi data mới lên database
            await db.User.create({
                fullname: data.fullname,
                email:data.email,
                phone_number:data.phone_number,
                address:data.address,
                password:hashPasswordFronBcrypt,
                role_id:data.role_id,
            }) 
            resolve('okla')
        } catch (error) {
            reject(error)
        }
    })
    
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync("B4c0/\/", salt); //hashpassword tăng bảo mật chuyển thành chuỗi ký tự 
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw:true
            }); // lấy tất cả file trong bảng user
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}

let getUserInfoId = (userId) => {
    return  new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where:{id: userId},
                raw:true
            })
            if(user){
                resolve(user)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve,reject) => {
        try {
            let user = await db.User.findOne({
                where:{id: data.id}
            })
            if(user){
                user.fullname = data.fullname,
                user.address= data.address,
                user.phone_number = data.phone_number

                await user.save();

                let allUser = await db.User.findAll();
                resolve(allUser)
            } else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUser = (userId) =>{
    return  new Promise(async(resolve, reject) => {
        try {
            let user =await db.User.findOne({
                where: {id:userId }
            })
            if(user) {
                await user.destroy()
            }
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    getUserInfoId:getUserInfoId,
    updateUserData:updateUserData,
    deleteUser:deleteUser
}