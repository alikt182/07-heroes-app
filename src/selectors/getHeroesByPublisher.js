import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if ( !validPublisher.includes( publisher ) ) {
        throw new Error(`${ publisher } is a not valid publisher`);
    }
    return heroes.filter(hero => hero.publisher === publisher);
}
