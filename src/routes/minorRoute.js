module.exports = (req, res) => {
  const { age } = req.query
  res.render('minor', { age })
}
