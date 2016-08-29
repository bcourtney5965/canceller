import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return (
      <div>
        <div>GitHub Handle (Omit leading '@')</div>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Github Handle"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <p>this.state.text = {this.state.text}</p>
      </div>
    )
  }
}

export default App