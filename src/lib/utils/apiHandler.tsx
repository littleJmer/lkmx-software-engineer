import { NextApiRequest, NextApiResponse } from "next";

export default (handlers: { [key: string]: Function }) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const methodHandler = handlers[req.method as keyof typeof handlers];

        if (!methodHandler) {
            return res.status(405).json({ message: `Not allowed method ${req.method}` });
        }

        return await methodHandler(req, res);
    };
}