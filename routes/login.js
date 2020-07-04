const express = require('express');

const router = express.Router();

const { doLogin } = require('../database/auth');
const { validEmail, validPassword } = require('../util/validation');
const winston = require('../config/winston');

/* GET login page. */
router.get('/', (req, res) => {
  res.render('login');
});

/* POST login page. */
router.post('/', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) return res.render('login', { error: true });
    if (!validEmail(String(req.body.email).trim().toLowerCase())) return res.render('login', { error: true });
    if (!validPassword(String(req.body.password).trim())) return res.render('login', { error: true });
    const user = await doLogin(
      String(req.body.email).trim().toLowerCase(),
      String(req.body.password).trim(),
    );
    if (user) {
      req.session.user = user;
      await req.session.save();
      return res.redirect('/');
    }
    return res.render('login', { error: true });
  } catch (err) {
    winston.error('Caught error during POST login');
    winston.error(err);
    return res.render('login', { error: true });
  }
});

module.exports = router;
