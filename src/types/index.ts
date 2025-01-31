export type HealthCheckResponse = {
    status: "ok" | "unhealthy";
    uptime: number;
    message: string;
    timestamp: string;
};

export type RequestUser = {
    first_name: FormDataEntryValue | null;
    last_name: FormDataEntryValue | null;
    age: FormDataEntryValue | null;
    gender: FormDataEntryValue | null;
    pokemon: FormDataEntryValue | null;
};

export type User = {
    firstName: string;
    lastName: number;
    age: string;
    gender: string;
    pokemon: string;
};

export type PieChartState = {
    series: number[];
    options: {
        labels: string[];
        responsive: {
            breakpoint: number;
            options: {
                chart: {
                    width: number;
                };
                legend: {
                    position: string;
                };
            };
        }[];
    };
}

export type PokemonAnalytics = {
    data: PokemonAnalyticsItem[];
}

export type PokemonAnalyticsItem = {
    pokemon: string;
    count: number;
}