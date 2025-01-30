import { NextApiRequest, NextApiResponse } from "next";

export default (handlers: { [key: string]: Function }) => {
    return (req: NextApiRequest, res: NextApiResponse) => {
        const methodHandler = handlers[req.method as keyof typeof handlers];

        if (!methodHandler) {
            return res.status(405).json({ message: `Not allowed method ${req.method}` });
        }

        return methodHandler(req, res);
    };
}