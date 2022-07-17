const router = require('express').Router();

const {
  getCards, createCard, deleteCardId, likeCard, removeLikeCard,
} = require('../controllers/cards');

const {
  validationCreateCard,
  validationCardId,
} = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', validationCreateCard, createCard);
router.put('/:cardId/likes', validationCardId, likeCard);
router.delete('/:cardId/likes', validationCardId, removeLikeCard);
router.delete('/:cardId', validationCardId, deleteCardId);

module.exports = router;
