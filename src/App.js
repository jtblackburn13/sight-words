import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      word: "",
      remainingWords: [],
      level: 1,
      gameIsFinished: false,
      wordList1: ["I", "we", "in", "he", "is", "it", "my", "me", "to", "go", "of", "so"],
      wordList2: ["mom", "can", "the", "and", "are", "was", "up", "has", "do", "at", "for"],
      wordList3: ["but", "see", "she", "you", "out", "our", "had", "her", "him", "his"],
      wordList4: ["like", "look", "said", "one", "some", "this", "that", "come", "they", "have", "here"],
      wordList5: ["with", "play", "little", "love", "which", "could", "would", "were", "from", "want", "your", "went"],
    };
  };

  componentDidMount() {
    this.startNewGame();
  }

  startNewGame() {
    let newRemainingWords = [];
    this.state.wordList1.forEach((word) => {
      newRemainingWords.push(word);
    })
    let index = Math.floor(Math.random() * newRemainingWords.length)
    let newWord = newRemainingWords.splice(index, 1);
    this.setState({
      remainingWords: newRemainingWords,
      word: newWord,
      score: 0,
      level: 1,
      gameIsFinished: false
    })
  }


  handleClick(points) {
    let remainingWords = this.state.remainingWords;
    let newScore = this.state.score + points;
    let level = this.state.level;
    this.setState({
      score: newScore
    })
    if (newScore > this.state.highScore) {
      this.setState({
        highScore: newScore,
      })
    }


    if (remainingWords.length == 0) {
      if (level !== 5) {
        let newLevel = `wordList${level + 1}`;
        remainingWords = this.state[newLevel];
        this.setState({
          level: level + 1
        })
        alert(`You are on level ${level + 1}!!`)
      } else {
        this.setState({
          gameIsFinished: true
        })
        return;
      }
    }

    let index = Math.floor(Math.random() * remainingWords.length)
    let newWord = remainingWords.splice(index, 1);

    this.setState({
      word: newWord,
      remainingWords: remainingWords,
    });
  };





  render() {
    let backgroundColor;
    if (this.state.level == 1) {
      backgroundColor = "navy";
    } else if (this.state.level == 2) {
      backgroundColor = "green";
    } else if (this.state.level == 3) {
      backgroundColor = "yellow";
    } else if (this.state.level == 4) {
      backgroundColor = "red";
    } else if (this.state.level == 5) {
      backgroundColor = "purple";
    }

    return (
      <div style={{ height: "100vh", width: "100vw", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
        <div style={{ width: "100vw", height: "20vh", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>

          <div style={{ width: "20vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div onClick={() => { this.startNewGame() }} style={{ height: "10vh", width: "10vw", display: "flex", backgroundColor: "lightgreen", justifyContent: "center", alignItems: "center", borderRadius: 40, border: "3px solid green" }} >
              <h1 style={{ color: "black", padding: 10, textAlign: "center", fontSize: "2vw" }}>
                New Game
              </h1>
            </div>
          </div>
          <div style={{ width: "50vw" }}>
            <h1 style={{ color: "white", textAlign: "center", fontSize: "4vw" }}>
              Cason's Sight Words
            </h1>
          </div>
          <div style={{ width: "30vw", paddingRight: 20 }}>
            <h2 style={{ color: "white", textAlign: "right", fontSize: "2vw" }}>
              High Score: {this.state.highScore}
            </h2>
            <h2 style={{ color: "white", textAlign: "right", fontSize: "2vw" }}>
              Score: {this.state.score}
            </h2>
          </div>

        </div>
        {
          this.state.gameIsFinished ?
            <div style={{ width: "100vw", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>

              <div style={{ height: "60vh", width: "60vw", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", border: "3px solid blue" }} >
                <h2 style={{ color: "lightgreen", margin: 10, textAlign: "center", fontSize: "6vw" }}>
                  GAME COMPLETE
                </h2>
                <p style={{ color: "white", margin: 10, textAlign: "center", fontSize: "4vw" }}>
                  Your Score: {this.state.score}
                </p>
                <div style={{ flexDirection: "row", margin: 10, display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <p style={{ color: "white", marginRight: 20, textAlign: "center", fontSize: "4vw" }}>
                    Can you do better?
                  </p>
                  <button onClick={() => { this.startNewGame() }}>
                    Try again
                  </button>
                </div>
              </div>
              <div style={{ height: "60vh", width: "20vw", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
                <div onClick={() => { this.startNewGame() }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "green", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    10 points
              </h1>
                </div>
                <div onClick={() => { this.startNewGame() }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "yellow", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    5 points
              </h1>
                </div>
                <div onClick={() => { this.startNewGame() }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    0 points
                  </h1>
                </div>
              </div>
            </div>
            :
            <div style={{ width: "100vw", flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>

              <div style={{ height: "60vh", width: "60vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", border: "3px solid blue" }} >
                <h1 style={{ color: "white", textAlign: "center", fontSize: "10vw" }}>
                  {this.state.word}
                </h1>
              </div>
              <div style={{ height: "60vh", width: "20vw", flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
                <div onClick={() => { this.handleClick(10) }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "green", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    10 points
              </h1>
                </div>
                <div onClick={() => { this.handleClick(5) }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "yellow", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    5 points
              </h1>
                </div>
                <div onClick={() => { this.handleClick(0) }} style={{ height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", border: "3px solid blue" }} >
                  <h1 style={{ color: "black", padding: 10, backgroundColor: "white", textAlign: "center", fontSize: "3vw" }}>
                    0 points
                  </h1>
                </div>
              </div>
            </div>
        }

        <div style={{ width: "100vw", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
          <div style={{ width: "50vw", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "3vw" }}>
              Level: {this.state.level}
            </h2>
          </div>
          <div style={{ width: "50vw", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor }}>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "3vw" }}>
              Words Remaining: {this.state.remainingWords.length}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
