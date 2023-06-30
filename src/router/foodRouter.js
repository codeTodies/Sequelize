import express from 'express'
import { deletePost, getLikeRes, getLikeUser, getRateRes, getRateUser, order, postLike, postRate } from './../controllers/foodController.js'
const foodRouter=express.Router()
foodRouter.get("/get-like-res/:res_id",getLikeRes)
//link Postman: localhost:8080/api/food/get-like-res/:res_id

foodRouter.get("/get-like-user/:user_id",getLikeUser)
//link Postman: localhost:8080/api/food/get-like-user/:user_id

foodRouter.post('/post-like',postLike)
//link Postman: localhost:8080/api/food/post-like

foodRouter.delete('/delete-like/:res_id/:user_id',deletePost)
//link Postman: localhost:8080/api/food/delete-like/:res_id/:user_id

foodRouter.post("/post-rate",postRate)
//link Postman: localhost:8080/api/food/post-rate

foodRouter.get("/get-rate-user/:user_id",getRateUser)
//link Postman: localhost:8080/api/food/get-rate-res/:user_id

foodRouter.get("/get-rate-res/:res_id",getRateRes)
//link Postman: localhost:8080/api/food/get-rate-res/:res_id

foodRouter.post("/order",order)
//link Postman: localhost:8080/api/food/order

export default foodRouter