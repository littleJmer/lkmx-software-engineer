export type HealthCheckResponse = {
    status: "ok" | "unhealthy";
    uptime: number;
    message: string;
    timestamp: string;
};

export type User = {
    firstName: string;
    lastName: number;
    age: string;
    gender: string;
    pokemon: string;
};