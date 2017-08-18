import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import _ from 'lodash';

import Home from '../components/home/home';
import * as stateActions from '../actions/actions';
import { getVisibleCards } from '../selectors/selector';

const mapStateToProps = state => {
    return {
        filteredCards: (searchString) => getVisibleCards(state, searchString),
        fetching: state.app.fetchingData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: () => dispatch(stateActions.fetchCards()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
