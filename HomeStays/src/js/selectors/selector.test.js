import { getVisibleCards } from './selector';

describe('selector', () => {
    let searchString;
    const state = {
        app: {
            cards: [{
                "name": "Jaipur | Souvenir Peppermint"
            },
            {
                "name": "Agra | Taj"
            }],
            fetching: false,
        }
    }

    it('should return filtered result', () => {
        searchString = 'Jai';
        expect(getVisibleCards(state, searchString)).toEqual([{
            "name": "Jaipur | Souvenir Peppermint"
        }]);
    })

    it('should return all cards', () => {
        searchString = '';
        expect(getVisibleCards(state, searchString)).toEqual([{
            "name": "Jaipur | Souvenir Peppermint"
        },
        {
            "name": "Agra | Taj"
        }]);
    })
})