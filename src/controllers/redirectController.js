const redirectToClassifyNumber = (req, res) => {
  return res.redirect(301, "/api/classify-number?number=9");
};

module.exports = { redirectToClassifyNumber };
