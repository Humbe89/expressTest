const { Router } = require('express');
const { check } = require('express-validator');
const {  getUsers, createUser, deleteUser, updateUser } = require('../controllers/userController');
const { isRoleValid, emailExist } = require('../helpers/db-validators');
const {  validate } = require('../middlewares/validate');


const router = Router();


router.get("/", getUsers);
router.post("/", [
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Password is required').isLength({min:6}), 
  check('email',).custom(emailExist),
  //check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom( isRoleValid ),
  validate
] , createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

  router.post("/", (req, res) => {
    res.json({"msg": "Hello, world!"});
  });


module.exports = router;