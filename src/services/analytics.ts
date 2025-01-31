import UserModel from "@/server/models/user";
import sequelize from "@/server/db";
import { PokemonAnalyticsItem } from "@/types";

const analyticsService = {

    pokemons: async (): Promise<PokemonAnalyticsItem[]> => {

        const rows = await UserModel.findAll({
            attributes: ['pokemon', [sequelize.fn('count', sequelize.col('pokemon')), 'count']],
            group: ['pokemon']
        });

        return rows.map(row => row.toJSON() as PokemonAnalyticsItem);
    },

};

export default analyticsService;