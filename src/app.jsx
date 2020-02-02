import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, useParams, Link, Redirect} from "react-router-dom";
import newGame from '../Logic/newGameLogic';
import potions from '../Logic/potions';
import StartPage from "./components/StartPage.jsx";
import StacksPage from "./components/StacksPage.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);

        const [starters, stacks] = newGame(potions, 2);
        this.state = {
            starters,
            stacks
        };
    }

    componentDidMount() {

    }

    render() {
        const {starters, stacks} = this.state;

        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <StartPage pots={starters} />
                    </Route>
                    <Route path="/stacks">
                        <StacksPage stacks={stacks} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));