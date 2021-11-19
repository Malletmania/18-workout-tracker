
const Router = require('express').Router();
const Path = require('path')

router.get('/exercise', function (req, res, next) {
  res.sendFile('USER')
})

router.get('/stats', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router;