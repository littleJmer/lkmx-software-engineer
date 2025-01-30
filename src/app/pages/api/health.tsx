import type { NextApiRequest, NextApiResponse } from 'next'
import { HealthCheckResponse } from '@/types'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<HealthCheckResponse>
) {
    res.status(200).json({
        "status": "ok",
        "uptime": 3600,
        "message": "API funcionando correctamente",
        "timestamp": "2025-01-29T12:34:56Z"
    })
}