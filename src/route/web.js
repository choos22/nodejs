import express from "express";
import homeController from '../controllers/homeController'
let router = express.Router();

let initWebRouters = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/user",homeController.getUser)
    router.post("/post-user",homeController.postUser)
    router.get("/display-user",homeController.displayUser)
    router.get("/edit-crud",homeController.getEditCrud)
    router.post("/pust-crud",homeController.putCrud)
    router.get("/delete-crud",homeController.deleteCrud)


    return app.use("/", router)
}

 
module.exports = initWebRouters