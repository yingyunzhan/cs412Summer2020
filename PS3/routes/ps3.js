const express = require('express');
const router = express.Router();

// http://localhost:3000/ps3
router.route('/')

// http://localhost:3000/ps3?name=yingyun&message=hey!
.get((req, res, next) => {
    res.render('ps3', {title: "Yingyun's PS3", name:req.query.name, message:req.query.message });
})

.post((req, res, next) => {
    res.render('ps3', {string: req.body.string, len: req.body.string.length});
})


module.exports = router;