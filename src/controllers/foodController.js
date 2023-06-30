import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import food from "../models/food.js";
import {successCode } from "../config/response.js";
const models=initModels(sequelize)
const getLikeRes=async(req,res)=>{
    try {
         const data=await models.like_res.findAll({where:{res_id:req.params.res_id}})
         successCode(res,"thành công")
    } 
     catch{
      res.status(500).send("lỗi BE") 
    }
}
const getLikeUser=async(req,res)=>{
    try {
         const data=await models.like_res.findAll({where:{user_id:req.params.user_id}})
          successCode(res,"thành công")
    } 
     catch{
      res.status(500).send("lỗi BE") 
    }
}
const postLike=async(req,res)=>{
    try {
        let {user_id,res_id,date_like}=req.body;
    let newData={
        user_id:user_id,
        res_id:res_id,
        date_like:date_like,
    }
    await models.like_res.create(newData);
    successCode(res,"create success");
    } 
    catch{
      res.status(500).send("lỗi BE") 
    }
}
const deletePost = async (req, res) => {
    try {
        const { res_id, user_id } = req.params;

        const checkRes = await models.restaurant.findOne({ where: { res_id } });
        const checkUser = await models.users.findOne({ where: { user_id } });

  if (checkRes && checkUser) {
    await models.like_res.destroy({ where: { res_id, user_id } });
    successCode(res,"xóa thành công")
  } else {
    res.send("Dữ liệu không tồn tại");
  }
    } 
    catch{
      res.status(500).send("lỗi BE") 
    }
  
};



const postRate=async(req,res)=>{
    try {
        let {user_id,res_id}=req.body
    let newData={
        user_id:user_id,
        res_id:res_id
    }
    await models.rate_res.create(newData)
    res.send("success")
    } 
     catch{
      res.status(500).send("lỗi BE") 
    }
}
const getRateUser=async(req,res)=>{
    try {
        const data= await models.rate_res.findAll({where:{user_id:req.params.user_id}})
        res.send(data)
    }
    catch{
      res.status(500).send("lỗi BE") 
    }
}
const getRateRes=async(req,res)=>{
    try {
         const data= await models.rate_res.findAll({where:{res_id:req.params.res_id}})
        successCode(res,"success")
    } 
    catch{
      res.status(500).send("lỗi BE") 
    }
}


const order=async(req,res)=>{
    try {
         let {user_id, food_id, amout, code, arr_sub_id}=req.body
    const checkUser=await models.users.findOne({where:{user_id}})
    const checkFood=await models.food.findOne({where:{food_id}}) 
    if (checkFood && checkUser) {
        let newData={
            user_id:user_id,
            food_id:food_id,
            amout:amout,
            code:code,
            arr_sub_id:arr_sub_id
        }
        await models.orders.create(newData)
        res.send("thành công")
  } else {
    res.send("lỗi dữ liệu")
}
    } 
    catch{
      res.status(500).send("lỗi BE") 
    }
   
}
export {postLike,deletePost,getLikeRes,getLikeUser,postRate,getRateRes,getRateUser,order}