import type { NextApiRequest, NextApiResponse } from 'next'
import apiHandler from '@/lib/utils/apiHandler';

export default apiHandler({
    GET: (req: NextApiRequest, res: NextApiResponse) => {
        res.status(200).json({ message: "Obteniendo usuarios" });
    },
    POST: (req: NextApiRequest, res: NextApiResponse) => {
        res.status(201).json({ message: "Usuario creado" });
    },
});