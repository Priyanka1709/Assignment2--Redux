import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import HomeContainer from './container/homeContainer';
import DetailsContainer from './container/detailsContainer';

class App extends React.PureComponent{
    render(){
        return (
            <div className={'app container'}>
                <Header/>
                <div className={'pageBody'}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route path="/search/:string" component={HomeContainer}/>
                            <Route exact path="/details/:id" component={DetailsContainer}/>
                            <Redirect path="/search/" to="/" />
                        </Switch>
                    </Router>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

