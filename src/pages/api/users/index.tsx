import type { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from '@/lib/utils/apiHandler';
import UserService from '@/services/user';
import { User } from '@/types';

export default apiHandler({
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
        const users = await UserService.list();
        res.status(200).json({ data: users });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
        const newUser: User = {
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender,
            pokemon: req.body.pokemon
        };
        await UserService.create(newUser);
        res.status(204);
    },
});