const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require('../models/user')
const { validationResult } = require('express-validator')
const { validate } = require('../middlewares/validate');

const getUsers = async (req, res = response) => {
   // const {name = 'No Name', age, page, final} = req.query;
   const {limite = 5 , desde = 0} = req.query;
    const users = await User.findOne()
    .skip(parseInt(desde))
    .limit(parseInt(limite));
    const total = await User.countDocuments();
  res.send({total: total,  users });
};

const createUser = async (req = request, res = response) => {
/*   const errors = validationResult(req);
  if(!errors.isEmpty()){
     return res.status(400).json(errors);
  } */
   
    const data = req.body;
    const user = new User( data );
    
    user.password = bcryptjs.hashSync(user.password, 10);

    //await user.save();
  res.send({ user});
};
const deleteUser = (req, res = response) => {
  res.send({ msg: "Delete" });
};
const updateUser = async (req, res = response) => {
    const { id } = req.params;
    const {password, google, ...resto} = req.body;

    //TODO: Validate password with database
    if(password){
      req.body.password = bcryptjs.hashSync(user.password, 10); //Change by resto for test
    }
    const User = await User.findByIdUpdate(id, resto); 
   
};

module.exports = { getUsers, createUser, deleteUser, updateUser};
