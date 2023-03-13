const { request, response } = require("express");

const usersGet = (req, res = response) => {
    const {name = 'No Name', age, page, final} = req.query;
    console.log( name, age, page, final );
  res.send({ name, age, page, final });
};

const userPost = (req = request, res = response) => {
    const data = req.body;
  res.send({ "msg": data  });
};
const userDelete = (req, res = response) => {
  res.send({ msg: "Delete" });
};
const usersPatch = (req, res = response) => {
  res.send({ msg: "Patch" });
};

module.exports = { usersGet, userPost, userDelete, usersPatch };
