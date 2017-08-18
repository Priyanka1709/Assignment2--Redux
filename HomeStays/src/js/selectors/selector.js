import { createSelector } from "reselect";
import _ from "lodash";

const getCards = (state) => state.app.cards;

const getSearchString = (state, searchString) => searchString;

export const getVisibleCards = createSelector(
    [getCards, getSearchString], (cards, searchString) => _.filter(cards, (card, index) => {
        if (searchString && card.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
            return card;
        } else if (!searchString) {
            return card;
        }
    })
);
