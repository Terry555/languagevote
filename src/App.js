import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: [
        {name: "French", votes: 0},
        {name: "Spanish", votes: 0},
        {name: "English", votes: 0},
        {name: "Portuguese", votes: 0}
      ]
    }
  }

  vote(i){
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    // function swap(array, i, j){
    //   var temp = array[i];
    //   array[i] = array[j];
    //   array[j] = temp;
    // }
    this.setState({
      languages: newLanguages
    });
  }


  render(){
  return (
      <>
        <h1>Vote Your Language!</h1>
        <div className="languages">
          {
            this.state.languages.map((lang,i) =>
          <div key={i} className="language">
            <div className="voteCount">
              {lang.votes}
            </div>
            <div className="languageName">
              {lang.name}
            </div>
            <button onClick={this.vote.bind(this, i)}>Vote</button>
          </div>
        )
          }
        </div>

      </>
  );
}
}

export default App;
