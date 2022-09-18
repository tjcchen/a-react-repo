import React from "react";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="app"> Hello React PureComponent! </div>;
  }
}

export default App;
