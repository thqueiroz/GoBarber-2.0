import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import ShowProfileService from './ShowProfileService';

let fakeUserRepository: FakeUserRepository;
let showProfileService: ShowProfileService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUserRepository = new FakeUserRepository();

        showProfileService = new ShowProfileService(fakeUserRepository);
    });
    it('should be able to show the profile', async () => {
        const user = await fakeUserRepository.create({
            name: 'John Doe',
            email: 'johndow@example.com',
            password: '123456',
        });

        const profile = await showProfileService.execute({
            user_id: user.id,
        });

        expect(profile.name).toBe('John Tre');
        expect(profile.email).toBe('johntre@example.com');
    });

    it('should not be able to show the profile from non-existing user', async () => {
        await expect(
            showProfileService.execute({
                user_id: 'non-existing-user-id',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
