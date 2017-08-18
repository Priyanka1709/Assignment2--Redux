import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getCardDetails, postCardDetails } from '../common/apiHelper';

import Details from '../components/details/details';
import * as stateActions from '../actions/actions';

const mapStateToProps = state => {
    return {
        fetching: state.app.fetchingData,
        cardDetail: state.app.cardDetail,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCardDetail: (id) => dispatch(stateActions.fetchCardDetail(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
