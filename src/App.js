import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      wordList: [
        "I",
        "we",
        "in",
        "like",
        "mom",
        "is",
        "it",
        "my",
        "me",
        "to",
        "can",
        "the",
        "and",
        "he",
        "look",
        "but",
        "see",
        "she",
        "said",
        "are",
        "was",
        "with",
        "play",
        "little",
        "love",
        "you",
        "some",
        "come",
        "have",
        "so",
        "here",
        "go",
        "of",
        "they",
        "out",
        "our",
        "from",
        "want",
        "your",
        "could",
        "would",
        "went",
        "up",
        "has",
        "do",
        "at",
        "for",
        "this",
        "had",
        "her",
        "him",
        "his",
        "that",
        "which",
        "one",
        "were"
      ]
    };
  };


  handleClick() {
    let wordList = this.state.wordList;
    let index = Math.floor(Math.random() * wordList.length)
    console.log(`index: ${index}`);
    this.setState({
      word: wordList[index]
    })
  }




  render() {
    return (
      <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "navy" }}>
        <div onClick={() => { this.handleClick() }} style={{ height: "80vh", width: "80vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", border: "3px solid blue" }} >
          <h1 style={{ color: "white", textAlign: "center", fontSize: "15vw" }}>
            {this.state.word}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
