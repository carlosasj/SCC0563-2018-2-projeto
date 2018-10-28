import { Request, Response } from "express";

export async function ping(req: Request, res: Response) {
    return res.status(200).json({ok: true});
}