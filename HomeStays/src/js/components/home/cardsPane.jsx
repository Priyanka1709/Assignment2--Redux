import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import _ from 'lodash';

const CardsPane = (props) => (
    <div className="cardsPane">
        {
            props.fetching && <h3>{'Loading...'}</h3>
        }
        {
            props.cards && (props.cards.length ?
                _.map(props.cards, (value, index) => <Card key={index} item={value}/>) : <h3>{'No results found!!'}</h3>)
        }
    </div>
);

CardsPane.propTypes = {
    fetching: PropTypes.bool,
    cards: PropTypes.array,
};

CardsPane.defaultProps = {
    fetching: false,
    cards: null,
};

export default CardsPane;
