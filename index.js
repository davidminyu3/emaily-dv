const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // duration of existence in browser, before the cookie expires
    keys: [keys.cookieKey]  // used to assign/encrypt cookies
  })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
app.use('/auth/google', authRoutes);

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);