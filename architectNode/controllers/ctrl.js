// import { response } from "express";
// import { json } from "sequelize";
const { databaseVersion } = require("../db/db.js");
const commentaire = require("../models/commentaire");

const categorieValidation = require("../validation/categorieValidation.js");

const getAll = (req, res) => {
    commentaire.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
        .then(commentaire => {
            res.status(200).render('dachbord', { commentaire: commentaire }) // non de la page et parameter ,2 dans la pagze EJS 
        })
        .catch((error) => res.status(500).json(error))
};

// ! insert row in table 


const createOne = (req, res) => {
    const {body} = req
    commentaire.create({...body})
    .then(()=>{
        res.status(201).json({msg:"success"})
    })
    .catch(error => res.status(500).json(error))

}


// ! return one row from table 

const getOne = (req, res) => {
    const { id } = req.body   // input hidden id 
    commentaire.findByPk(id)
        .then(commentaire => {
            if (!commentaire) return res.status(404).json({ msg: 'not found' })
            res.status(200).render('updateForm', { commentaire: commentaire });
        })
}

// ! update 

const updateOne = (req, res) => {
    // const {id} = req.params
    const { body } = req;
    const id = body.id
    commentaire.findByPk(id).then(commentaire => {
        commentaire.name = body.name
        commentaire.email = body.email
        commentaire.description = body.description
        commentaire.save().then(() => {
            res.redirect('/getAll')
        })
    })
}



// ! delete 
const deleteOne = (req, res) => {
    const { id } = req.body
    commentaire.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/getAll')
        })
        .catch((error) => res.status(500).json(error));
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };

