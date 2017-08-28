import { connect } from 'react-redux';

import App from '../components/app';

const mapStateToProps = (state) => {
    return {
        error: state.app.error,
    };
};

export default connect(mapStateToProps)(App);
