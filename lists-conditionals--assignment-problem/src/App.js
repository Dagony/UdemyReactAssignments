import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {

    state = {
        fieldLength : 0,
        chars: []
    };

    deleteLetterHandler = (charIndex) => {
        const chars = [...this.state.chars];
        chars.splice(charIndex, 1);
        this.setState({chars: chars});
    };

    myChangeHandler = (event) => {
        this.setState({
            fieldLength: event.target.value.length,
            chars: event.target.value.split('')
        });
    };

  render() {

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
            type="text"
            onChange={(event) => this.myChangeHandler(event)}
            name="MyInputField"
            value={this.state.chars.join('')}
        />
        <p id="lengthOutputter">{this.state.fieldLength}</p>
          <ValidationComponent fieldLength={this.state.fieldLength} />
          {this.state.chars.map((character, index) => {
              console.log(index);
              return (<CharComponent click={() => this.deleteLetterHandler(index)} character={character} />);
          })}
      </div>


    );
  }
}



export default App;
