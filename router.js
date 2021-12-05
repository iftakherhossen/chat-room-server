const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('chatting is server running on')
});

module.exports = router;