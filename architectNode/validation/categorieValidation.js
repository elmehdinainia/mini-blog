const Joi = require('joi');
const categorieValidation = (body) =>{
    const ProductSchema =  Joi.object({
      name : Joi.string().min(3).max(40).trim().required(),
      email : Joi.string().min(3).max(40).trim().required(),
      description : Joi.string().min(5).max(500)
    })
  return ProductSchema.validate(body)
}
module.exports  = categorieValidation