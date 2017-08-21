import { connect } from 'react-redux';

import Details from '../components/details/details';
import * as stateActions from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        fetching: state.app.fetchingData,
        cardDetail: state.app.cardDetail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCardDetail: (id) => dispatch(stateActions.fetchCardDetail(id)),
        postCardDetail: (id, data) => dispatch(stateActions.postCardDetail(id, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
