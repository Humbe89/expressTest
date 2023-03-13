const { Router } = require('express');
const { usersGet, userDelete, usersPatch, userPost } = require('../controllers/user');

const router = Router();


router.get("/", usersGet);
router.post("/", userPost);
router.patch("/", usersPatch);
router.delete("/", userDelete);

  router.post("/", (req, res) => {
    res.json({"msg": "Hello, world!"});
  });


module.exports = router;