const router = require('express').Router();
const controller = require('../controllers/authController')
const middleware = require('../middleware/index')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

router.put('/update-password',  middleware.stripToken,
middleware.verifyToken, controller.UpdatePassword)

module.exports = router
