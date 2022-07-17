const router = require('express').Router();

const {
  getUsers, getUserId, updateUser, updateAvatar, getUser,
} = require('../controllers/users');

const {
  validationUpdateAvatar,
  validationUpdateUser,
  validationGetUserId,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/me', getUser);
router.get('/:userId', validationGetUserId, getUserId);

// router.post('/', postUser);

router.patch('/me', validationUpdateUser, updateUser);

router.patch('/me/avatar', validationUpdateAvatar, updateAvatar);

module.exports = router;
