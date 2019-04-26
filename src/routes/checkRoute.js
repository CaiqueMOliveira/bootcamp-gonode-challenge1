module.exports = (req, res) => {
  const { age } = req.body

  if (age > 18) return res.redirect(`/major?age=${age}`)
  return res.redirect(`/minor?age=${age}`)
}
