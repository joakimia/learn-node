const express = require('express');
const router = express.Router();

const SUCCESS_STATUS_CODE = 200;

router.get('/', (request, response, next) => {
    response.status(SUCCESS_STATUS_CODE).json({
        users: 'Joakim' 
    });
});

router.get('/:userId', (request, response, next) => {
    const id = request.params.userId;

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
    const user = {
        userName: request.body.userName,
        displayName: request.body.displayName
    };

    response.status(SUCCESS_STATUS_CODE).json({
        createdUser: user,
        message: 'User created.'
    });
});

router.patch('/', (request, response, next) => {
    const user = {
        displayName: request.body.displayName
    }
    response.status(SUCCESS_STATUS_CODE).json({
        updatedUser: user, 
        message: 'User updated.'
    });
});

router.delete('/', (request, response, next) => {
    const user = {
        userName: request.body.userName
    };

    response.status(SUCCESS_STATUS_CODE).json({
        deletedUser: user,
        message: 'User deleted.'
    });
});

module.exports = router;