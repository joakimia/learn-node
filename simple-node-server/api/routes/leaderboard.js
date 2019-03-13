const express = require('express');
const router = express.Router();

const SUCCESS_STATUS_CODE = 200;

router.get('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        leaders: ['Joakim']
    });
});

module.exports = router;