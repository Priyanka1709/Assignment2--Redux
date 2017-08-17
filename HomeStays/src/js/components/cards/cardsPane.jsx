import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import _ from 'lodash';

const CardsPane= (props) => (
    <div className="cardsPane">
        {props.cards.length ? _.map(props.cards, (value, index) => {
            return <Card key={index} item={value}/>;
        }) : <h3>{'Loading...'}</h3>
        }
    </div>
);

CardsPane.propTypes = {
    searchString: PropTypes.string,
};

CardsPane.defaultProps = {
    searchString: '',
};

export default CardsPane;
