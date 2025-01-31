import type { NextApiRequest, NextApiResponse } from 'next'
import analytics from '@/services/analytics'
import { PokemonAnalytics } from '@/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PokemonAnalytics>
) {
    const pokemons = await analytics.pokemons();
    const pokemonAnalytics: PokemonAnalytics = { data: pokemons };
    res.status(200).json(pokemonAnalytics)
}