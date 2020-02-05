import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, HashRouter, useParams, Link, Redirect} from 'react-router-dom';
import newGame from '../Logic/newGameLogic';
import potions from '../Logic/potions';
import StartPage from './components/StartPage.jsx';
import StacksPage from './components/StacksPage.jsx';
import PotionCard from './components/PotionCard.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        const [starters, stacks] = newGame(potions, 2);
        this.state = {
            starters,
            stacks,
            usedPots: []
        };
    }

    componentDidMount() {

    }

    takePotion(idx) {
        let lastChosen = this.state.stacks[idx].pop();
        this.state.usedPots.push(lastChosen);
        this.setState(this.state, () => {
            console.log(this.state);
        });
    }

    render() {
        const {starters, stacks} = this.state;

        return (
            <HashRouter basename="/">
                <div className="container-col">
                    <Switch>
                        <Route exact path="/">
                            <StartPage pots={starters}/>
                            <Link to="/stacks">Potion Stacks -></Link>
                        </Route>
                        <Route path="/stacks">
                            <div className={'stacks-row'}>
                            <StacksPage stacks={stacks} handleClick={this.takePotion.bind(this)}/>
                            </div>
                            <div className={'status-row'}>
                                <div className={'stack last-chosen'}>
                                    <span className={'last-chosen-label'}>Last Chosen Potion:</span>
                                    {this.state.usedPots.length ? <PotionCard potion={this.state.usedPots[this.state.usedPots.length - 1]}/> : ''}
                                </div>
                            </div>
                            <Link to="/">&lt;- Starters</Link>
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));