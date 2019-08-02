import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    }
  }

  onSubmit() {
    window.print();
  }
  change(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              onChange={this.change.bind(this)}
              value={this.state.username}
              onClick={this.onSubmit.bind(this)}
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
            />
          </div>
          <br />
          <div>
            <button onClick={this.onSubmit.bind(this)}>submit</button>
          </div>
        </form>
      </div>
    )
  }
}
