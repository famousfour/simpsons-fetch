import React, { Component } from 'react';
import GetNewQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';
import './App.css';



const sampleQuote = {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
};     



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:  sampleQuote,
    };
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    });
}

  render() {
    return (
      <div>
        <GetNewQuote selectQuote={() =>  this.getQuote()} />
        <DisplayQuote  quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
