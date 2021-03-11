
// HOME PAGE
exports.home = (req, res, next) => {
  res.status(200).render('home');
};

// ABOUT PAGE
exports.aboutMe = (req, res, next) => {
  res.status(200).render('about', { name: 'Imran Great' });
};
