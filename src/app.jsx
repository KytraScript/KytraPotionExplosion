import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, HashRouter, useParams, Link, Redirect} from "react-router-dom";
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

    takePotion(idx){
        this.state.stacks[idx].pop();
        this.setState(this.state);
    }

    render() {
        const {starters, stacks} = this.state;

        return (
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/">
                        <StartPage pots={starters} />
                        <Link to="/stacks">Potion Stacks -></Link>
                    </Route>
                    <Route path="/stacks">
                        <StacksPage stacks={stacks} handleClick={this.takePotion.bind(this)}/>
                        <Link to="/">&lt;- Starters</Link>
                    </Route>
                </Switch>
            </HashRouter>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));