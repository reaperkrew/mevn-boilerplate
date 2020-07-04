const express = require('express');

const router = express.Router();

/* LOGOUT */
router.use('/', (req, res) => {
  req.session.destroy();
  res.redirect('login');
});

module.exports = router;
