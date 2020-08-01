import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailServidce from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email } = request.body;

        const sendForgtPasswordEmail = container.resolve(
            SendForgotPasswordEmailServidce,
        );

        await sendForgtPasswordEmail.execute({ email });

        return response.status(204).json();
    }
}
