const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/',
  passport.authenticate('google', {  // 'google' = instance of new GoogleStrategy()
    scope: ['profile', 'email']      // 'scope' = specifies to google server, what aceess we want to have inside the user's profile
  })
);

router.get('/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys')
  }
);

module.exports = router;