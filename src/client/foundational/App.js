import React from 'react';
import fetch from 'isomorphic-fetch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ''
    }
  }

  updateState(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {
    e.preventDefault();
    const names = this.state.names.trim();
    if (!names) {
      return;
    }

    var dataToSend = {"names": names};
    // console.log('dataToSend = ', dataToSend);
    $.post('http://localhost:3000/api/', dataToSend, function(response) {
      console.log('response = ', response);
    });
    
    this.setState({
      names: ''
    });
  }

  render(){
    return (
      <div>
        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          GitHub Handles (Omit any commas or leading '@'.  Separate handles with white space)<br />
          <input
            type="text"
            placeholder="Github Handle"
            value={this.state.names}
            onChange={this.updateState.bind(this, 'names')} 
          />
          <input type="submit" value="Submit" />
        </form>
        <p>this.state.names = {this.state.names}</p>
      </div>
    )
  }
}

export default App