import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FlagCard from './components/FlagCard';
import flags from './flags.json';


function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};



class App extends Component {
  // set up state and have it keep track of flagList 
  state = {
    flagList: flags,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(flags);
    this.setState({ friends: shuffledCards });
  };

  // render
  render () {
    return (
      <Wrapper>
        <Navbar
          title="The International Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        {
          this.state.flagList.map(flag => {
            return (
              <FlagCard 
                key={flag.id}
                id={flag.id}
                name={flag.name}
                image={flag.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
              />
  
            )
          })
        }
      </Wrapper>
    )
  }
}

export default App;
