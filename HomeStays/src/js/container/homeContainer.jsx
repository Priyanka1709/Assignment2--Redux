import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import _ from 'lodash';

import Home from '../components/home/home';
import * as stateActions from '../actions/actions';

const mapStateToProps = state => {
    return {
        filteredCards: (searchString) => getVisibleCards(state.app.cards, searchString),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: () => dispatch(stateActions.fetchCards()),
    }
}

function getVisibleCards(cards, searchString){
    return _.filter(cards, (card, index)=>{
        if (searchString && card.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
            return card;
        }
        else if(!searchString){
            return card;
        }
    })
}

const HomeContainer= (props) => (
    <Home 
        cards={props.filteredCards(props.match.params.string)}
        fetchCards={props.fetchCards}
    />
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
