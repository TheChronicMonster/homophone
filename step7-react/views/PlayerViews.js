import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.pickWord = class extends React.Component {
  render() {
    const {parent, playable, word1} = this.props;
    return (
      <div>
        {word1 ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playWord1('HI')}
        >Hi</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord1('YOU')}
        >You</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord1('WRITE')}
        >Write</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord1('WRACK')}
        >Wrack</button>
        <button
          disabled={!playable}
          onClick={() => parent.playerWord1('WAIT')}
        >Wait</button>
      </div>
    );
  }
}

exports.guessWord = class extends React.Component {
  render() {
    const {parent, playable, word2} = this.props;
    return (
      <div>
        {word2 ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playWord2('HIGH')}
        >High</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord2('EWE')}
        >Ewe</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord2('RITE')}
        >Rite</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord2('RACK')}
        >Rack</button>
        <button
          disabled={!playable}
          onClick={() => parent.playWord2('WEIGHT')}
        >Weight</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
