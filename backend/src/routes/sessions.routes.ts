import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticationUser = new AuthenticationUserService();

    const { user, token } = await authenticationUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionRouter;
