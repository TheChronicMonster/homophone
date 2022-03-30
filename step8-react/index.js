import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const word1ToInt = {'HI': 0, 'YOU': 1, 'WRITE': 2, 'WRACK': 3, 'WAIT': 4};
const word2ToInt = {'HIGH': 0, 'EWE': 1, 'RITE': 2, 'RACK': 3, 'WEIGHT': 4};
const intToOutcome = ['Aleese wins!', 'Alice wins'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if (await reach.canFundFromFaucet()) {
            this.setState({view: 'FundAccount'});
        } else {
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
    selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
    selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
    random() { return reach.hasRandom.random(); }
    async pickWord() { // Fun([], UInt)
        const word1 = await new Promise(resolveWord1P => {
            this.setState({view: 'GetWord1', playable: true, resolveWord1P});
        });
        this.setState({view: 'WaitingForResults', word1});
        return word1ToInt[word1];
    }
    async guessWord() { // Fun([], UInt)
        const word2 = await new Promise(resolveWord2P => {
            this.setState({view: 'GetWord2', playable: true, resolveWord2P});
        });
        this.setState({view: 'WaitingForResults', word2});
        return word2ToInt[word2];
    }
    seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
    informTimeout() { this.setState({view: 'Timeout'}); }
    playWord1(word1) { this.state.resolveWord1P(word1); }
    playWord2(word2) { this.state.resolveWord2P(word2); }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'SetWager'};
    }
    setWager(wager) { this.setState({view: 'Deploy', wager}); }
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({view: 'Deploying', ctc});
        this.wager = reach.parseCurrency(this.state.wager); // UInt
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
        backend.Alice(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Aleese(ctc, this);
    }
    async acceptWager(wagerAtomic) { // Fun([UInt], Null)
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
        });
    }
    seeWord(wordSeen) { this.setState({view: 'See', wordSeen: word1ToInt[wordSeen]}); }
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({view: 'WaitingForTurn'});
    }
    render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);