module.exports = (req, res) => {
  const { age } = req.query
  res.render('major', { age })
}
