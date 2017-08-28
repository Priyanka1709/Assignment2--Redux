import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import HomeContainer from '../container/homeContainer';
import DetailsContainer from '../container/detailsContainer';

const App = (props) => (
    <div className={'app container'}>
        <Header/>
        {
            props.error ? <div className={'error'}><h1>{props.error}</h1><h3>Please try again later.</h3></div> : <div className={'pageBody'}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route path="/search/:string" component={HomeContainer}/>
                        <Route exact path="/details/:id" component={DetailsContainer}/>
                        <Redirect path="/search/" to="/"/>
                    </Switch>
                </Router>
            </div>
        }

        <Footer/>
    </div>
);

App.propTypes = {
    error: PropTypes.string,
};

App.defaultProps = {
    error: null,
};

export default App;

