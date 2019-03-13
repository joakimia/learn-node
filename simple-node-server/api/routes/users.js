const express = require('express');
const router = express.Router();

const SUCCESS_STATUS_CODE = 200;

router.get('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        users: 'Joakim' 
    });
});

router.get('/:userId', (request, response, next) => {
    const id = request.params.userId
    if (id === 'joakim') {
        response.status(SUCCESS_STATUS_CODE).json({
            userName: 'joakim',
            displayName: 'Joakim Amundsen'
        });
    } else {
        response.status(SUCCESS_STATUS_CODE).json({
            message: 'No users with that id',
            userName: '',
            displayName: '',
        });
    }
});

router.post('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        message: 'User created.'
    })
});

router.patch('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        message: 'User updated.'
    })
});

router.delete('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        message: 'User deleted.'
    })
});

module.exports = router;