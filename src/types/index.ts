export type HealthCheckResponse = {
    status: "ok" | "unhealthy";
    uptime: number;
    message: string;
    timestamp: string;
};